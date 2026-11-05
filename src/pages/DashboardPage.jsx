import {Link} from 'react-router-dom';
import {useTasks} from '../contexts/TaskContext';
import { useLanguage } from '../contexts/LanguageContext';

function DashboardPage(){
    const {tasks, loading} = useTasks();
    const { t } = useLanguage();

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
        .slice(0, 5);

    const getPriorityLabel = (priority) => {
        const priorities = {
            high: 'high',
            medium: 'medium',
            low: 'low'
        };
        return t(priorities[priority] || 'low');
    };

    return(
        <section>
            <div className='page-header'>
                <div>
                    <h1>
                        {t('dashboard')}
                    </h1>
                    <p>
                        {t('overview')}
                    </p>
                </div>
                <Link to="/tareas" className='btn btn-primary'>
                    {t('createTask')}
                </Link>
            </div>
            {
                loading ? (
                    <div className='dashboard-loading'>
                        {t('loading')}
                    </div>
                ) : (
                    <>
                        <div className=' dashboard-grid'>
                            <article className='dashboard-card'>
                                <span className='dashboard-card-label'>
                                    {t('totalTasks')}
                                </span>
                                <strong>
                                    {totalTasks}
                                </strong>
                                <span className='dashboard-card-detail'>
                                    {t('allTasks')}
                                </span>
                            </article>
                            <article className='dashboard-card'>
                                <span className='dashboard-card-label'>
                                    {t('completedTasks')}
                                </span>
                                <strong>{completedTasks}</strong>
                                <span className='dashboard-card-detail'>
                                    {completionPercentage}% {t('completed').toLowerCase()}
                                </span>
                            </article>
                            <article className='dashboard-card'>
                                <span className='dashboard-card-label'>
                                    {t('pendingTasks')}
                                </span>
                                <strong>
                                    {pendingTasks}
                                </strong>
                                <span className='dashboard-card-detail'>
                                    {t('pendingDescription')}
                                </span>
                            </article>
                            <article className='dashboard-card'>
                                <span className='dashboard-card-label'>
                                    {t('highPriority')}
                                </span>
                                <strong>
                                    {highPriorityTasks}
                                </strong>
                                <span className='dashboard-card-detail'>
                                    {t('urgentPending')}
                                </span>
                            </article>
                        </div>
                        <div className='dashboard-content-grid'>
                            <article className='dashboard-panel'>
                                <div className='dashboard-panel-header'>
                                    <div>
                                        <h2>
                                            {t('progress')}
                                        </h2>
                                        <p>
                                            {t('taskStatusOverview')}
                                        </p>
                                    </div>
                                </div>
                                <div className='dashboard-progress'>
                                    <div className='dashboard-progress-header'>
                                        <span>
                                            {t('completed')}
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
                                            {t('recentTasks')}
                                        </h2>
                                        <p>
                                            {t('latestCreatedTasks')}
                                        </p>
                                    </div>
                                    <Link to="/tareas">
                                        {t('viewAll')}
                                    </Link>
                                </div>
                                {
                                    recentTasks.length === 0 ? (
                                        <div className='dashboard-empty'>
                                            {t('noTasks')}
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
                                                                {task.completed ? t('completed') : t('pending')}
                                                            </span>
                                                        </div>
                                                        <span className={`task-priority priority-${task.priority}`}>
                                                            {getPriorityLabel(task.priority)}
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