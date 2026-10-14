const TASK_STORAGE_KEY = 'taskflow.tasks';

export function getStoredTasks(){
    const storedTasks = localStorage.getItem(TASK_STORAGE_KEY);

    if(!storedTasks)
        return [];

    try{
        return JSON.parse(storedTasks)
    }
    catch{
        localStorage.removeItem(TASK_STORAGE_KEY);
        return [];
    }
}

export function saveTasks(tasks){
    localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
}

export function clearTasks(){
    localStorage.removeItem(TASK_STORAGE_KEY);
}