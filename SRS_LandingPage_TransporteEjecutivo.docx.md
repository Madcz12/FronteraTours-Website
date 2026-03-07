

**ESPECIFICACIÓN DE REQUISITOS DE SOFTWARE**

SRS \- Landing Page

***"Somos más que un transporte ejecutivo"***

Servicio de Transporte y Encomiendas — Puerto Ordaz ↔ Santa Elena de Uairén / Pacaraima

| Versión | 1.0 |
| :---- | :---- |
| **Fecha** | 2026 |
| **Estado** | Borrador inicial |
| **Tipo de Proyecto** | Landing Page — Emprendimiento de Transporte Ejecutivo |
| **Ruta Principal** | Puerto Ordaz, Venezuela → Santa Elena de Uairén / Pacaraima, Brasil |
| **Unidad** | Hyundai Tucson 2008 (unidad personal) |
| **Lema** | "Somos más que un transporte ejecutivo" |

# **Tabla de Contenido**

1\. Introducción y Propósito ........................................ 3

2\. Alcance del Proyecto ............................................. 4

3\. Descripción General .............................................. 4

4\. Servicios Ofrecidos .............................................. 5

5\. Requisitos Funcionales ........................................... 7

6\. Requisitos No Funcionales ........................................ 12

7\. Arquitectura y Tecnologías Sugeridas ............................ 13

8\. Secciones y Estructura de la Landing Page ....................... 14

9\. Diseño Visual e Identidad ........................................ 17

10\. Criterios de Aceptación ......................................... 18

# **1\. Introducción y Propósito**

## **1.1 Propósito del documento**

El presente documento describe los requisitos funcionales y no funcionales para el desarrollo de una landing page orientada a la promoción y gestión de reservas de un servicio de transporte ejecutivo y encomiendas. La ruta principal cubierta es Puerto Ordaz, Venezuela hacia la frontera con Brasil (Santa Elena de Uairén / Pacaraima, Brasil), operado con una unidad Hyundai Tucson.

Este documento servirá como referencia técnica y de diseño para el equipo de desarrollo, y como contrato de alcance entre el cliente y los desarrolladores.

## **1.2 Audiencia objetivo**

* Equipo de desarrollo front-end y back-end

* Diseñador UI/UX

* Emprendedor / dueño del negocio

* Pasajeros venezolanos y brasileños que viajan en la ruta

* Clientes que desean enviar encomiendas entre Venezuela y Brasil

## **1.3 Convenciones y definiciones**

| Término | Definición |
| ----- | ----- |
| Landing Page | Página web de una sola página o de secciones verticales orientada a conversión. |
| CTA | Call to Action — Llamada a la acción (botón o enlace que invita al usuario a reservar o contactar). |
| Pago Móvil | Sistema de transferencia bancaria instantánea venezolano vinculado al número de teléfono. |
| La Línea | Denominación popular de la frontera entre Venezuela y Brasil en Santa Elena de Uairén. |
| WhatsApp CTA | Botón de contacto directo a WhatsApp, canal principal de comunicación del servicio. |
| RF | Requisito Funcional. |
| RNF | Requisito No Funcional. |

# **2\. Alcance del Proyecto**

El proyecto consiste en el diseño y desarrollo de una landing page de una sola página (o multi-sección), bilingüe (Español / Portugués), mobile-first, que permita a los usuarios conocer los servicios disponibles, consultar tarifas, realizar reservas y contactar al operador a través de WhatsApp u otros medios digitales.

## **2.1 Dentro del alcance**

* Diseño y maquetación completa de la landing page

* Sección Hero con lema, CTA e imagen de fondo de La Línea fronteriza / banderas

* Presentación detallada de los dos servicios: Transporte de pasajeros y Encomiendas

* Tres paquetes de transporte con precios diferenciados (1 persona, 2 personas, grupo)

* Formulario de reserva con selector de servicio, fechas y número de pasajeros

* Integración de botón flotante de WhatsApp

