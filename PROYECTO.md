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
│   └── tasks/         # Formulario, lista, elemento y detalle de tarea
├── contexts/          # Estado global de autenticación y tareas
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
- Cambio del estado de una tarea entre pendiente y completada.
- Eliminación de tareas.
- Persistencia local de tareas.
- Vista de tareas programadas que muestra tareas pendientes con fecha, ordenadas por vencimiento e identifica las fechas vencidas.
- Dashboard calculado a partir de las tareas: total, completadas, pendientes y pendientes de prioridad alta.
- Porcentaje de avance y lista de hasta cinco tareas recientes en el dashboard.
- Rutas y vistas para dashboard, lista de tareas, detalle, tareas programadas, tareas compartidas y configuración.

## Alcance y estado

La autenticación es de demostración: utiliza un usuario definido en el código y no valida credenciales con un servidor. Las tareas se guardan localmente en el mismo navegador y no se sincronizan entre dispositivos o usuarios.

El detalle de tarea y el dashboard ya presentan información de las tareas guardadas. El formulario permite asignar una fecha y hora, y la página de tareas programadas las ordena e indica si ya vencieron. La edición está integrada en la lista y permite modificar los campos del formulario, aunque el flujo requiere validación para considerarlo completo. Las vistas de tareas compartidas y configuración son actualmente pantallas iniciales.

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

- Validar y completar el flujo de edición de tareas.
- Implementar tareas compartidas y preferencias de usuario.
- Revisar la carga y actualización del estado de tareas para asegurar que la persistencia local se refleje correctamente en la interfaz.
- Sustituir la autenticación de demostración por un servicio real si el proyecto requiere cuentas de usuario.
