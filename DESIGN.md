---
name: TecnoFix
description: Servicio técnico a domicilio en Barranquilla; el sitio es la orden de servicio del taller.
colors:
  mat: "#24575A"
  mat-deep: "#1B4547"
  mint: "#9FE3D6"
  fog: "#DDEDEB"
  paper: "#F7F7F2"
  paper-rule: "#CBCEC5"
  paper-dim: "#5A605C"
  carbon: "#1F3FD1"
  stamp: "#D7261E"
  ink: "#121615"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(46px, 8.4vw, 96px)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 72"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(40px, 6vw, 72px)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 900
    lineHeight: 1
    fontVariation: "'wdth' 75"
  price:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(40px, 9vw, 54px)"
    fontWeight: 900
    lineHeight: 1
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 75"
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.12em"
  typed:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.375
rounded:
  none: "0px"
  seal: "9999px"
spacing:
  gutter: "16px"
  gutter-wide: "32px"
  sheet-x: "20px"
  sheet-x-wide: "32px"
  section: "80px"
  section-wide: "112px"
  column-gap: "48px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.paper}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
    height: "52px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
    height: "52px"
  button-paper-hover:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fog}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
    height: "52px"
  device-option:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "48px"
  device-option-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  field-typed:
    backgroundColor: "transparent"
    textColor: "{colors.carbon}"
    typography: "{typography.typed}"
    rounded: "{rounded.none}"
    padding: "4px 0"
  order-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px 32px"
    width: "620px"
  seal:
    backgroundColor: "transparent"
    textColor: "{colors.stamp}"
    rounded: "{rounded.seal}"
    size: "128px"
  nav-bar:
    backgroundColor: "{colors.mat}"
    textColor: "{colors.fog}"
    height: "72px"
---

# Design System: TecnoFix

## Overview

**Creative North Star: "El tapete del taller"**

Todo el sitio está sobre un tapete antiestático verde-azul con su cuadrícula impresa, y encima de él se apoyan los papeles del taller: la orden de servicio de talonario, las tarjetas de precio, las fotos impresas con borde blanco. El visitante no mira un folleto; llena una orden. Los valores que el cliente escribe o que el taller cotiza aparecen en tinta de calco azul; lo que el taller garantiza lleva el sello rojo.

La densidad es de mesa de trabajo, no de revista: titulares condensados enormes en mayúsculas sobre el tapete, y papeles con reglas finas, etiquetas de campo y valores mecanografiados. Los papeles pueden girarse uno o dos grados, como si alguien los hubiera dejado sobre la mesa; nunca flotan con sombra. Todo es recto y de esquina viva, salvo el sello y el logo.

