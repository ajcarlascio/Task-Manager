import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'
//written by Anthony Carlascio for WEB422 assignment 1

function App() {
  // a use state to alter the tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Allergist',
      day: 'March 12th at 1:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Team Meeting',
      day: 'April 6th at 12:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Tire Change',
      day: 'April 5th at 12:30pm',
      reminder: false
    }
  ])
  //this function is to add a task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])}

  //delete task based on task id 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
//toggle reminder on an off
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder:
         !task.reminder} : task
         )
        )
  }
//this is the container that will hold a majority of the DOM
  return (
    <div className="container">
      <Header/>
      <AddTask onAdd={addTask}/>
      <>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      </>
    </div>
  );
}

export default App;
