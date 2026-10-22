const HOURS_24 = 24 * 60 * 60 * 1000;

export function getTaskNotifications(tasks, now =  new Date()){
    const notifications = [];

    for(const task of tasks){
        if(!task.dueDate || task.completed){
            continue;
        }

        const dueDate = new Date(task.dueDate);

        if(Number.isNaN(dueDate.getTime())){
            continue;
        }

        const difference = dueDate.getTime() - now.getTime();

        if(difference < 0){
            notifications.push({
                id: `overdue-${task.id}`,
                taskId: task.id,
                type: 'overdue',
                title: 'Tarea vencida',
                message: task.title,
                dueDate: task.dueDate
            });
            continue;
        }

        if(difference <= HOURS_24){
            notifications.push({
                id: `upcoming-${task.id}`,
                taskId: task.id,
                type: 'upcoming',
                title: 'Tarea próxima a vencer',
                message: task.title,
                dueDate: task.dueDate
            });
        }
    }
    return notifications;
}