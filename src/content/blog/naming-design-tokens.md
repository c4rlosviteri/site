---
title: "Nombres de tokens que explican su propósito"
description: "Una nota sobre la diferencia entre nombrar un color por su valor y nombrarlo por la función que cumple en la interfaz."
pubDate: 2026-10-04
tags: ["Design systems", "CSS", "Accessibility"]
lang: es
draft: true
---

Un token puede describir un valor, como `red-500`, o una intención, como `color-action-primary`. Ambos nombres sirven, pero responden preguntas distintas.

## Valor e intención

Un token primitivo guarda un valor reutilizable. Un token semántico expresa para qué se usa ese valor. Separar ambas capas permite cambiar la apariencia sin cambiar el significado de un componente.

```css
:root {
  --red-500: oklch(0.67 0.23 30);
  --color-action-primary: var(--red-500);
}

.primary-action {
  background: var(--color-action-primary);
}
```

El nombre `color-action-primary` evita que el componente dependa de un color concreto. La acción puede seguir siendo primaria aunque el tema cambie.

## El nombre no garantiza accesibilidad

Un token llamado `text-muted` todavía puede tener contraste insuficiente. El nombre expresa la intención; la combinación de texto y fondo debe verificarse por separado, incluyendo estados de foco y diferentes temas.

También conviene evitar usar el color como única señal. Un error necesita un mensaje comprensible, además del estilo visual.

## Una pregunta útil al revisar un token

¿Este nombre describe una decisión del sistema o solamente el aspecto que tiene hoy?

La respuesta ayuda a elegir qué valores pertenecen a la paleta y cuáles merecen un nombre semántico. No todos los valores necesitan otra capa: la separación sirve cuando aclara una decisión que los componentes comparten.