* Sección de preguntas frecuentes (FAQ)

* Sección de galería de la unidad (Hyundai Tucson)

* Versión bilingüe Español / Portugués

* Diseño responsive (mobile-first)

* Mapa de Google Maps embebido con la ruta

## **2.2 Fuera del alcance**

* Pasarela de pago en línea integrada (los pagos se coordinan por WhatsApp)

* Panel de administración o dashboard

* Aplicación móvil nativa

* Sistema de rastreo en tiempo real del vehículo

# **3\. Descripción General del Sistema**

## **3.1 Perspectiva del producto**

La landing page operará como el canal digital principal del emprendimiento de transporte ejecutivo, permitiendo a los clientes informarse, reservar y contactar al operador de forma sencilla y rápida, especialmente desde dispositivos móviles.

## **3.2 Identidad de marca**

| Lema oficial | "Somos más que un transporte ejecutivo" |
| :---- | :---- |
| **Unidad** | Hyundai Tucson (camioneta personal) |
| **Ruta** | Puerto Ordaz → Santa Elena de Uairén / Pacaraima (Brasil) |
| **Idiomas** | Español (principal) y Portugués (secundario) |
| **Canal principal** | WhatsApp para reservas y soporte |
| **Moneda base** | USD (dólares americanos) — también acepta VES y BRL |

## **3.3 Clases de usuario**

* Pasajero individual: persona que necesita trasladarse sola o con acompañante.

* Grupo de viajeros: familia, amigos o colegas que viajan juntos (3+ personas).

* Cliente de encomiendas: persona que necesita enviar paquetes o documentos entre Venezuela y Brasil.

* Operador (administrador): dueño del negocio que gestiona reservas y consultas recibidas.

# **4\. Servicios Ofrecidos**

## **4.1 Servicio 1 — Transporte de Pasajeros**

Traslado privado y exclusivo en Hyundai Tucson de Puerto Ordaz hacia Santa Elena de Uairén y/o Pacaraima (Brasil), o viceversa. Todos los paquetes incluyen WiFi a bordo, aire acondicionado, espacio para equipaje y atención personalizada.

**4.1.1 Paquetes de Transporte**

| Característica | Paquete Solo | Paquete Dúo | Paquete Grupo |
| ----- | :---: | :---: | :---: |
| Nº de pasajeros | 1 persona | 2 personas | 3–5 personas |
| WiFi incluido | ✓ | ✓ | ✓ |
| A/C | ✓ | ✓ | ✓ |
| Equipaje | 1 maleta \+ 1 bolso | 2 maletas \+ 2 bolsos | Según disponibilidad |
| Precio base (USD) | \[Por definir\] | \[Por definir\] | \[Por definir\] |
| Disponibilidad | Bajo reserva previa | Bajo reserva previa | Bajo reserva previa |

Nota: Los precios finales serán definidos por el operador antes del lanzamiento. La landing page debe permitir actualizar estos valores fácilmente desde el código fuente o un archivo de configuración.

**4.1.2 Amenidades incluidas en todos los paquetes**

* WiFi a bordo

* Aire acondicionado

* Paradas acordadas en ruta (El Dorado, Km 88, Luepa)

* Atención personalizada durante el trayecto

* Información de trámites migratorios al cruzar la frontera

## **4.2 Servicio 2 — Encomiendas**

Servicio de mensajería y envío de paquetes entre Puerto Ordaz y Santa Elena de Uairén / Pacaraima. Ideal para envíos personales, documentos, mercancía de pequeño y mediano tamaño, y paquetes de comercio electrónico transfronterizo.

**4.2.1 Características del servicio de encomiendas**

