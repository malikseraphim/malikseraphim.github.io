import { useEffect } from 'react';
import './Task.css'

export default function Task({ tasks, onDone }) {
    // const sendOnDelete = (item) => {
    //     console.log(tasks[item])
    // }

    return (
        <div className="task_container">
            {tasks.length ? tasks.map(task => (
                <div className="item_task" key={task.id}>
                    <div className='button_task' onClick={() => onDone(task.id)}>
                        <span className="material-symbols-outlined">check_box_outline_blank</span>
                    </div>
                    <h3 className='title_task'>{task.title}</h3>
                </div>
            )) : <div>You have not tasks</div>}
        </div>
    );
}
