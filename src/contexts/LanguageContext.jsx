import { createContext, useContext, useEffect, useState } from 'react';
import { useAsyncError } from 'react-router-dom';

const LanguageContext = createContext(null);

const translations = {
  es: {
    appName: 'TaskFlow',
    dashboard: 'Panel principal',
    tasks: 'Mis tareas',
    scheduled: 'Programadas',
    shared: 'Compartidas',
    settings: 'Configuración',
    profile: 'Mi perfil',
    logout: 'Cerrar sesión',
    login: 'Iniciar sesión',
    welcome: 'Bienvenido a TaskFlow',
    overview: 'Resumen de tus tareas',
    totalTasks: 'Total de tareas',
    completedTasks: 'Completadas',
    pendingTasks: 'Pendientes',
    highPriority: 'Prioridad alta',
    recentTasks: 'Tareas recientes',
    createTask: 'Crear tarea',
    editTask: 'Editar tarea',
    deleteTask: 'Eliminar tarea',
    completeTask: 'Completar tarea',
    title: 'Título',
    description: 'Descripción',
    priority: 'Prioridad',
    dueDate: 'Fecha y hora',
    save: 'Guardar',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    search: 'Buscar',
    loading: 'Cargando...',
    noTasks: 'No hay tareas disponibles.',
    language: 'Idioma',
    spanish: 'Español',
    english: 'Inglés',
    appearance: 'Apariencia',
    notifications: 'Notificaciones',
    lightTheme: 'Claro',
    darkTheme: 'Oscuro',
    systemTheme: 'Sistema',
    requiredTitle: 'El título es obligatorio.',
    overdue: 'Vencida',
    upcoming: 'Próxima',
    today: 'Hoy',
    allTasks: 'Todas las tareas',
    completed: 'Completada',
    pending: 'Pendiente',
    progress: 'Progreso',
    markAllRead: 'Marcar todas como leídas',
    noNotifications: 'No tienes notificaciones.',
  },

  en: {
    appName: 'TaskFlow',
    dashboard: 'Dashboard',
    tasks: 'My Tasks',
    scheduled: 'Scheduled',
    shared: 'Shared',
    settings: 'Settings',
    profile: 'My Profile',
    logout: 'Log out',
    login: 'Log in',
    welcome: 'Welcome to TaskFlow',
    overview: 'Your task overview',
    totalTasks: 'Total Tasks',
    completedTasks: 'Completed',
    pendingTasks: 'Pending',
    highPriority: 'High Priority',
    recentTasks: 'Recent Tasks',
    createTask: 'Create Task',
    editTask: 'Edit Task',
    deleteTask: 'Delete Task',
    completeTask: 'Complete Task',
    title: 'Title',
    description: 'Description',
    priority: 'Priority',
    dueDate: 'Date and time',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    search: 'Search',
    loading: 'Loading...',
    noTasks: 'No tasks available.',
    language: 'Language',
    spanish: 'Spanish',
    english: 'English',
    appearance: 'Appearance',
    notifications: 'Notifications',
    lightTheme: 'Light',
    darkTheme: 'Dark',
    systemTheme: 'System',
    requiredTitle: 'The title is required.',
    overdue: 'Overdue',
    upcoming: 'Upcoming',
    today: 'Today',
    allTasks: 'All Tasks',
    completed: 'Completed',
    pending: 'Pending',
    progress: 'Progress',
    markAllRead: 'Mark all as read',
    noNotifications: 'You have no notifications.',
  },
};

function getInitialLanguage(){
    try{
        const savedLanguage = localStorage.getItem('taskflow.language');

        return savedLanguage === 'en' ? 'en' : 'es';
    }
    catch{
        return 'es';
    }
}

export function LanguageProvider({ children }){
    const [language, setLanguage] = useState(getInitialLanguage);

    useEffect(() => {
        try{
            localStorage.setItem('taskflow.language', language);
        }
        catch{

        }

        document.documentElement.lang = language;
    }, [language]);

    function changeLanguage(newLanguage){
        if(newLanguage === 'es' || newLanguage === 'en'){
            setLanguage(newLanguage);
        }
    }

    function t(key){
        return translations[language][key] ?? translations.es[key] ?? key;
    }

    return(
        <LanguageContext.Provider value={{language, changeLanguage, t}}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(){
    const context = useContext(LanguageContext);

    if(!context)
        throw new Error('useLanguage debe utilizarse dentro de LanguageProvider.');

    return context;
}