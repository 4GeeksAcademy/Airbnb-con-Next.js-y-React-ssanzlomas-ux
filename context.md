# Contexto del Proyecto — Airbnb Clone con Next.js y React

> **Brief del producto:** Este proyecto es un encargo de un estudio de diseño de producto que ha ganado un contrato para reconstruir el frontend de una plataforma de alquiler vacacional. Antes de crear su propio sistema de diseño, quieren validar la arquitectura de componentes clonando una interfaz de producción bien conocida: Airbnb. De esta forma, el equipo aprende qué componentes son necesarios, qué datos necesita cada uno y cómo se conectan entre las distintas vistas.
>
> **Tech stack:** Next.js 16 + TypeScript + Tailwind CSS + App Router.
>
> **Enfoque:** Mobile-first (viewport 375px primero, adaptación a escritorio desde 768px). Componentes pequeños y enfocados (una responsabilidad por componente). Navegación entre páginas sin recarga del navegador (App Router).

---

## Descripción del Usuario

**Viajero frecuente / huésped potencial:** Un usuario que busca alojamiento temporal para sus viajes, ya sea por placer, trabajo o ambas cosas. Su objetivo principal es encontrar, comparar y reservar alojamientos únicos en diferentes destinos de forma rápida, segura y con una experiencia visual atractiva. Valora la confianza que le transmiten las fotos, las reseñas de otros huéspedes y la claridad en los precios antes de tomar una decisión de compra.

---

## Páginas del Proyecto

### 1. Página de Inicio — Home (`/`)

**Descripción:** Es la puerta de entrada a la plataforma. Muestra un banner principal con un buscador, una fila horizontal de categorías de alojamientos (casas rurales, playa, montaña, etc.) y una cuadrícula de propiedades destacadas o sugeridas para el usuario.

**Componentes principales:**
- **Navbar / Header:** Barra de navegación superior con logo, enlaces (registro, inicio de sesión), menú de usuario y acceso al buscador.
- **Hero Section / Banner:** Imagen grande de fondo con un formulario de búsqueda (destino, fechas, huéspedes).
- **Category Pills / Filtros rápidos:** Lista horizontal con scroll de categorías temáticas (icono + texto) para filtrar por tipo de experiencia.
- **Listing Card / Tarjeta de propiedad:** Componente reutilizable que muestra imagen, título, precio, valoración y tipo de alojamiento.
- **Listing Grid:** Cuadrícula responsiva que renderiza las tarjetas de propiedad.
- **Footer:** Pie de página con enlaces legales, redes sociales y soporte.

### 2. Página de Catálogo — Resultados de Búsqueda (`/search`)

**Descripción:** Muestra los resultados de una búsqueda de alojamientos. Incluye filtros laterales (o superiores en móvil) para refinar por precio, tipo de propiedad, comodidades, etc., una lista o cuadrícula de propiedades disponibles, y un mapa interactivo con la ubicación de los resultados.

**Componentes principales:**
- **Navbar / Header** (versión compacta con el destino y fechas visibles)
- **Search Filters / Filtros de búsqueda:** Panel de filtros desplegables (precio mínimo/máximo, tipo de alojamiento, habitaciones, comodidades).
- **Listing Card / Tarjeta de propiedad:** Misma tarjeta reutilizable de la Home, pero con información más detallada (fechas disponibles, precio total estimado).
- **Results Grid / List:** Cuadrícula o lista de propiedades que coinciden con la búsqueda.
- **Map Panel:** Mapa interactivo lateral (escritorio) o toggle (móvil) con pines de las propiedades.
- **Pagination / Load More:** Controles para cargar más resultados.
- **Footer**

### 3. Página de Detalle de la Habitación (`/listing/[id]`)

**Descripción:** Muestra la información completa de una propiedad seleccionada desde los resultados de búsqueda o desde la home. Incluye galería de fotos, descripción del anfitrión, comodidades, reseñas de huéspedes, mapa de ubicación y un panel de reserva con el desglose de precios.