| Aspecto | Detalle |
| ----- | ----- |
| Tipos de envío | Documentos, paquetes pequeños y medianos, artículos personales |
| Peso máximo | Sujeto a espacio disponible en el vehículo — acordar con el operador |
| Dirección de envío | Bidireccional: Venezuela → Brasil y Brasil → Venezuela |
| Tarifas | Según peso y dimensiones — cotización por WhatsApp |
| Tiempo de entrega | Mismo día del viaje programado |
| Restricciones | No se transportan: efectivo no declarado, sustancias ilegales, artículos de contrabando |
| Confirmación | Aviso por WhatsApp al momento de entrega |

# **5\. Requisitos Funcionales**

A continuación se detallan los requisitos funcionales agrupados por módulo o sección de la landing page.

## **RF-01 — Sección Hero (Encabezado Principal)**

| ID | Descripción del Requisito |
| ----- | ----- |
| RF-01.1 | El hero debe mostrar el lema del emprendimiento: "Somos más que un transporte ejecutivo" en tipografía grande y de alto impacto visual. |
| RF-01.2 | La imagen o video de fondo debe alternar entre: fotografías de La Línea (frontera Venezuela–Brasil), banderas de ambos países y fotografías de la Gran Sabana. |
| RF-01.3 | El hero debe incluir al menos dos botones CTA visibles: "Reservar viaje" y "Enviar encomienda", ambos enlazando a las secciones correspondientes o abriendo WhatsApp. |
| RF-01.4 | Debe mostrarse un badge o insignia de confianza con datos relevantes (ej: años en operación, viajes realizados). |

## **RF-02 — Barra de Reserva Rápida**

| ID | Descripción del Requisito |
| ----- | ----- |
| RF-02.1 | La barra de reserva debe estar visible inmediatamente después del hero o fijada (sticky) en la parte superior de la página. |
| RF-02.2 | Debe incluir: selector de tipo de servicio (Transporte / Encomienda), origen y destino, fecha de viaje y número de pasajeros / peso del paquete. |
| RF-02.3 | El botón de acción de la barra debe redirigir al usuario a WhatsApp con un mensaje predefinido que incluya los datos seleccionados. |

## **RF-03 — Sección de Servicios**

| ID | Descripción del Requisito |
| ----- | ----- |
| RF-03.1 | Presentar dos tarjetas visuales diferenciadas: una para Transporte de Pasajeros y otra para Encomiendas. |
| RF-03.2 | Cada tarjeta debe incluir: nombre del servicio, ícono representativo, breve descripción, precio referencial y botón de CTA. |
| RF-03.3 | La sección de transporte debe expandirse o enlazar a los tres paquetes disponibles (Solo, Dúo, Grupo) con sus precios y características. |

## **RF-04 — Sección de Paquetes de Transporte**

| ID | Descripción del Requisito |
| ----- | ----- |
| RF-04.1 | Mostrar tres tarjetas de paquetes: Paquete Solo (1 persona), Paquete Dúo (2 personas) y Paquete Grupo (3–5 personas). |
| RF-04.2 | Cada tarjeta debe indicar claramente: número de pasajeros, precio en USD, amenidades incluidas (WiFi, A/C, equipaje permitido) y un botón de reserva. |
| RF-04.3 | Uno de los paquetes debe poder marcarse visualmente como "Más popular" o "Recomendado" mediante una etiqueta destacada. |
| RF-04.4 | El botón de cada paquete debe abrir WhatsApp con un mensaje prellenado indicando el paquete seleccionado. |

## **RF-05 — Sección de Encomiendas**

| ID | Descripción del Requisito |
| ----- | ----- |
| RF-05.1 | Describir el proceso de envío de encomiendas en pasos visuales: 1\) Contactar al operador, 2\) Empacar y etiquetar, 3\) Entregar en punto acordado, 4\) Recibir confirmación de entrega. |
| RF-05.2 | Indicar claramente los artículos permitidos y no permitidos para envío. |
| RF-05.3 | Incluir un CTA que dirija al usuario a contactar por WhatsApp para solicitar cotización. |

## **RF-06 — Sección de Ruta y Paradas**

