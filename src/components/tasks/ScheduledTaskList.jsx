import {Link} from 'react-router-dom';

function ScheduledTaskList({tasks}){
    const scheduledTasks = tasks
        .filter((task) => task.dueDate && !task.completed)
        .sort(
            (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        );
    
    if(scheduledTasks.length === 0){
        return(
            <div className='task-empty-state'>
                <div className='task-empty-icon'>
                    ◷
                </div>
                <h3>
                    No hay tareas programadas.
                </h3>
                <p>
                    Las tareas pendientes con fecha y hora apareceran aqui.
                </p>
            </div>
        );
    }

    return(
        <div className='scheduled-task-list'>
            {scheduledTasks.map((task) => {
                const dueDate = new Date(task.dueDate);
                const isOverdue = dueDate.getTime() < Date.now();

                return(
                    <article className='scheduled-task-item' key={task.id}>
                        <div className='scheduled-task-date'>
                            <span>
                                {dueDate.toLocaleDateString('es-MX', {
                                    day: '2-digit',
                                    month: 'short'
                                })}
                            </span>
                            <strong>
                                {
                                    dueDate.toLocaleTimeString('es-MX', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })
                                }
                            </strong>
                        </div>

                        <div className='scheduled-task-content'>
                            <Link to={`/tareas/${task.id}`}>
                                {task.title}
                            </Link>
                            <p>
                                {task.description || 'Sin descripción'}
                            </p>
                            <span className={
                                isOverdue ? 'scheduled-task-status overdue' : 'scheduled-task-status'
                            }>
                                {isOverdue ? 'Fecha vencida' : 'Pendiente'}
                            </span>
                        </div>
                        <span className={`task-priority priority-${task.priority}`}>
                            {
                                task.priority === 'high'
                                    ? 'Alta'
                                    : task.priority === 'medium'
                                        ? 'Media'
                                        : 'Baja'
                            }
                        </span>
                    </article>
                );
            })}
        </div>
    );
}

export default ScheduledTaskList;