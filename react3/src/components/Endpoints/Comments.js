import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Comments = () => {
    const [comments, setComments] = useState([])
    const {endpoint} = useParams()

    console.log(endpoint);
    const FetchFn = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/comments')
        const json = await resp.json()

        setComments(json)
    }

    useEffect(() => {
        FetchFn()
    }, [])

    return (
        <div>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id} className='ul_item'>
                        <Link to={`/comments/${comment.id}`}>
                            {comment.id} - {comment.body}
                            <hr />
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
}