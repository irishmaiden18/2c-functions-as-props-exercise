import Task from "./Task"

const TaskList = ({tasks, complete, deleted}) => {
  return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} complete={() => complete(task.title, task.description)} deleted={() => deleted(task.title, task.description)}/>
        ))}
    </>
  )
}

export default TaskList