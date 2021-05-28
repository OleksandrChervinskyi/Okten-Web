import { useSelector } from 'react-redux';

export const Users = () => {

    const data = useSelector(({ lot1: { dataFromJSON } }) => (dataFromJSON[0]))

    return (
        <>
            {/* just 'posts' */}
            {(data && data.length) ?
                data.map(el => <li className='data_item' key={el.id}>{el.name} - {el.email}</li>) : null}

            {/* posts 1/2.. */}
            {(data && !data.length) ?
                <li className='data_item'>{data.name} - {data.email}</li> : null}
        </>
    )
}