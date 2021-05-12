import React, { useContext, useState } from 'react'
import {TodoContext} from '../App'

export const CreateTodosPage = () => {
    const [inputsValue, setInputsValue] = useState({
        title: '',
        body: '',
    })

    // Context
    const {onTodoCreate} = useContext(TodoContext)

    // Bt "Save"
    const addTodo = () => {
        onTodoCreate(inputsValue)

        setInputsValue({
            title: '',
            body: '',
        })
    }

    

    // Inputs values
    const OnType = ({ target: { name, value } }) => setInputsValue({ ...inputsValue, [name]: value })

    return (
        <div className='create_todo'>
            <input value={inputsValue.title} onChange={OnType}
                type="text" name="title" placeholder="Enter title todo" />

            <input value={inputsValue.body} onChange={OnType}
                type="text" name="body" placeholder="Enter body of todo" />

            <br />
            <button onClick={addTodo}>Save todo</button>

        </div>
    )
}