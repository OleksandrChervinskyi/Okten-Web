import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export const Posts = () => {
    const [posts, setPosts] = useState([])

    const FetchFn = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await resp.json()

        setPosts(json)
    }

    useEffect(() => {
        FetchFn()
    }, [])

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id} className='ul_item'>
                        <Link to={`/posts/${post.id}`}>
                            {post.id} - {post.title}
                        </Link>
                        <hr/>
                    </li>
                ))}
            </ul>
        </div >
    )
}