**Componentes principales:**
- **Navbar / Header** (versión simplificada, sin buscador)
- **Photo Gallery / Galería de imágenes:** Grid o carrusel de fotos del alojamiento.
- **Listing Header:** Título, ubicación, valoración media y número de reseñas.
- **Host Info Card:** Avatar, nombre del anfitrión, tiempo como anfitrión y badge de "Superhost".
- **Amenities List:** Lista de servicios disponibles (WiFi, cocina, piscina, etc.) con iconos.
- **Review Section:** Lista de reseñas de huéspedes anteriores con avatar, fecha y texto.
- **Map Section:** Mapa estático que muestra la ubicación del alojamiento.
- **Reservation Sidebar / Booking Card:** Panel lateral (o bloque inferior en móvil) con selector de fechas, número de huéspedes, desglose de precios y botón "Reservar".
- **Footer**

---

## Especificación de implementación (móvil primero, 375px)

Estas notas documentan los requisitos de cada vista antes de su implementación. La interfaz se construirá únicamente con componentes propios, HTML/React y clases de utilidad Tailwind; no se usarán librerías de componentes preconstruidas.

### Vista de Inicio (`/`)
- Layout vertical `flex flex-col min-h-screen`; cabecera sticky con `SearchBar` sobre `CategoryBar`.
- El cuerpo usa `flex-1 px-4 py-4` y grid `grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4` con tarjetas `ListingCard`.
- `SearchBar` recibe `searchQuery` y `onSearchChange`; pill redondeado con icono de búsqueda, input para filtrar al escribir y acceso de menú/perfil.
- `CategoryBar` recibe `categories`, `selectedCategory` y `onSelectCategory`; fila scrollable horizontal con icono/etiqueta por categoría e indicador inferior de selección.
- `ListingCard` recibe `listing` (`id`, `title`, `location`, `pricePerNight`, `rating`, `imageUrl`), enlaza a `/rooms/{id}` y enseña imagen 4:3/cuadrada, título, puntuación y precio.
- `LoadingState` recibe `message` opcional y centra el indicador/mensaje con padding vertical mientras carga.

### Vista de Catálogo (`/catalog`)
- Layout móvil apilado `flex flex-col px-4 py-4 gap-4`; en escritorio se divide en 12 columnas.
- Encabezado `ResultsHeader` con contador y selector de orden; recibe `totalResults`, `sortOrder` (`asc`/`desc`) y `onSortChange`.
- Columna principal con grid de una columna y tarjetas `ListingCard` reutilizadas.
- `MapPlaceholder` recibe `listings` opcional; en móvil es bloque inferior de 16rem y en escritorio ocupa 5 columnas, sticky y alto de viewport disponible; muestra «Mapa» en recuadro gris.

### Vista de Detalle (`/rooms/[id]`)
- Flujo vertical `flex flex-col pb-24`, bloques separados con divisores; `BackButton` al catálogo y `PhotoGallery` a ancho completo al inicio.
- Contenido con padding horizontal/vertical para `ListingHeader`, `HostInfo` y `AmenitiesGrid`, en ese orden.
- `BookingCard` fija al pie en móvil, con precio, selector de huéspedes limitado por mínimo/máximo y CTA.
- `BackButton` recibe `href` (por defecto `/catalog`) y `label` opcional; enlace con flecha.
- `PhotoGallery` recibe una lista `photos`, muestra imagen 4:3, controles anterior/siguiente y contador `actual / total`.
- `ListingHeader` recibe `title`, `rating`, `reviewsCount` y `location`; presenta título y metadatos con estrella.
- `HostInfo` recibe `hostName`, `yearsHosting` y `avatarUrl` opcional; fila con avatar circular y texto.
- `AmenitiesGrid` recibe `{ icon, label }[]`, incluye encabezado y cuadrícula de dos columnas.
- `BookingCard` recibe `pricePerNight`, `minGuests` y `maxGuests`; incluye controles +/- y botón «Reservar».
