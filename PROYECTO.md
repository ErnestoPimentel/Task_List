# TaskFlow

## Descripción

Aplicación web en desarrollo para gestionar tareas personales. Incluye acceso de usuario, navegación protegida y una interfaz para crear y organizar tareas. La persistencia actual se realiza en el navegador; no hay una API ni colaboración entre usuarios conectada.

## Tecnologías

- React 19 y JavaScript moderno
- Vite
- React Router
- Bootstrap 5 y CSS
- LocalStorage para la persistencia local

## Estructura

```text
src/
├── components/
│   ├── auth/          # Protección de rutas
│   ├── navigation/    # Cabecera y navegación lateral
│   ├── notifications/ # Campana y panel de notificaciones
│   └── tasks/         # Formulario, lista, elemento, detalle y lista de programadas
├── contexts/          # Estado global de autenticación, tareas y notificaciones
├── layouts/           # Estructura principal de páginas
├── pages/             # Login, dashboard y páginas de la aplicación
├── services/          # Operaciones de autenticación y tareas
├── store/             # Persistencia en LocalStorage
├── App.jsx            # Rutas
└── main.jsx           # Punto de entrada
```

## Funcionalidades disponibles

- Inicio y cierre de sesión con persistencia de sesión en LocalStorage.
- Protección de las rutas principales.
- Creación de tareas con título, descripción y prioridad.
- Captura opcional de fecha y hora programadas desde el formulario de tareas.
- Edición de los datos de la tarea, incluida su fecha y hora programadas.
- Cambio del estado de una tarea entre pendiente y completada.
- Eliminación de tareas.
- Persistencia local de tareas.
- Vista de tareas programadas con contador de pendientes, orden por fecha de vencimiento e indicador para tareas vencidas.
- Campana de notificaciones con contador de avisos sin leer y panel desplegable.
- Avisos para tareas pendientes vencidas o que vencerán dentro de las próximas 24 horas; el estado de lectura se conserva en LocalStorage.
- Actualización periódica de los avisos cada minuto y acceso al detalle de la tarea desde cada notificación.
- Dashboard calculado a partir de las tareas: total, completadas, pendientes y pendientes de prioridad alta.
- Porcentaje de avance y lista de hasta cinco tareas recientes en el dashboard.
- Rutas y vistas para dashboard, lista de tareas, detalle, tareas programadas, tareas compartidas y configuración.

## Alcance y estado

La autenticación es de demostración: utiliza un usuario definido en el código y no valida credenciales con un servidor. Las tareas se guardan localmente en el mismo navegador y no se sincronizan entre dispositivos o usuarios.

El detalle de tarea y el dashboard presentan información de las tareas guardadas. El formulario permite establecer o modificar título, descripción, prioridad y fecha/hora opcional; la vista de tareas programadas resume las pendientes con fecha y señala las vencidas. Las notificaciones se calculan a partir de las tareas locales y se refrescan mientras la aplicación está abierta. Aunque el flujo de edición está integrado en la lista, todavía requiere validación funcional. Las vistas de tareas compartidas y configuración son pantallas iniciales.

## Ejecución

```bash
npm install
npm run dev
```

Comandos disponibles:

- `npm run build` — genera la versión de producción.
- `npm run lint` — ejecuta ESLint.
- `npm run preview` — sirve localmente la versión compilada.

## Próximos pasos

- Validar el flujo de edición y la carga/reflejo de tareas en la interfaz.
- Revisar el ciclo de vida de las notificaciones al completar o eliminar tareas y al limpiar los datos locales.
- Implementar tareas compartidas y preferencias de usuario.
- Sustituir la autenticación de demostración por un servicio real si el proyecto requiere cuentas de usuario.