| ID | Descripción del Requisito |
| ----- | ----- |
| RF-06.1 | Mostrar un mapa embebido de Google Maps con la ruta Puerto Ordaz → Santa Elena de Uairén → Pacaraima. |
| RF-06.2 | Indicar las paradas intermedias principales: El Dorado, Km 88, Luepa y Gran Sabana. |
| RF-06.3 | Mostrar el tiempo estimado total del recorrido (\~8–10 horas). |

## **RF-07 — Sección de Galería / Flota**

| ID | Descripción del Requisito |
| ----- | ----- |
| RF-07.1 | Mostrar galería fotográfica del Hyundai Tucson: exterior, interior, maletero y detalles relevantes (WiFi, A/C, asientos). |
| RF-07.2 | La galería debe ser interactiva (carrusel o lightbox) y funcional en dispositivos móviles. |
| RF-07.3 | Incluir ficha técnica resumida de la unidad (año, modelo, capacidad, equipamiento). |

## **RF-08 — Sección de Testimonios**

| ID | Descripción del Requisito |
| ----- | ----- |
| RF-08.1 | Mostrar al menos 3 testimonios en carrusel con nombre del cliente, calificación en estrellas (1–5) y texto de la reseña. |
| RF-08.2 | Incluir una calificación promedio general visible (ej: 4.9/5 basado en X viajes). |

## **RF-09 — Preguntas Frecuentes (FAQ)**

| ID | Descripción del Requisito |
| ----- | ----- |
| RF-09.1 | Presentar mínimo 6 preguntas frecuentes en formato acordeón (expandible/colapsable). |
| RF-09.2 | Las preguntas mínimas requeridas son: documentos para cruzar la frontera, política de equipaje extra, paradas en ruta, política de cancelación, métodos de pago y tiempo de respuesta. |

## **RF-10 — Sección de Contacto y WhatsApp**

| ID | Descripción del Requisito |
| ----- | ----- |
| RF-10.1 | Incluir botón flotante de WhatsApp visible en todas las secciones de la página, con ícono de WhatsApp y texto de invitación. |
| RF-10.2 | Incluir sección de contacto con número de teléfono, correo electrónico y enlace directo a WhatsApp. |
| RF-10.3 | El enlace de WhatsApp debe incluir un mensaje predefinido en el idioma del usuario (ES/PT). |
| RF-10.4 | Mostrar horario de atención (ej: Lunes a Domingo, 6:00 AM – 10:00 PM). |

## **RF-11 — Multilenguaje (ES / PT)**

| ID | Descripción del Requisito |
| ----- | ----- |
| RF-11.1 | La landing page debe ofrecer un selector de idioma visible en la barra de navegación: Español (ES) y Portugués (PT). |
| RF-11.2 | Todo el contenido textual (menús, secciones, botones, FAQs, testimonios) debe estar disponible en ambos idiomas. |
| RF-11.3 | El idioma predeterminado será detectado automáticamente según el navegador del usuario. |

# **6\. Requisitos No Funcionales**

## **RNF-01 — Rendimiento**

* El tiempo de carga inicial de la página no debe superar los 3 segundos en una conexión móvil 4G.

* Las imágenes deben estar optimizadas en formato WebP o AVIF, con lazy loading activado.

* La puntuación de Google PageSpeed Insights debe ser igual o superior a 85/100 en móvil.

## **RNF-02 — Usabilidad**

* El diseño debe ser mobile-first: la experiencia en dispositivos móviles tiene prioridad sobre escritorio.

* Los botones de CTA deben tener un tamaño mínimo de 44x44 px para facilitar la interacción táctil.

* La página debe ser usable sin JavaScript para usuarios con navegadores básicos (progressive enhancement).

## **RNF-03 — Compatibilidad**

* Compatible con los siguientes navegadores: Chrome (móvil y escritorio), Firefox, Safari (iOS), Samsung Internet.

* Responsive en resoluciones: 320px (móvil pequeño), 375px, 768px (tablet), 1024px, 1280px y 1920px.

## **RNF-04 — Seguridad**

