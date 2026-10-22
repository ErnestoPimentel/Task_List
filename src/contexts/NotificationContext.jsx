import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react';

import { useTasks } from './TaskContext';

import {
    getTaskNotifications
} from '../services/notificationService';

import {
    getStoredNotifications,
    saveNotifications
} from '../store/notificationStorage';

const NotificationContext = createContext(null);

const REFRESH_INTERVAL = 60_000;

export function NotificationProvider({ children }) {
    const { tasks, loading } = useTasks();

    const [dismissedIds, setDismissedIds] = useState(
        () => getStoredNotifications()
    );

    useEffect(() => {
        saveNotifications(dismissedIds);
    }, [dismissedIds]);

    const [now, setNow] = useState(() => Date.now());

    useEffect(() => {
        const interval = window.setInterval(() => {
            setNow(Date.now());
        }, REFRESH_INTERVAL);

        return () => window.clearInterval(interval);
    }, []);

    const notifications = useMemo(() => {
        if (loading) {
            return [];
        }

        const activeNotifications = getTaskNotifications(
            tasks,
            new Date(now)
        );

        return activeNotifications.map((notification) => ({
            ...notification,
            read: dismissedIds.some(
                (item) => item.id === notification.id
            )
        }));
    }, [tasks, loading, now, dismissedIds]);

    const unreadCount = notifications.filter(
        (notification) => !notification.read
    ).length;

    const markAsRead = useCallback((notificationId) => {
        setDismissedIds((current) => {
            const existing = current.some(
                (item) => item.id === notificationId
            );

            if (existing) {
                return current;
            }

            return [
                ...current,
                {
                    id: notificationId,
                    readAt: new Date().toISOString()
                }
            ];
        });
    }, []);

    const markAllAsRead = useCallback(() => {
        setDismissedIds((current) => {
            const existingIds = new Set(
                current.map((item) => item.id)
            );

            const newEntries = notifications
                .filter(
                    (notification) =>
                        !existingIds.has(notification.id)
                )
                .map((notification) => ({
                    id: notification.id,
                    readAt: new Date().toISOString()
                }));

            return [...current, ...newEntries];
        });
    }, [notifications]);

    const value = {
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead
    };

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
}

export function useNotifications() {
    const context = useContext(NotificationContext);

    if (!context) {
        throw new Error(
            'useNotifications debe utilizarse dentro de NotificationProvider.'
        );
    }

    return context;
}