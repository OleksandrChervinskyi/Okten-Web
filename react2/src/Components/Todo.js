import React from 'react';

export const ToDo = ({todo}) => {
    return (
        <div>
            {todo.title}
            {todo.context}
            <hr />
        </div>
    )
}

