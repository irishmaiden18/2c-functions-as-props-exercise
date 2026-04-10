import TaskList from "./components/TaskList"

function App() {

  const tasks = [
    {
      id: 1,
      title: "Get Milk",
      description: "Go to the store and buy milk"
    },
    {
      id: 2,
      title: "Get Car Inspected",
      description: "Take car to the mechanic and get it inspected"
    },
    {
      id: 3,
      title: "Clean Bathroom",
      description: "Scrub toilet and sink and mop floors"
    }
  ]
  const completeTask = (title, description) => {
    alert (
        `${title} - ${description} COMPLETED!`
    )
  }

  const deleteTask = (title, description) => {
    alert (
      `${title} - ${description} DELETED!`
    )
  }

  return (
    <>
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} complete={completeTask} deleted={deleteTask}/>    
    </>
  )
}

export default App
