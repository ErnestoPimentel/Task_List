import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNotifications } from '../../contexts/NotificationContext';

function NotificationBell() {
    const [open, setOpen] = useState(false);

    const {
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead
    } = useNotifications();

    return (
        <div className="notification-wrapper">
            <button
                type="button"
                className="notification-bell"
                aria-label={`Notificaciones sin leer: ${unreadCount}`}
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
            >
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                    <path d="M10 21h4" />
                </svg>

                {unreadCount > 0 && (
                    <span className="notification-badge">
                        {unreadCount > 99 ? '99+' : unreadCount}
                    </span>
                )}
            </button>

            {open && (
                <div className="notification-dropdown">
                    <div className="notification-dropdown-header">
                        <h2>Notificaciones</h2>

                        {unreadCount > 0 && (
                            <button
                                type="button"
                                onClick={markAllAsRead}
                            >
                                Marcar leídas
                            </button>
                        )}
                    </div>

                    {notifications.length === 0 ? (
                        <div className="notification-empty">
                            No tienes notificaciones pendientes.
                        </div>
                    ) : (
                        <div className="notification-list">
                            {notifications.map((notification) => (
                                <div
                                    key={notification.id}
                                    className={`notification-entry ${
                                        notification.read ? 'is-read' : ''
                                    }`}
                                >
                                    <Link
                                        to={`/tareas/${notification.taskId}`}
                                        onClick={() => {
                                            markAsRead(notification.id);
                                            setOpen(false);
                                        }}
                                    >
                                        <strong>
                                            {notification.title}
                                        </strong>

                                        <span>
                                            {notification.message}
                                        </span>

                                        <small>
                                            {new Date(
                                                notification.dueDate
                                            ).toLocaleString()}
                                        </small>
                                    </Link>

                                    {!notification.read && (
                                        <button
                                            type="button"
                                            className="notification-mark-read"
                                            aria-label="Marcar como leída"
                                            onClick={() =>
                                                markAsRead(
                                                    notification.id
                                                )
                                            }
                                        >
                                            Marcar leída
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default NotificationBell;