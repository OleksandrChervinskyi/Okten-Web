import React, { useEffect, useState } from 'react'

export const Comments = () => {
    const url = 'https://jsonplaceholder.typicode.com/Comments'
    const [data, setData] = useState([])

    const giveData = async () => {
        const endPoint = await fetch(url)
        const newData = await endPoint.json()

        setData(newData)
    }

    useEffect(() => {
        giveData()
        return () => {

        }
    },[])

    return (
        <>
            {
                data.map(el => (
                    <div key={el.id}>
                        <p>User id - {el.userId}</p>
                        <p>Id - {el.id}</p>
                        <p> Email - {el.email}</p>
                        <p>Body - {el.body}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}