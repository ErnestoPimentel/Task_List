import {Link} from 'react-router-dom';
import {useTasks} from '../contexts/TaskContext';

function DashboardPage(){
    const {tasks, loading} = useTasks();

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    const highPriorityTasks = tasks.filter(
        (task) => task.priority === 'high' && !task.completed
    ).length;

    const completionPercentage = totalTasks
        ? Math.round(
            (completedTasks / totalTasks) * 100
        )
        : 0;

    const recentTasks = [...tasks]
        .sort(
            (a,b) => 
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .splice(0, 5);

    return(
        <section>
            <div className='page-header'>
                <div>
                    <h1>
                        Dashboard
                    </h1>
                    <p>
                        Resumen general de tus tareas.
                    </p>
                </div>
                <Link to="/tareas" className='btn btn-primary'>
                    Nueva tarea
                </Link>
            </div>
            {
                loading ? (
                    <div className='dashboard-loading'>
                        Cargando información...
                    </div>
                ) : (
                    <>
                        <div className=' dashboard-grid'>
                            <article className='dashboard-card'>
                                <span className='dashboard-card-label'>
                                    Total tareas
                                </span>
                                <strong>
                                    {totalTasks}
                                </strong>
                                <span className='dashboard-card-detail'>
                                    Todas tus tareas
                                </span>
                            </article>
                            <article className='dashboard-card'>
                                <span className='dashboard-card-label'>
                                    Completadas
                                </span>
                                <strong>{completedTasks}</strong>
                                <span className='dashboard-card-detail'>
                                    {completionPercentage}% completado
                                </span>
                            </article>
                            <article className='dashboard-card'>
                                <span className='dashboard-card-label'>
                                    Pendientes
                                </span>
                                <strong>
                                    {pendingTasks}
                                </strong>
                                <span className='dashboard-card-detail'>
                                    Tareas por completar
                                </span>
                            </article>
                            <article className='dashboard-card'>
                                <span className='dashboard-card-label'>
                                    Alta prioridad
                                </span>
                                <strong>
                                    {highPriorityTasks}
                                </strong>
                                <span className='dashboard-card-detail'>
                                    Pendientes urgentes
                                </span>
                            </article>
                        </div>
                        <div className='dashboard-content-grid'>
                            <article className='dashboard-panel'>
                                <div className='dashboard-panel-header'>
                                    <div>
                                        <h2>
                                            Progreso
                                        </h2>
                                        <p>
                                            Estado general de tus tareas.
                                        </p>
                                    </div>
                                </div>
                                <div className='dashboard-progress'>
                                    <div className='dashboard-progress-header'>
                                        <span>
                                            Completado
                                        </span>
                                        <strong>
                                            {completionPercentage}
                                        </strong>
                                    </div>
                                    <div className='progress'>
                                        <div className='progress-bar' role='progressbar' style={{width: `${completionPercentage}%`}} aria-valuenow={completionPercentage} aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </article>
                            <article className='dashboard-panel'>
                                <div className='dashboard-panel-header'>
                                    <div>
                                        <h2>
                                            Tareas recientes
                                        </h2>
                                        <p>
                                            Últimas tareas creadas.
                                        </p>
                                    </div>
                                    <Link to="/tareas">
                                        Ver todas
                                    </Link>
                                </div>
                                {
                                    recentTasks.length === 0 ? (
                                        <div className='dashboard-empty'>
                                            No hay tareas registradas
                                        </div>
                                    ) : (
                                        <div className='dashboard-recent-list'>
                                            {recentTasks.map(
                                                (task) => (
                                                    <Link key={task.id} to={`/tareas/${task.id}`} className='dashboard-recent-item'>
                                                        <div>
                                                            <strong>
                                                                {task.title}
                                                            </strong>
                                                            <span>
                                                                {task.completed ? 'Completada' : 'Pendiente'}
                                                            </span>
                                                        </div>
                                                        <span className={`task-priority priority-${task.priority}`}>
                                                            {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Media' : 'Baja'}
                                                        </span>
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    )
                                }
                            </article>
                        </div>
                    </>
                )
            }
        </section>
    );
}

export default DashboardPage;