import { useAuth } from '../../contexts/AuthContext';

function Header({onToggleSidebar}){
    const { user, logout } = useAuth();

    return(
        <header className="app-header">
            <button type="button" className="menu-toggle" onClick={onToggleSidebar} aria-label="Mostrar u ocultar menú">
                ☰
            </button>

            <div className="header-user">
                <div className="user-avatar">
                    {user?.name?.chartAt(0).toUpperCase()}
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