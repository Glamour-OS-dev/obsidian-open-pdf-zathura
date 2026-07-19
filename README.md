# Open PDF Zathura

Plugin para Obsidian que permite abrir documentos PDF en Zathura desde Obsidian.

## Características

- Abre el PDF activo en Zathura.
- Abre un PDF indicado mediante propiedades YAML.
- Permite abrir el PDF directamente en una página concreta.
- Ideal para enlazar apuntes con libros de texto.

---

## Uso

### 1. Abrir un PDF

Abre cualquier PDF en Obsidian y pulsa el botón del plugin.

El documento se abrirá en Zathura.

---

### 2. Abrir un libro desde una nota

Añade el siguiente frontmatter al principio de una nota:

```yaml
---
pdf: ../Recursos/Libro Automatas.pdf
page: 85
---
```

Al pulsar el botón del plugin se abrirá el PDF indicado directamente en la página especificada.

---

## Ejemplo

```
Automatas, gramáticas y lenguajes/
│
├── Recursos/
│   └── Libro Automatas.pdf
│
├── Tema 2/
│   ├── Tema 2.md
│   └── T2_AutomatasFinitos.pdf
│
└── Tema 3/
    └── Tema 3.md
```

Contenido de `Tema 3.md`:

```yaml
---
pdf: ../Recursos/Libro Automatas.pdf
page: 85
---
```

---

## Requisitos

- Obsidian
- Zathura instalado y disponible en el PATH

---

## Licencia

MIT
