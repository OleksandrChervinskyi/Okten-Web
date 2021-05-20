import { useDispatch, useSelector } from "react-redux"
import {
    incTwo,
    incCustomTwo,
    decTwo,
    resetTwo,
} from '../redux/action-creator';


export const Counter2 = () => {
    const { counter2 } = useSelector(({ counter2 }) => ({ counter2: counter2.counter }))
    const dispatch = useDispatch()

    return (
        <div>
            Second counter - {counter2}
            <button onClick={() => (dispatch(incTwo()))} >INC</button>
            <button onClick={() => (dispatch(incCustomTwo(10)))} >INC on 10</button>
            <button onClick={() => (dispatch(decTwo()))} >DEC</button>
            <button onClick={() => (dispatch(resetTwo()))} >RESET</button>
        </div>
    )
}