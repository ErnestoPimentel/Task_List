import { useTasks } from '../../contexts/TaskContext';
import { Link } from 'react-router-dom';

function TaskItem({task, onEdit}){
    const {
        toggleTask,
        deleteTask
    } = useTasks();

    const priorityLabels = {
        low: 'Baja',
        medium: 'Media',
        high: 'Alta'
    };

    const handleDelete = async() => {
        const confirmed = window.confirm(`¿Eliminar la tarea ${task.title}?`);

        if(!confirmed){
            return;
        }

        await deleteTask(task.id);
    }

    return(
        <article className={`task-item ${task.completed ? 'task-item-completed' : ''}`}>
            <div className='task-check'>
                <input type='checkbox' checked={task.completed} onChange={() => toggleTask(task)} aria-label={`Completar ${task.title}`} />
            </div>

            <div className='task-content'>
                <h3>
                    {task.title}
                </h3>
                {task.description && (
                    <p>{task.description}</p>
                )}
                <div className='task-meta'>
                    <span className={`task-priority priority-${task.priority}`}>
                        {priorityLabels[task.priority]}
                    </span>
                </div>
            </div>

            <div className='task-actions'>
                <Link to={`/tareas/${task.id}`} className='btn btn-sm btn-light'>
                    Ver
                </Link>

                <button type='button' className='btn btn-sm btn-light' onClick={() => onEdit(task)}>
                    Editar
                </button>

                <button type='button' className='btn btn-sm btn-outline-danger' onClick={handleDelete}>
                    Eliminar
                </button>
            </div>

        </article>
    );
}

export default TaskItem;