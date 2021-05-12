import { useContext} from 'react'
import { TodoContext } from '../../App'


export const DelBt = ({ oneTodo }) => {
    const { onDelTodo } = useContext(TodoContext)

    const delOneTodo = () => {
        const answer = window.confirm('R u sure?')

        if (answer){
            onDelTodo({ oneTodo })

        }
    }

    return (
        <button onClick={delOneTodo}>Delete</button>
    )
}
