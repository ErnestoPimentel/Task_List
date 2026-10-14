import { createContext, useContext, useEffect, useState } from 'react';
import { createTask as createTaskService, deleteTask as deleteTaskService, getTasks, updateTask as updateTaskService } from '../services/taskService';

const Taskcontext = createContext(null);

export function TaskProvider({children}){
    const[tasks, setTasks] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('');

    useEffect(() => {
        const loadTasks = async() => {
            try{
                setLoading(true);
                setError('');

                const storedTasks = await getTasks();

                setTasks(storedTasks);
            }
            catch{
                setError('No fue posible cargar las tareas.');
            }
            finally{
                setLoading(false);
            }
        };
        loadTasks();
    }, []);

    const createTask = async(task) => {
        const createdTask = await createTaskService(task);

        setTasks((currentTasks) => [
            createTask,
            ...currentTasks
        ]);
        return createdTask;
    };

    const updateTask = async(taskId, changes) => {
        const updateTask = await updateTaskService(taskId, changes);

        setTasks((currentTasks) => 
            currentTasks.map((task) =>
                task.id === taskId
                    ? updateTask
                    : task
            )
        );
        return updateTask;
    };
    
    const deleteTask = async(taskId) => {
        await deleteTaskService(taskId);

        setTasks((currentTasks) => 
            currentTasks.filter(
                (task) => task.id !== taskId
            )

        );
    };

    const toggleTask = async(task) => {
        await updateTask(
            task.id,
            {
                completed: !task.completed
            }
        );
    };

    return (
        <Taskcontext.Provider
            value={{
                tasks,
                loading,
                error,
                createTask,
                updateTask,
                deleteTask,
                toggleTask
            }}>
                {children}
        </Taskcontext.Provider>
    );
}

export function useTasks(){
    const context = useContext(Taskcontext);

    if(!context)
        throw new Error('useTasks debe utilizarse dentro de TaskProvider.');

    return context;
}