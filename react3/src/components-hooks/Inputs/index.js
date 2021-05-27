import {useState} from 'react'

export const Inputs = () => {
    const [inputsValue, setinputsValue] = useState({
        inputEndpoint: '',
        inputId: ''
    })

    const isInputValue = (letter) => {
        
    }

    return (
        <>
            <input value={inputsValue.inputEndpoint} onChange={({target}) => {console.log(target.value)}} 
            type="text" name="endpoint" placeholder="Enter endpoint e.g. 'posts'" />
        </>
    )
}