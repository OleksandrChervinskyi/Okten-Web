import { EndpointsNameList } from '../EndpointsNameList'
import { useDispatch } from 'react-redux'


export const GetEndpointBt = ({ endpoint, idEndpoint }) => {

    const dispatch = useDispatch()

    const endpointFetch = async () => {
        if (!EndpointsNameList.includes(endpoint.toLowerCase())) {
            console.error(`Неможливо перейти за адресою typicode.com/${endpoint}/${idEndpoint}`)
            return
        }

        const resp = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${idEndpoint}`)
        const json = await resp.json()

        // add to store
        dispatch({ type: 'ADDTOSTORE', payload : json})
        dispatch({ type: 'SAVEINPUTSVALEU', payload : endpoint})
    }


    return (
        <button onClick={endpointFetch}>Get endpoint</button>
    )
}