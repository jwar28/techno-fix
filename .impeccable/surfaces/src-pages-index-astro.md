---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/services.astro","src/pages/about.astro","src/pages/contact.astro"]
---

# Surface: TecnoFix sitio público (inicio + servicios + nosotros + contacto)

Mode: Persuade. Audience: hogares en Barranquilla con un equipo dañado, mayormente en el celular. Action: ver precios primero, luego enviar la orden por WhatsApp (+57 318 421 4427). Constraints: conservar fotos actuales; evitar corporativo, gamer/neón, poco confiable, pesado.

## Direction contract

THESIS: La página ES la orden de servicio del taller: eliges tu equipo, ves el rango de precio y la envías por WhatsApp ya llena. Rechaza el hero genérico de "titular + foto del técnico + tres tarjetas".

OWN-WORLD: Tapete antiestático (ESD) verde-azul #24575A con cuadrícula fina de 24px y mayor de 120px como fondo de todo el sitio; papel de talonario #F7F7F2 para superficies de trabajo; tinta de calco azul #1F3FD1 solo para valores llenados y precios; sello rojo #D7261E solo para "Diagnóstico gratis"/garantía. Archivo condensada 900 en mayúsculas para titulares, Archivo para texto, Courier Prime solo para valores mecanografiados y número de orden. Fotos como impresiones con borde blanco "adjuntas" a la orden. Sin sombras decorativas, sin degradados.

STORY: Entiende en segundos qué reparan y cuánto cuesta, cree que es serio (precio antes, diagnóstico gratis, garantía, domicilio), y envía la orden por WhatsApp.

FIRST VIEWPORT: Nav en el tapete (marca, enlaces, WhatsApp). Izquierda: titular gigante "Llena la orden. Vamos a tu casa." + bajada + tres garantías en línea. Derecha (≈45%): la orden de servicio funcional ligeramente girada, selector de equipo, campo del problema, precio estimado que cambia, sello, botón primario "Enviar orden por WhatsApp". En móvil la orden queda inmediatamente bajo el titular, sin giro.

FORM: Orden de Servicio, posición 1 de mi lista ordenada (IMPECCABLE'S PICK). seed:235d3fd3ab6da082
Signature interaction: al elegir equipo, el precio se "re-mecanografía" (aparece carácter a carácter con caret) y el mensaje de WhatsApp se compone con equipo + problema + rango.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
