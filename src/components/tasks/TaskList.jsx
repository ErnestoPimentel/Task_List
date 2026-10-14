import { useTasks } from '../../contexts/TaskContext';
import TaskItem from './TaskItem';

function TaskList( {onEdit} ){
    const {
        tasks,
        loading,
        error} = useTasks();

    if(loading){
        return(
            <div className='task-empty-state'>
                <div className='spinner-border' role='status' aria-label='Cargando tareas'>
                </div>
            </div>
        );
    }

    if(error){
        return(
            <div className='alert alert-danger'>
                {error}
            </div>
        );
    }

    if(tasks.length === 0){
        return(
            <div className='task-empty-state'>
                <div className='task-empty-icon'>
                    ✓
                </div>
                <h3>
                    No tienes tareas.
                </h3>
                <p>
                    Crea tu primer tarea para comenzar.
                </p>
            </div>
        );
    }

    return(
        <div className='task-list'>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onEdit={onEdit} />
            ))}
        </div>
    );
}

export default TaskList;