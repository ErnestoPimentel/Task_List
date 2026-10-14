import {Link} from 'react-router-dom';

function TaskDetails({task}){
    const priorityLabels = {
        low: 'Baja',
        medium: 'Media',
        high: 'Alta'
    };

    return(
        <article className="task-details-card">
            <div className="task-details-header">
                <div>
                    <span className="paga-eyebrow">
                        Detalle de tarea
                    </span>
                    <h1>
                        {task.title}
                    </h1>
                </div>
                <span className={`task-priority-${task.priority}`}>
                    {priorityLabels[task.priority]}
                </span>
            </div>
            <div className="task-details-status">
                <span className="details-label">
                    Estado
                </span>
                <span className={task.completed ? 'status-completed' : 'status-pendind'}>
                    {task.completed ? 'Completada' : 'Pendiente'}
                </span>
            </div>
            <div className="task-details-section">
                <span className="details-label">
                    Descripción
                </span>
                <p>
                    {task.description || 'Esta tarea no tiene descripción.'}
                </p>
            </div>
            <div className="task-details-section">
                <span className="details-label">
                    Creada
                </span>
                <p>
                    {new Date(task.createdAt).toLocaleString()}
                </p>
            </div>
            <div className="task-details-actions">
                <Link to="/tareas" className="btn btn-light">
                    Volver a tareas
                </Link>
            </div>
        </article>
    );
}

export default TaskDetails;