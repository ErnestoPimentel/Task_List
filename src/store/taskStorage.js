const TASK_STORAGE_KEY = 'taskflow.tasks';

export function getStoredTasks(){
    const storedTasks = localStorage.getItem(TASK_STORAGE_KEY);

    if(!storedTasks)
        return [];

    try{
        const parsedTasks = JSON.parse(storedTasks);

        if(!Array.isArray(parsedTasks)){
            localStorage.removeItem(TASK_STORAGE_KEY);
            return[];
        }
        return parsedTasks;
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