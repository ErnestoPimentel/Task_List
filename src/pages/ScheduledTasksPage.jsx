import {Link} from 'react-router-dom';
import {useTasks} from '../contexts/TaskContext';
import { useLanguage } from '../contexts/LanguageContext';
import ScheduledTaskList from '../components/tasks/ScheduledTaskList';

function ScheduledTasksPage(){
    const {tasks, loading, error} = useTasks();
    const scheduledCount = tasks.filter(
        (task) => task.dueDate && !task.completed
    ).length;
    const { t } = useLanguage();

    return(
        <section>
            <div className="page-header">
                <div>
                    <span className="page-eyebrow">
                        {t('planning')}
                    </span>
                    <h1>
                        {t('scheduled')}
                    </h1>
                    <p>
                        {t('scheduledDescription')}
                    </p>
                </div>
                <Link to="/tareas" className='btn btn-primary'>
                    {t('manageTasks')}
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
                        {t('scheduledPendingTasks')}
                    </span>
                    <strong>
                        {scheduledCount}
                    </strong>
                </div>
            </div>
            {
                loading ? (
                    <div className='dashboard-loading'>
                        {t('loadingScheduledTasks')}
                    </div>
                ) : (
                    <ScheduledTaskList tasks={tasks} />
                )
            }
        </section>
    );
}

export default ScheduledTasksPage;