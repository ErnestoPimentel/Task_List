import { getStoredTasks, saveTasks } from '../store/taskStorage';

export async function getTasks(){
    await new Promise((resolve) => {
        setTimeout(resolve, 200);
    });

    return getStoredTasks;
}

export async function createTask(task){
    const tasks = getStoredTasks();

    const newTask = {
        ...task,
        id: crypto.randomUUID(),
        completed: false,
        createdAt: new Date().toISOString()
    };

    saveTasks([newTask, ...tasks]);

    return newTask;
}

export async function updateTask(taskId, changes){
    const tasks = getStoredTasks();

    const updateTasks = tasks.map((task) => 
        task.id === taskId
            ? { ...task, ...changes}
            : task);

    saveTasks(updateTasks);
     
    return updateTasks.find(
        (task) => task.id === taskId);
}

export async function deleteTask(taskId){
    const tasks = getStoredTasks();

    const updatedTasks = tasks.filter(
        (task) => task.id !== taskId
    );

    saveTasks(updatedTasks);
}
