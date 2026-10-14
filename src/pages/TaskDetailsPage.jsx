import {Link, useParams} from 'react-router-dom';
import {useTasks} from '../contexts/TaskContext';
import TaskDetails from '../components/tasks/TaskDetails';

function TaskDetailsPage(){
    const {taskId} = useParams();
    const {tasks, loading} = useTasks();

    if(loading){
        return(
            <div className="task-empty-state">
                <div className="spinner-border" role="status" aria-label="Cargando tareas">
                </div>
            </div>
        );
    }

    const task = tasks.find((item) => item.id === taskId);

    if(!task){
        return(
            <div className="task-empty-state">
                <h3>
                    Tarea no encontrada.
                </h3>
                <p>
                    La tarea solicitada no existe.
                </p>
                <Link to="/tareas" className="btn btn-primary">
                    Volver a la lista de tareas
                </Link>
            </div>
        );
    }

    return <TaskDetails task={task} />;
}

export default TaskDetailsPage;