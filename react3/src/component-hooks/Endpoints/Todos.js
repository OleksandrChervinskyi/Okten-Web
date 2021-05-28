import { useSelector } from 'react-redux';

export const Todos = () => {

    const data = useSelector(({ lot1: { dataFromJSON } }) => (dataFromJSON[0]))

    return (
        <>
            {/* just 'posts' */}
            {(data && data.length) ?
                data.map(el => <li className='data_item' key={el.id}>{el.title} - {el.id}</li>) : null}

            {/* posts 1/2.. */}
            {(data && !data.length) ?
                <li className='data_item'>{data.title} - {data.completed.id}</li> : null}
        </>
    )
}