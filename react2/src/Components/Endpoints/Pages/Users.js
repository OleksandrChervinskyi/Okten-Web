import React, { useEffect, useState } from 'react'

export const Users = () => {
    const url = 'https://jsonplaceholder.typicode.com/Users'
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

    console.log(data[0]);
    return (
        <>
            {
                data.map(el => (
                    <div key={el.id}>
                        <p>User id - {el.userId}</p>
                        <p>Id - {el.id}</p>
                        <p> Email - {el.email}</p>
                        <p>
                            Adress:
                            <p>
                                City - {el.address.city}
                            </p>
                            <p>
                                Street - {el.address.street}
                            </p>
                        </p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}