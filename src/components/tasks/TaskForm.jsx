import { useState, useEffect } from "react";

function TaskForm({ task = null, onSubmit, onCancel }){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('medium');
    const [dueDate, setDueDate] = useState('');

    const isEditing = Boolean(task);

    useEffect(() => {
        if(!task){
            setTitle('');
            setDescription('');
            setPriority('medium');
            setDueDate('');
            return;
        }

        setTitle(task.title);
        setDescription(task.description || '');
        setPriority(task.priority || 'medium');
        setDueDate(task.dueDate || '');

    }, [task]);

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!title.trim())
            return;

        await onSubmit(
            {
                title: title.trim(),
                description: description.trim(),
                priority: priority,
                dueDate: dueDate
            }
        );

        if(!isEditing){
            setTitle('');
            setDescription('');
            setPriority('medium');
        }
    };

    return(
        <form className="task-form" onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="task-title" className="form-label">
                    Titulo
                </label>
                <input id="task-title" type="text" className="form-control" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Escribe el nombre de la tarea." required />
            </div>

            <div className="mb-3">
                <label htmlFor="task-description" className="form-label">
                    Descripción
                </label>
                <textarea id="task-description" className="form-control" rows="3" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Describe la tarea." />
            </div>

            <div className="mb-3">
                <label htmlFor="task-due-date" className="form-label">
                    Fecha y hora programadas
                </label>
                <input id="task-due-date" type="datetime-local" className="form-control" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
                <div className="form-text">
                    Este campo es opcional
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="task-priority" className="form-label">
                    Prioridad
                </label>
                <select id="task-priority" className="form-select" value={priority} onChange={(event) => setPriority(event.target.value)}>
                    <option value="low">
                        Baja
                    </option>
                    <option value="medium">
                        Media
                    </option>
                    <option value="high">
                        Alta
                    </option>
                </select>
            </div>

            <div className="d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-light" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                    {
                        isEditing ? 'Guardar cambios' : 'Crear tarea'
                    }
                </button>
            </div>
        </form>
    );
}

export default TaskForm;