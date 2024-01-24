const ListTodoList = ({ todoList}) => {
  return (
    <ul className="lista">
        {
            todoList.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))
        }
    </ul>
  )
}

export default ListTodoList
