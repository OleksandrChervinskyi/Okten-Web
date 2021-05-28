import {useSelector, useDispatch} from 'react-redux'
import {incCounter, decCounter, resetCounter} from '../redux/action-create'

export const Counter = () => {

    const { counter } = useSelector(({ counter }) => (counter))
    const dispatch = useDispatch()

    return (
        <div>
            Counter - {counter}
            <button onClick={() => dispatch(incCounter())}>INC</button>
            <button onClick={() => dispatch(decCounter())}>DEC</button>
            <button onClick={() => dispatch(resetCounter())}>RESET</button>
        </div>
    )
}