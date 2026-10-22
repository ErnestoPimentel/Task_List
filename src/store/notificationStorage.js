const STORAGE_KEY = 'taskflow.notifications';

export function getStoredNotifications(){
    try{
        const stored = localStorage.getItem(STORAGE_KEY);

        if(!stored){
            return[];
        }

        const notifications = JSON.parse(stored);

        return Array.isArray(notifications)
            ? notifications
            : [];
    }
    catch{
        return[];
    }
}

export function saveNotifications(notifications){
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(notifications)
    );
}

export function clearNotifications(){
    localStorage.removeItem(STORAGE_KEY);
}