import TodoItem from "./TodoItem"
import { connect } from "react-redux"
import { markDone, deleteTodo } from "../../store/actions/TodoActions"
import filterTodos from "../../utilities/filterTodos"
import { ListGroup } from "react-bootstrap"

const TodoList = (props) => {
    let { todos, markDone, status, deleteTodo } = props

    if (todos.length === 0) return <p>Nera isvestu uzduociu</p>
    let filterTodosList = filterTodos(todos, status)

    console.log(props)

    return (
        <ListGroup>
            {filterTodosList.map(todo => 
            <TodoItem 
                key={todo.id}
                todo={todo} 
                mark={markDone}
                remove={deleteTodo}
             />)}
        </ListGroup>
    )
}

const mapDispatchToProps = state => ({
    todos: state.todos.todos,
    status: state.todos.filter
})

export default connect(mapDispatchToProps, { markDone, deleteTodo })(TodoList)