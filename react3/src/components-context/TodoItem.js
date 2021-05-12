import { DoneBt } from './ItemBt/DoneBt'
import { DelBt } from './ItemBt/DelBt'
import {TodoContext} from '../App'
import { useContext } from 'react'


export const TodoItem = ({ oneTodo }) => {
    const {doneTodoNameBody} = useContext(TodoContext)
   const check = doneTodoNameBody.includes(oneTodo.title + oneTodo.body)

    return (
        <>
            <li className={`todo_item ${check ? 'todo_item_done' : ''}`}>
                <h3>
                    {oneTodo.title}
                </h3>
                <p>
                    {oneTodo.body}
                </p>
            </li>

            <DoneBt oneTodo={oneTodo} />
            <DelBt oneTodo={oneTodo} />
            <hr />
        </>
    )
}