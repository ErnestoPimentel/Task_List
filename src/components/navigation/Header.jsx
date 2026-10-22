import { useAuth } from '../../contexts/AuthContext';
import NotificationBell from '../notifications/NotificationBell';

function Header({onToggleSidebar}){
    const { user, logout } = useAuth();

    return(
        <header className="app-header">
            <button type="button" className="menu-toggle" onClick={onToggleSidebar} aria-label="Mostrar u ocultar menú">
                ☰
            </button>

            <div className="header-user">
                <NotificationBell />
                <div className="user-avatar">
                    {user?.name?.charAt(0).toUpperCase()}
                </div>
                <div className="user-info">
                    <span className="user-name">
                        {user?.name}
                    </span>
                    <span className="user-role">
                        {user?.email}
                    </span>
                </div>
                <button type='button' className='btn btn-sm btn-outline-secondary ms-3' onClick={logout}>
                    Salir
                </button>
            </div>

        </header>
    );
}

export default Header;