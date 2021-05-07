import React, { useEffect, useState } from 'react'
import { useHistory, useParams, useRouteMatch, useLocation } from 'react-router-dom'


export const OnePost = () => {
    const [element, setElement] = useState([])
    const { id, endpoint } = useParams()
    const history = useHistory()

    const FetchFn = async () => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`)
        const json = await resp.json()

        setElement(json)
    }
    console.log(endpoint);
    useEffect(() => {
        FetchFn()
    }, [id])

    return (
        <div>
            {(endpoint === 'posts' || endpoint === 'albums') && <>
                <p>{element.id}</p>
                <p>{element.title}</p>
            </>
            }

            {endpoint === 'comments' && <>
                <p>{element.id}</p>
                <p>{element.email}</p>
            </>
            }

            {endpoint === 'todos' && <>
                <p>{element.id}</p>
                <p>{element.completed}</p>
            </>
            }

            {endpoint === 'photos' && <>
                <p>{element.id}</p>
                <p>{element.url}</p>
            </>
            }

            {endpoint === 'users' && <>
                <p>{element.id}</p>
                <p>{element.name}</p>
            </>
            }


            {id > 1 &&
                <button onClick={() => { history.push(`/${endpoint}/${+id - 1}`) }} >
                    Prev element
                 </button>
            }

            <button onClick={() => { history.push(`/${endpoint}`) }} >
                Main
            </button>

            { id < 100 &&
                <button onClick={() => { history.push(`/${endpoint}/${+id + 1}`) }} >
                    Next element
                </button>
            }
        </div>
    )
}