import { useDispatch, useSelector } from "react-redux";
import { createRandom, deleteRandom, } from '../redux/action-creator'

export const MathRandom = () => {
    const { randomNumber } = useSelector(({ randomNumber }) => ({ randomNumber: randomNumber.row }))
    const dispatch = useDispatch()

    return (
        <div>
            {randomNumber}
            <button onClick={() => (dispatch(createRandom()))}>Create new Random number</button>
            <button onClick={() => (dispatch(deleteRandom()))}>Delete</button>
        </div>
    )
}