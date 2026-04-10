
const Task = ({task, complete, deleted}) => {
  return (
    <>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button onClick={complete}>Complete Task</button>
        <button onClick={deleted}>Delete Task</button>
    </>
  )
}

export default Task