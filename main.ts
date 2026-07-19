import { FileSystemAdapter, Notice, Plugin } from "obsidian";
import { execFile } from "node:child_process";

export default class OpenPdfZathura extends Plugin {

	async onload() {
		new Notice("Plugin Open PDF in Zathura cargado");

		this.addRibbonIcon(
			"file-text",
			"Abrir PDF en Zathura",
			() => this.openActivePdf()
		);

		this.addCommand({
			id: "open-pdf-zathura",
			name: "Abrir PDF actual en Zathura",
			callback: () => this.openActivePdf(),
		});
	}

	private openActivePdf(): void {
		const file = this.app.workspace.getActiveFile();

		if (!file) {
			new Notice("No hay ningún archivo abierto.");
			return;
		}
		if (file.extension.toLowerCase() === "pdf") {

    		    const adapter = this.app.vault.adapter;

    		    if (!(adapter instanceof FileSystemAdapter)) {
        	    new Notice("No se pudo obtener la ruta del PDF.");
        	    return;
    		}

    		const fullPath = adapter.getFullPath(file.path);

    		execFile("zathura", [fullPath], (error) => {
        	    if (error) {
            	    console.error(error);
            	    new Notice("No se pudo abrir el PDF.");
            	    return;
        	}

        	new Notice(`Abierto en Zathura: ${file.name}`);
    		});

    		return;
		}


 		/*
		if (file.extension.toLowerCase() !== "pdf") {
			new Notice("El archivo activo no es un PDF.");
			return;
		}
		*/
		const adapter = this.app.vault.adapter;

		if (!(adapter instanceof FileSystemAdapter)) {
			new Notice("No se pudo obtener la ruta del PDF.");
			return;
		}

		const fullPath = adapter.getFullPath(file.path);

		const cache = this.app.metadataCache.getFileCache(file);

		const pdf = cache?.frontmatter?.pdf;
		const page = cache?.frontmatter?.page;
		
		if (!pdf || !page) {
    		new Notice("La nota no tiene las propiedades pdf o page.");
   	        return;
		}
		


		const path = require("path");

		const pdfPath = path.resolve(
    		    path.dirname(fullPath),
    		    pdf
		);

		execFile(
    		    "zathura",
    		    ["-P", String(page), pdfPath],
    		    (error) => {
        		if (error) {
            		console.error("Error al abrir Zathura:", error);
            		new Notice("No se pudo abrir el PDF en Zathura.");
            		return;
        	}

       		 new Notice(`Abierto en Zathura: ${pdf}`);
   		 }
		);
		}

	onunload() {
		console.log("Plugin descargado");
	}
}