* La página debe servirse bajo HTTPS con certificado SSL válido.

* Los formularios deben incluir validación del lado del cliente para evitar envíos vacíos o maliciosos.

* No se almacenarán datos personales de usuarios sin consentimiento explícito (GDPR/legislación local).

## **RNF-05 — Accesibilidad**

* Contraste de color mínimo de 4.5:1 entre texto y fondo (WCAG AA).

* Todas las imágenes deben tener atributo alt descriptivo.

* El sitio debe ser navegable con teclado.

## **RNF-06 — Mantenibilidad**

* Los textos, precios y contenido deben estar centralizados en un archivo de configuración o CMS básico para facilitar actualizaciones sin tocar el código base.

* El código debe estar comentado y organizado en componentes reutilizables.

# **7\. Arquitectura y Tecnologías Sugeridas**

## **7.1 Stack tecnológico recomendado**

| Capa | Tecnología sugerida | Alternativa |
| ----- | ----- | ----- |
| Frontend | HTML5 \+ CSS3 \+ JavaScript (Vanilla) | React.js / Next.js |
| Estilos | Tailwind CSS | Bootstrap 5 |
| Animaciones | AOS (Animate On Scroll) | GSAP |
| Iconos | Font Awesome / Heroicons | Lucide Icons |
| Tipografía | Google Fonts (Montserrat \+ Open Sans) | Inter \+ Poppins |
| Mapa | Google Maps Embed API | Leaflet.js (OpenStreetMap) |
| Galería | Swiper.js (carrusel) | Glightbox |
| Hosting | Vercel / Netlify (gratuito) | GitHub Pages |
| Dominio | .com.ve / .com / .com.br | Cualquier registrador |

## **7.2 Integraciones**

* WhatsApp Business API (wa.me): para botón flotante y CTAs de reserva.

* Google Maps Embed API: para mostrar la ruta en la sección de destinos.

* Google Analytics 4: para seguimiento de visitas, clics en CTAs y conversiones.

* Meta Pixel (opcional): para remarketing en Instagram/Facebook si se realizan campañas pagadas.

# **8\. Secciones y Estructura de la Landing Page**

