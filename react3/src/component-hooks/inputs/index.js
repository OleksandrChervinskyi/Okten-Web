import { useState } from 'react'
import { GetEndpointBt } from '../buttons/GetEndpointBt'

export const Inputs = () => {

    const [inputsValue, setInputsValue] = useState({
        endpoint: '',
        idInp: '',
    })

    // controled inputs
    const controlInputs = (nameOfInput, value) => {
        setInputsValue({ ...inputsValue, [nameOfInput]: value })
    }

    return (
        <>
            <input value={inputsValue.endpoint}
                onChange={({ target: { value } }) => (controlInputs('endpoint', value))}
                type="text" name="endpoint" placeholder='Enter endpoint e.g "posts"' />

            <input value={inputsValue.idInp}
                onChange={({ target: { value } }) => (controlInputs('idInp', value))}
                type="number" name="idInp" placeholder='Enter id e.g "12"' />

            <GetEndpointBt endpoint={inputsValue.endpoint} idEndpoint={inputsValue.idInp} />
        </>
    )
}