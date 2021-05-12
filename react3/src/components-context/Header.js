import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TodoContext } from '../App'

export const Header = () => {
    const { todos, doneTodoNameBody } = useContext(TodoContext)

    return (
        <header className='header'>
            <Link to='/'>
                Main. All todos
          </Link>

            <Link to='/create-todo'>
                Create new Todo
           </Link>
            <div>
                <span>All - {todos.length}</span>
                <br/>
                <span>Done - {doneTodoNameBody.length}</span>
                <br/>
                <span>Active - {todos.length - doneTodoNameBody.length} </span>
            </div>
        </header>
    )
}