La landing page está organizada en 10 secciones principales, presentadas en orden vertical de arriba hacia abajo en una sola página con navegación por anclas (\#).

| \# | Sección | Contenido principal | CTA principal |
| ----- | ----- | ----- | ----- |
| 1 | Hero / Inicio | Lema, imagen de fondo (La Línea / banderas), badges de confianza | Reservar / Enviar |
| 2 | Barra de reserva | Selector rápido: servicio, fecha, pasajeros/peso | Consultar por WhatsApp |
| 3 | ¿Por qué elegirnos? | 6 íconos \+ beneficios: unidad moderna, WiFi, seguro, puntualidad, atención | — |
| 4 | Nuestros Servicios | Tarjetas: Transporte de pasajeros vs Encomiendas | Ver paquetes / Cotizar |
| 5 | Paquetes de Viaje | 3 tarjetas: Paquete Solo, Dúo y Grupo con precios y amenidades | Reservar este paquete |
| 6 | La Ruta | Mapa embebido \+ paradas \+ tiempo estimado | — |
| 7 | Nuestra Unidad | Galería Hyundai Tucson \+ ficha técnica | — |
| 8 | Testimonios | Carrusel de reseñas \+ calificación general | — |
| 9 | FAQ | Acordeón con 6+ preguntas frecuentes | ¿Más dudas? WhatsApp |
| 10 | Contacto | Teléfono, correo, horario de atención, redes sociales | Escribir por WhatsApp |

## **8.1 Elementos persistentes (en todas las secciones)**

* Barra de navegación fija (navbar sticky) con: logo / nombre del emprendimiento, selector de idioma ES/PT, enlace directo a WhatsApp y menú hamburguesa en móvil.

* Botón flotante de WhatsApp en la esquina inferior derecha con animación de latido (pulse).

* Footer con: nombre del emprendimiento, número de teléfono, redes sociales, mapa de Google embebido pequeño, aviso legal básico y créditos.

# **9\. Diseño Visual e Identidad**

## **9.1 Paleta de colores**

| Nombre | Código HEX | Uso |
| ----- | ----- | ----- |
| Azul marino primario | \#1A3C5E | Fondo navbar, encabezados, botones principales |
| Dorado acento | \#C8A84B | CTAs secundarios, separadores, destacados |
| Verde Venezuela | \#009A44 | Íconos de amenidades, elementos de éxito |
| Verde Brasil | \#009C3B | Banderas, indicadores de destino Brasil |
| Gris claro | \#EAF0F6 | Fondos de secciones alternas, tablas |
| Blanco | \#FFFFFF | Texto sobre fondos oscuros, tarjetas |
| Texto principal | \#1F2937 | Cuerpo de texto general |

## **9.2 Tipografía**

* Títulos y lema: Montserrat Bold / ExtraBold — transmite modernidad y seguridad.

* Subtítulos: Montserrat SemiBold.

* Cuerpo de texto: Open Sans Regular — alta legibilidad en pantallas pequeñas.

* Botones: Montserrat Bold, mayúsculas, tamaño mínimo 14px.

## **9.3 Imágenes de fondo y recursos visuales**

* Sección Hero: fotografía panorámica de La Línea (puente fronterizo Venezuela–Brasil en Santa Elena de Uairén) con overlay semitransparente en azul marino.

* Sección Servicios: banderas de Venezuela y Brasil como elemento decorativo de fondo (baja opacidad).

* Sección Ruta: paisaje de la Gran Sabana o el tepuy Roraima.

* Sección Galería: fotografías reales del Hyundai Tucson del operador.

Nota: Todas las imágenes de uso libre deben provenir de fuentes libres de derechos (Unsplash, Pexels, Pixabay) o ser fotografías propias del operador.

## **9.4 Iconografía y estilo**

* Estilo de íconos: línea (outline) o relleno sólido minimalista.

* Animaciones: sutiles, de entrada en scroll (fade-in, slide-up). No usar animaciones distractoras.

* Tarjetas de paquetes: sombra suave (box-shadow), borde superior de color acento, efecto hover elevado.

# **10\. Criterios de Aceptación**

## **10.1 Criterios técnicos**

1. La landing page carga correctamente en Chrome, Firefox y Safari en dispositivos móviles y de escritorio.

2. El botón flotante de WhatsApp abre el chat correctamente con mensaje predefinido.

3. El selector de idioma cambia todo el contenido de la página entre Español y Portugués.

4. Las tarjetas de paquetes muestran correctamente las tres opciones con sus características.

5. El mapa de Google Maps se embebe y muestra la ruta completa sin errores.

6. La galería del Hyundai Tucson funciona como carrusel táctil en móviles.

7. El formulario/barra de reserva rápida genera el mensaje de WhatsApp prellenado correctamente.

8. La puntuación de Google PageSpeed es ≥ 85 en móvil.

## **10.2 Criterios de diseño**

9. El lema "Somos más que un transporte ejecutivo" es el elemento más prominente del hero.

10. Las imágenes de fondo de La Línea y/o banderas aparecen en el hero y en la sección de servicios.

11. El diseño es consistente en mobile, tablet y desktop.

12. Los colores de la paleta definida son los únicos utilizados en el sitio.

## **10.3 Criterios de negocio**

13. El cliente (operador) puede actualizar precios y textos sin conocimientos técnicos avanzados.

14. Los tres paquetes de transporte y el servicio de encomiendas están claramente diferenciados.

15. Los métodos de pago aceptados (Zelle, Pago Móvil, efectivo, transferencia BRL) están visibles.

16. La información aduanera y de documentación requerida está disponible en el FAQ.

*Fin del documento — SRS v1.0*

***"Somos más que un transporte ejecutivo"***