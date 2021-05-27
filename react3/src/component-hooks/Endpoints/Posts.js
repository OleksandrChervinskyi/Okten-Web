import { useSelector } from 'react-redux';

export const Posts = () => {

    const allData = useSelector(({ lot1: { dataFromJSON } }) => (dataFromJSON))
    const data = allData[0]

    const listItems = data.map((number) =>
        <li>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}