import esbuild from "esbuild";

esbuild.build({
	entryPoints: ["main.ts"],
	bundle: true,
	external: ["obsidian"],
	format: "cjs",
	platform: "node",
	outfile: "main.js",
}).catch(() => process.exit(1));
