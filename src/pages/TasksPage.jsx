import { useState } from 'react';
import { useTasks } from '../contexts/TaskContext';
import TaskForm from '../components/tasks/TaskForm';
import TaskList from '../components/tasks/TaskList';

function TaskPage(){
    const [showForm, setShowForm] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const {createTask, updateTask} = useTasks();

    const handleCreateTask = async(task) => {
        await createTask(task);
        setShowForm(false);
    };

    const handleEditTaks = (task) => {
        setEditingTask(task);
        setShowForm(false);
    };

    const handleUpdateTask = async(changes) => {
        await updateTask(
            editingTask.id,
            changes
        )
    };

    const handleCancel = () => {
        setShowForm(false);
        setEditingTask(null);
    }

    return(
        <section>
            <div className="page-header">
                <div>
                    <span className="page-eyebrow">
                        Gestión
                    </span>
                    <h1>
                        Tareas
                    </h1>
                    <p>
                        Administra tus tareas y actividades.
                    </p>
                </div>
                {!editingTask && (
                    <button type="button" className="btn btn-primary" onClick={() => setShowForm(true)}>
                        Nueva tarea
                    </button>
                )}
            </div>
            {
                (showForm || editingTask) && (
                    <div className='task-form-card'>
                        <div className='task-form-header'>
                            <h2>
                                {editingTask ? 'Editar tarea' : 'Nueva tarea'}
                            </h2>
                        </div>
                        <TaskForm task={editingTask} onSubmit={editingTask ? handleUpdateTask : handleCreateTask} onCancel={handleCancel} />
                    </div>
                )
            }
            <TaskList onEdit={handleEditTaks} />
        </section>
    );
}

export default TaskPage;