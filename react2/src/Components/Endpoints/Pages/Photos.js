import React, { useEffect, useState } from 'react'

export const Photos = () => {
    const url = 'https://jsonplaceholder.typicode.com/Photos'
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
    }, [])

    return (
        <>        
            {
                data.map(el => (
                    <div key={el.id}>
                        <p>AlbumId - {el.albumId}</p>
                        <p>Id - {el.id}</p>
                        <p> url - {el.url}</p>
                        <img src={el.thumbnailUrl} alt="" />
                        <hr />
                    </div>
                ))
            }
        </>
    )
}