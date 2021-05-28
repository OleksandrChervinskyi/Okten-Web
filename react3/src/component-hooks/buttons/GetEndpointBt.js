import { EndpointsNameList } from '../EndpointsNameList'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    addToStore,
    saveInputsValue,
} from '../redux/action-create'


export const GetEndpointBt = ({ endpoint, idEndpoint }) => {

    const dispatch = useDispatch()

    //Local state download icon
    const [downloadIcon, setdownloadIcon] = useState(false)

    const endpointFetch = async () => {
        //Wrong address
        if (!EndpointsNameList.includes(endpoint.toLowerCase())) {
            console.error(`Неможливо перейти за адресою typicode.com/${endpoint}/${idEndpoint}`)
            return
        }

        //Fetch
        setdownloadIcon(true)
        const resp = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${idEndpoint}`)
        const json = await resp.json()
        setdownloadIcon(false)

        // add to store
        dispatch(addToStore(json))
        dispatch(saveInputsValue(endpoint))
    }


    return (
        <>
            <button onClick={endpointFetch}>Get endpoint </button>
            { downloadIcon && <span>&#9883;</span>}
        </>

    )
}