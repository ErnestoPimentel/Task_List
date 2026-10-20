import {Link} from 'react-router-dom';
import {useTasks} from '../contexts/TaskContext';
import ScheduledTaskList from '../components/tasks/ScheduledTaskList';

function ScheduledTasksPage(){
    const {tasks, loading, error} = useTasks();
    const scheduledCount = tasks.filter(
        (task) => task.dueDate && !task.completed
    ).length;

    return(
        <section>
            <div className="page-header">
                <div>
                    <span className="page-eyebrow">
                        Planificación
                    </span>
                    <h1>
                        Tareas programadas
                    </h1>
                    <p>
                        Organiza tus pendientes por fecha y hora.
                    </p>
                </div>
                <Link to="/tareas" className='btn btn-primary'>
                    Administra tareas
                </Link>
            </div>
            {
                error && (
                    <div className='alert alert-danger' role='alert'>
                        {error}
                    </div>
                )
            }
            <div className='scheduled-summary'>
                <div>
                    <span>
                        Tareas pendientes programadas.
                    </span>
                    <strong>
                        {scheduledCount}
                    </strong>
                </div>
            </div>
            {
                loading ? (
                    <div className='dashboard-loading'>
                        Cargando tareas programadas...
                    </div>
                ) : (
                    <ScheduledTaskList tasks={tasks} />
                )
            }
        </section>
    );
}

export default ScheduledTasksPage;