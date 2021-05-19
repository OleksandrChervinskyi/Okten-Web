import { useContext } from 'react'
import { TodoContext } from '../../App'

export const DoneBt = ({ oneTodo }) => {

    const { doneTodoNameBody, setDoneTodoNameBody } = useContext(TodoContext)
    console.log(doneTodoNameBody);

    const id = oneTodo.title + oneTodo.body
    const incl = doneTodoNameBody.includes(id)

    const todoIsDone = () => {

        if (!incl) {
            setDoneTodoNameBody([...doneTodoNameBody, id])
           
        } else {
            const filteredDoneTodo = doneTodoNameBody.filter(el => el !== id)
            setDoneTodoNameBody(filteredDoneTodo)
        }
    }

    return (
        <button onClick={todoIsDone}>{incl ? 'Mark in progress' : 'Mark is done'}</button>
    )
}