**Key Characteristics:**
- Fondo único: el tapete (#24575A) con cuadrícula de 24px y mayor de 120px, en todas las páginas.
- Superficies de trabajo en papel de talonario, con borde superior perforado.
- Tres voces de color con trabajo asignado: azul de calco para valores, rojo de sello para garantías, menta para acentos sobre el tapete.
- Archivo condensada 900 en mayúsculas para titulares; Courier Prime solo para lo mecanografiado.
- Sin sombras, sin degradados de color, sin esquinas redondeadas.

## Colors

Una mesa de trabajo fría y técnica con dos tintas de oficina encima: el calco y el sello.

### Primary
- **Tinta de calco** (carbon): valores llenados y precios sobre papel: el rango estimado de la orden, los precios de la lista, el número de orden, los campos mecanografiados, la barra del rango en la escala de precios. También es el hover del botón de tinta y el anillo de foco dentro del papel.

### Secondary
- **Rojo de sello** (stamp): exclusivamente para "Diagnóstico gratis", "Gratis" y "Garantía", siempre como sello con doble aro. No se usa para errores, enlaces ni énfasis.

### Tertiary
- **Menta de soldadura** (mint): el acento sobre el tapete: "Fix" en la marca, subrayado del enlace activo, marcas de verificación, enlaces de texto, precios mostrados directamente sobre el tapete, anillo de foco y selección de texto fuera del papel, hover de los botones de papel.

### Neutral
- **Tapete ESD** (mat): fondo de todo el sitio y de la barra de navegación.
- **Tapete profundo** (mat-deep): pie de página y bandas alternas (al 60% sobre el tapete) para separar secciones.
- **Niebla** (fog): texto corrido y enlaces secundarios sobre el tapete; el blanco puro queda para titulares y estados activos.
- **Papel de talonario** (paper): superficie de la orden, la lista de precios, el seguimiento, el botón de WhatsApp de la barra.
- **Regla de talonario** (paper-rule): líneas finas de 1px entre renglones dentro del papel.
- **Grafito** (paper-dim): etiquetas de campo y notas al pie dentro del papel.
- **Tinta** (ink): texto sobre papel, reglas gruesas de 2px que abren y cierran cada hoja, botón primario, opción seleccionada.

### Named Rules
**La Regla de las Dos Tintas.** El azul de calco solo marca valores (precios, números de orden, lo que el cliente escribe); el rojo solo marca lo que el taller garantiza. Si un elemento no es un valor ni una garantía, no lleva ninguna de las dos.

**La Regla del Precio Legible.** Sobre papel, el precio va en tinta de calco; sobre el tapete, va en menta. El azul de calco nunca se pone directamente sobre el tapete.

## Typography

**Display Font:** Archivo Variable (eje de anchura), con Archivo y system-ui de respaldo
**Body Font:** Archivo Variable
**Label/Mono Font:** Courier Prime (400 y 700), con ui-monospace de respaldo

**Character:** Una grotesca condensada de rótulo de taller, gritada en mayúsculas, contra una máquina de escribir de formulario que solo aparece donde alguien "escribió" algo en la orden.

### Hierarchy
- **Display** (900, anchura 72%, clamp(46px, 8.4vw, 96px), interlineado 0.92, mayúsculas, balanceado): el titular de cada página, en blanco sobre el tapete. Los cierres de página usan clamp(44px, 7vw, 88px).
- **Headline** (900, anchura 72%, clamp(40px, 6vw, 72px), 0.92, mayúsculas): títulos de sección sobre el tapete.
- **Title** (900, anchura 75%, 24 a 30px, interlineado 1, mayúsculas): nombres de equipo, estados del seguimiento, encabezado "Orden de servicio" (22 a 26px), Misión y Visión.
- **Price** (900, anchura 75%, cifras tabulares): el rango estimado de la orden a clamp(40px, 9vw, 54px); en la lista, 26px en escritorio y 20px en móvil; sobre el tapete, 32px.
- **Body** (400, 18 a 19px, interlineado 1.625): bajadas y párrafos, limitados a 44 a 58ch. Notas al pie y textos de papel a 14 a 16px.
- **Label** (600, 13px, tracking 0.12em, mayúsculas, grafito): etiquetas de campo dentro de la orden y encabezados de columna en la lista de precios.
- **Typed** (Courier Prime 400, 19px en campos; 16px en negrita para el número de orden; 12 a 13px para escalas y pies de foto): solo lo mecanografiado.

### Named Rules
**La Regla de la Máquina de Escribir.** Courier Prime solo aparece en lo que se llenaría a máquina en un formulario: campos, número de orden, pies de foto, cifras de la escala. Nunca en titulares, botones ni texto corrido.

**La Regla de la Etiqueta de Campo.** Las etiquetas en mayúsculas espaciadas rotulan un campo o una columna dentro del papel. No se usan como antetítulo encima de un titular.

## Layout

Contenedor de 1240px centrado con margen lateral de 16px en móvil y 32px desde 640px. Las secciones se apilan a ancho completo separadas por una regla de 1px blanca al 20%, alternando tapete y tapete profundo al 60%; el relleno vertical es 80px en móvil y 112px desde 1024px.

El primer viewport de inicio y de cada servicio es una rejilla de dos columnas desde 1024px: texto a la izquierda (flexible) y la orden a la derecha (hasta 560px), separadas 48px. En móvil la orden cae inmediatamente debajo del titular, sin giro. En las páginas de servicio la orden se queda pegada (sticky) a 104px del borde superior.

Dentro del papel el ritmo es de talonario: renglones separados por reglas, relleno lateral de 20px en móvil y 32px en escritorio, 16 a 24px vertical. La lista de precios pasa a cuatro columnas desde 768px (equipo, incluye, escala, precio) y se apila en móvil.

La navegación es una barra fija de 72px; el desplazamiento a anclas reserva 96px.

## Elevation & Depth

El sistema es plano. La profundidad se cuenta con superposición física, no con sombras: los papeles se apoyan sobre el tapete, una foto impresa se monta sobre la orden, el sello pisa el borde de la hoja. El orden de apilamiento se expresa con giros leves (entre 1° y 5° en fotos, 1.2° en la orden en escritorio, 14° en el sello) y con z-index.

### Named Rules
**La Regla del Papel Sobre la Mesa.** Ninguna superficie lleva box-shadow. Si algo debe verse "encima", se superpone y se gira; no se eleva.

**La Regla del Degradado Técnico.** Los únicos gradientes CSS permitidos dibujan materiales del mundo: las líneas de la cuadrícula del tapete y las perforaciones del talonario. Ninguno puede leerse como transición de color.

## Shapes

Esquina viva en todo: botones, campos, hojas, opciones de equipo, casillas, fotos (0px). Las únicas formas redondas son el sello circular de doble aro (borde de 3px más contorno interno de 1.5px a 8px) y el disco blanco del logo.

Los bordes tienen dos pesos: 1.5px para controles (botones de línea, opciones de equipo, casillas, subrayado punteado de campos) y 2px de tinta para abrir y cerrar cada hoja; 1px de regla para renglones internos. Las hojas de papel tienen el borde superior perforado (semicírculos de 6px cada 20px). Las fotos se presentan como impresiones: marco blanco de 10px a los lados y arriba, con pie mecanografiado abajo.

## Components

### Buttons
Rectangulares, pesados y directos; cambian de color, no de forma.
- **Shape:** esquina viva (0px), alto mínimo 52px, relleno 16px por 24px, texto Archivo 700 a 17px, icono de flecha SVG de 18px con separación de 12px.
- **Tinta (primario):** fondo tinta, texto papel. Es la acción "Enviar orden por WhatsApp".
- **Hover / Focus:** el primario pasa a tinta de calco en 150ms. Foco: contorno de 3px a 3px de distancia, menta sobre el tapete y calco dentro del papel.
- **Línea:** borde de tinta de 1.5px sobre papel ("Llamar"); hover se rellena de tinta.
- **Papel:** fondo papel, texto tinta sobre el tapete; hover menta. Es el WhatsApp de la barra y el canal principal de contacto.
- **Fantasma:** borde niebla al 70% de 1.5px, texto blanco sobre el tapete; hover borde blanco y fondo blanco al 10%.

### Cards / Containers
- **Corner Style:** esquina viva (0px).
- **Background:** papel de talonario sobre el tapete.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** regla de tinta de 2px bajo el encabezado y sobre el pie; reglas de 1px entre renglones; borde superior perforado.
- **Internal Padding:** 20px lateral en móvil, 32px en escritorio.

### Inputs / Fields
- **Style:** sin caja: solo un subrayado punteado de 1.5px gris (#8D928D), fondo transparente, texto mecanografiado en tinta de calco a 19px.
- **Focus:** el subrayado pasa a tinta de calco y aparece el anillo de foco de calco.
- **Opción de equipo:** casilla rectangular con borde de tinta de 1.5px y alto mínimo de 48px; seleccionada se invierte a tinta con texto papel y casilla cuadrada rellena (nunca círculo de radio).

### Navigation
Barra fija de 72px sobre el tapete con regla inferior blanca al 20%. Marca en Archivo 900 condensada a 28px con "Fix" en menta. Enlaces en niebla a 16px; hover blanco subrayado; activo blanco con subrayado menta de 2px. A la derecha, el botón de papel de WhatsApp con el número en cifras tabulares. Bajo 1024px los enlaces pasan a un menú desplegable de renglones de 20px separados por reglas blancas al 10%.

### Orden de servicio (componente firma)
La hoja de talonario funcional: encabezado con título, número de orden mecanografiado en calco y sello "Diagnóstico gratis" girado sobre la esquina; campos numerados (1 · Equipo, 2 · ¿Qué le pasa?, 3 · Precio estimado). Al cambiar de equipo, el precio se re-mecanografía carácter a carácter (22ms por carácter) con un caret de calco de 3px; con movimiento reducido, cambia de golpe. El envío compone el mensaje de WhatsApp con equipo, problema, barrio y rango.

### Lista de precios
Hoja de papel con cada equipo como renglón enlazado; todos los rangos se dibujan como una barra de calco sobre la misma escala de $0 a $300.000 (pista de 12px, marcas cada 100 mil). Hover: el renglón se oscurece levemente, la barra pasa a tinta y la flecha avanza 4px.

### Sello
Círculo de doble aro en rojo de sello con texto Archivo 900 condensado en mayúsculas, girado y montado sobre el borde de una hoja. En línea dentro del seguimiento se usa la variante rectangular (borde de 2px y contorno de 1px a 2px de distancia, girada −4°).

### Foto impresa
Fotografía con marco blanco de 10px, pie en Courier Prime de 13px, girada entre −5° y 3°, superpuesta a una hoja o sola junto al texto.

## Do's and Don'ts

### Do:
- **Do** poner cada página sobre el tapete con su cuadrícula de 24px y 120px; el tapete es el fondo, no una sección.
- **Do** presentar cualquier contenido de trabajo (formularios, precios, procesos) como una hoja de papel con borde perforado y reglas de tinta de 2px.
- **Do** usar tinta de calco solo para valores sobre papel, y menta para valores sobre el tapete.
- **Do** reservar el sello rojo para "Diagnóstico gratis", "Gratis" y "Garantía".
- **Do** mostrar fotos como impresiones con marco blanco de 10px y pie mecanografiado.
- **Do** mantener alto mínimo de 48px en controles y 52px en botones.
- **Do** respetar prefers-reduced-motion: el re-mecanografiado y las transiciones se desactivan.

### Don't:
- **Don't** usar box-shadow en ninguna superficie; la profundidad es superposición y giro.
- **Don't** usar degradados de color; los gradientes CSS solo dibujan la cuadrícula y las perforaciones.
- **Don't** redondear esquinas; la única forma redonda es el sello (y el disco del logo).
- **Don't** usar Courier Prime fuera de lo mecanografiado.
- **Don't** poner etiquetas en mayúsculas espaciadas como antetítulo encima de un titular.
- **Don't** usar rojo de sello para errores, alertas o énfasis.
- **Don't** poner tinta de calco directamente sobre el tapete.
