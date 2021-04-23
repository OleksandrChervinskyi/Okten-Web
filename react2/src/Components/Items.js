import React from 'react'

export const Items = (props) => {
    return (
        
            props.obj.map(el => (
                <div key={el.id}>
                    {el.name} -- {el.age}
                    {/* <button onClick={() => props.functionForDeleteOne(el)}>Delete this</button> */}
                </div>

            ))
        
    )
}