import './DidTasks.css'

const DidTasks = ({ doneTasks }) => {
    return ( 
        <div className="did-task_container">
            {doneTasks.map(task => (
                <div className="item_task" key={task.id}>
                    <div className='button_did-task'>
                        <span className="material-symbols-outlined">check_box</span>
                    </div>
                    <h3 className='title_task'>{task.title}</h3>
                </div>
            ))}
        </div>
    );
}
 
export default DidTasks;