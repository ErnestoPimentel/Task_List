# TaskFlow

TaskFlow es una aplicación web en desarrollo para organizar tareas personales. La interfaz está construida con React y permite trabajar con tareas, revisar un resumen y consultar pendientes programados. La autenticación y los datos son locales y de demostración; todavía no hay servidor ni sincronización entre usuarios o dispositivos.

## Funcionalidades implementadas

- Inicio de sesión de demostración y persistencia de sesión en `localStorage`.
- Rutas para dashboard, tareas, detalle de tarea, tareas programadas, tareas compartidas y configuración.
- Alta de tareas con título, descripción, prioridad y fecha/hora opcional.
- Edición, eliminación y cambio entre estado pendiente y completado desde la lista de tareas.
- Persistencia local de tareas en el navegador.
- Dashboard con conteos, porcentaje de avance y hasta cinco tareas recientes.
- Vista de tareas programadas pendientes, ordenadas por fecha, con indicación de vencimiento.

Las pantallas de tareas compartidas y configuración son, por ahora, vistas iniciales sin operaciones asociadas.

## Estado actual

El proyecto es un prototipo en desarrollo. Hay errores pendientes en la carga y actualización del estado de tareas, así como en la lógica de protección de rutas. Por ello, algunos flujos descritos arriba pueden no funcionar correctamente hasta corregirlos. La autenticación usa una cuenta fija en el código y no debe considerarse segura ni apta para producción.

Credenciales locales de demostración:

- Usuario: `admin`
- Contraseña: `123456`

## Tecnologías

- React 19 y JavaScript (ES modules)
- Vite
- React Router
- Bootstrap 5 y CSS
- `localStorage` para tareas y sesión
- ESLint

## Estructura del proyecto

```text
src/
├── components/
│   ├── auth/          # Protección de rutas
│   ├── navigation/    # Cabecera y navegación lateral
│   └── tasks/         # Formulario, lista, elemento y detalle de tarea
├── contexts/          # Estado global de autenticación y tareas
├── layouts/           # Estructura principal de páginas
├── pages/             # Login, dashboard y páginas de la aplicación
├── services/          # Operaciones de autenticación y tareas
├── store/             # Persistencia en localStorage
├── App.jsx            # Rutas
└── main.jsx           # Punto de entrada
```

## Requisitos

- Node.js y npm

## Instalación y ejecución

```bash
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir la aplicación.

## Comandos disponibles

- `npm run dev` — inicia el servidor de desarrollo.
- `npm run build` — genera la compilación de producción en `dist/`.
- `npm run preview` — sirve localmente la compilación.
- `npm run lint` — analiza el código con ESLint.

## Próximos pasos

- Corregir la carga y actualización de tareas en el estado global.
- Revisar la protección de rutas para usuarios autenticados y no autenticados.
- Completar las vistas de tareas compartidas y configuración.
- Añadir validaciones y pruebas para los flujos principales.
- Incorporar un servicio de autenticación y persistencia en servidor si se requieren cuentas reales o sincronización.
