import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNotifications } from '../../contexts/NotificationContext';
import { useLanguage } from '../../contexts/LanguageContext';

function NotificationBell() {
    const [open, setOpen] = useState(false);

    const {
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead
    } = useNotifications();

    const { t, language } = useLanguage();

    const dateLocale = language === 'es' ? 'es-MX' : 'en-US';

    return (
        <div className="notification-wrapper">
            <button
                type="button"
                className="notification-bell"
                aria-label={`${t('notifications')}: ${unreadCount}`}
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
                        <h2>
                            {t('notifications')}
                        </h2>

                        {unreadCount > 0 && (
                            <button
                                type="button"
                                onClick={markAllAsRead}
                            >
                                {t('markAllRead')}
                            </button>
                        )}
                    </div>

                    {notifications.length === 0 ? (
                        <div className="notification-empty">
                            {t('noNotifications')}
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
                                            ).toLocaleString(dateLocale)}
                                        </small>
                                    </Link>

                                    {!notification.read && (
                                        <button
                                            type="button"
                                            className="notification-mark-read"
                                            aria-label={t('markAsRead')}
                                            onClick={() =>
                                                markAsRead(
                                                    notification.id
                                                )
                                            }
                                        >
                                            {t('markAsRead')}
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