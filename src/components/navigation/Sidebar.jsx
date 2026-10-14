import { NavLink } from 'react-router-dom';

const menuItems = [
    { path: '/', label: 'Dashboard', icon: '⌂', end: true },
    { path: '/tareas', label: 'Tareas', icon: '✓' },
    { path: '/programadas', label: 'Programadas', icon: '◷' },
    { path: '/compartidas', label: 'Compartidas', icon: '⇄' }
];

function Sidebar({ isOpen }) {
    return (
        <aside className={`app-sidebar ${isOpen ? 'is-open' : 'is-collapsed'}`}>
            <div className="sidebar-brand">
                <div className="brand-icon">✓</div>

                {isOpen && (
                    <span className="brand-name">TaskFlow</span>
                )}
            </div>

            <nav className="sidebar-navigation">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.end}
                        className={({ isActive }) =>
                            `sidebar-link ${isActive ? 'active' : ''}`
                        }
                    >
                        <span className="sidebar-icon">
                            {item.icon}
                        </span>

                        {isOpen && (
                            <span>{item.label}</span>
                        )}
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <NavLink
                    to="/configuracion"
                    className={({ isActive }) =>
                        `sidebar-link ${isActive ? 'active' : ''}`
                    }
                >
                    <span className="sidebar-icon">⚙</span>

                    {isOpen && (
                        <span>Configuración</span>
                    )}
                </NavLink>
            </div>
        </aside>
    );
}

export default Sidebar;