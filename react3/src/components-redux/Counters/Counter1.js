import { useDispatch, useSelector } from "react-redux"
import {
    incOne,
    incCustomOne,
    decOne,
    resetOne,
} from '../redux/action-creator';
import { MathRandom } from '../Math/MathRandom'

export const Counter1 = () => {
    const { counter1 } = useSelector(({ counter1 }) => ({ counter1: counter1.counter }))
    const dispatch = useDispatch()

    return (
        <>
            <div>
                First counter - {counter1}
                <button onClick={() => (dispatch(incOne()))} >INC</button>
                <button onClick={() => (dispatch(incCustomOne(100)))} >INC on 100</button>
                <button onClick={() => (dispatch(decOne()))} >DEC</button>
                <button onClick={() => (dispatch(resetOne()))} >RESET</button>
            </div>
            <div>
                <MathRandom />
            </div>
        </>
    )
}