import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



export const Endpoints = () => {
    const [point, setPoint] = useState([])
    const { endpoint } = useParams()

    const FetchFn = async () => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        const json = await resp.json()

        setPoint(json)
    }

    useEffect(() => {
        FetchFn()
    }, [endpoint])

    return (
        <div>
            <ul>
                {point.map(el => (
                    <li key={el.id} className='ul_item'>
                        <Link to={`/${endpoint}/${el.id}`}>
                            {(endpoint === 'posts' || endpoint === 'albums') && <>{el.id} - {el.title}</>}
                            {endpoint === 'comments' && <>{el.id} - {el.email}</>}
                            {endpoint === 'photos' && <>{el.id} - {el.url}</>}                           
                            {endpoint === 'todos' && <>{el.id} - {el.completed.toString()}</>}
                            {endpoint === 'users' && <>{el.id} - {el.name}</>}
                        </Link>
                        <hr />
                    </li>
                ))}
            </ul>
        </div >
    )
}