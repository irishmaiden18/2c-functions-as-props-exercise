import Task from "./Task"

const TaskList = ({tasks, complete, deleted}) => {
  return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} complete={() => complete(task.title)} deleted={() => deleted(task.title)}/>
        ))}
    </>
  )
}

export default TaskList