import { useContext } from 'react'
import { TodoContext } from '../App'
import { TodoItem } from './TodoItem'

export const TodosList = () => {
    const { todos } = useContext(TodoContext)


    return (
        <ul className='todos_list'>
            {todos.map(el => <TodoItem oneTodo={el} key={el.body + el.name} />)}
        </ul>
    )
}