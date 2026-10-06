# Escribir en el blog

Los artículos viven en `src/content/blog/` y se escriben en Markdown. El archivo `naming-design-tokens.md` es un borrador inicial para revisar y adaptar a tu propia voz; no se publica en la versión de producción.

## Crear una nota

Copia el borrador con un nombre de archivo que describa el tema, por ejemplo `medir-renderizados-react.md`. El nombre determina la URL: `/blog/medir-renderizados-react/`.

```yaml
---
title: "Título del artículo"
description: "Qué podrá aprender la persona que lo lea."
pubDate: 2026-10-04
tags: ["React", "Performance"]
lang: es
draft: true
---
```

Escribe debajo del bloque. Puedes usar encabezados `##`, listas, enlaces, imágenes y bloques de código con su lenguaje. El índice del artículo se genera a partir de sus encabezados `##`.

## Previsualizar y publicar

1. Ejecuta `npm run dev` y abre `/blog/`. Los borradores aparecen únicamente en desarrollo, identificados como borradores.
2. Revisa el título, contenido, enlaces y formato en móvil. Usa `lang: en` para un artículo en inglés.
3. Para publicar, cambia `draft` a `false` y establece la fecha de publicación. Los artículos con fecha futura también quedan excluidos de producción; necesitan un nuevo build cuando llegue esa fecha.
4. Ejecuta `npm run build` y despliega por el proceso habitual del sitio. Guardar un archivo local no publica la web.

La sección de notas y el enlace del blog están ocultos por ahora. Para volver a mostrarlos, añade `Writing` a `src/pages/index.astro` y el enlace `/blog/` a `Header.astro`. Las rutas y los borradores se conservan. Cada artículo tiene su propia URL, descripción para buscadores, fecha, tiempo de lectura estimado y datos estructurados. Si actualizas una nota publicada, añade `updatedDate` con la nueva fecha.

Antes de publicar ejemplos de trabajo, usa código propio o ejemplos simplificados que puedas compartir públicamente.
