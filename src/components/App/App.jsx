import Nav from "../Nav/Nav"
import TodoList from "../Todo/TodoList"
import AddTodo from "../Todo/AddTodo"

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className='col-md-7 m-auto'>
          <Nav/>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App
