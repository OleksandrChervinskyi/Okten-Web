import { useSelector } from 'react-redux';

export const Albums = () => {

    const data = useSelector(({ lot1: { dataFromJSON } }) => (dataFromJSON[0]))

    return (
        <>
            {/* just 'posts' */}
            {(data && data.length) ?
                data.map(el => <li className='data_item' key={el.id}>{el.id} - {el.title}</li>) : null}

            {/* posts 1/2.. */}
            {(data && !data.length) ?
                <li className='data_item'>{data.id} - {data.title}</li> : null}
        </>
    )
}