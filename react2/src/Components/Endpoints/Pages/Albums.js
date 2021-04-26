import React, { useEffect, useState } from 'react'
import {Fetch} from '../FetchEndPounts'

export const Albums = () => {
    <Fetch/>
    
    const data = <Fetch url='https://jsonplaceholder.typicode.com/albums'/>
    console.log(data);
    return (
        
        <>
            {
                data.map(el => (
                    <div key={el.id}>
                        <p>User id - {el.userId}</p>
                        <p>Id - {el.id}</p>
                        <p> Title - {el.title}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}