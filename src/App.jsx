import { useState, useEffect } from "react"
import FormInput from './components/FormInput/FormInput'
import Task from "./components/Task/Task"
import DidTasks from "./components/DidTasks/DidTasks"
import './assets/App.css'


// Static data
const currentDate = new Date()
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function App() {
  
  // List of tasks and done tasks
  const [tasks, setTasks] = useState([{id: 1, title: "Close Todo Application"}])
  const [doneTasks, setDoneTasks] = useState([{id: 2, title: "Open Todo Application",}])

  const handleChangeFromChild = (data, e) => {
    e.preventDefault()
    // console.log(data)
    const newTask = { id: Date.now(), title: data.charAt(0).toUpperCase() + data.slice(1)};
    setTasks([...tasks, newTask]);
  }

  const handleDoneTask = (doneTaskId) => {
    // Находим индекс задачи, которую нужно переместить из tasks в doneTasks
    const taskIndex = tasks.findIndex(task => task.id === doneTaskId);

    if (taskIndex !== -1) {
        const removedTask = tasks.splice(taskIndex, 1)[0]; // Удаляем задачу из tasks
        setTasks([...tasks]); // Обновляем tasks без удаленной задачи
        setDoneTasks([...doneTasks, removedTask]); // Добавляем удаленную задачу в doneTasks
    }
}

useEffect(() => {
  console.log("Element did mount")
}, [])

useEffect(() => {
  console.log("Element did update")

  return () => {
      console.log("Element will unmount")
  };
}, [tasks])

  return (
    <div className="wrapper">
      <header>
        <h1 className="header_logo">Todo</h1>
        <div className="header_calendar">
          <h2 className="calendar_title">Today</h2>
          <div className="calendar_value">
            <p>{currentDate.getDate().toString().padStart(2, '0')}</p>
            <p>{monthNames[currentDate.getMonth()].substring(0, 3  )}</p>
            <p>{currentDate.getFullYear()}</p>
          </div>
        </div>
        <div className="header_icon"><span className="material-symbols-outlined">calendar_month</span></div>
      </header>
      <main>
        <FormInput onChange={handleChangeFromChild}/>
        <Task tasks={tasks} onDone={handleDoneTask}/>
      </main>
      <footer>
        <DidTasks doneTasks={doneTasks}/>
      </footer>
    </div>
  )
}