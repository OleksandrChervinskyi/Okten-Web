import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import {
  incAction,
  incCustomAction,
  decAction,
  resetAction,
} from './components-redux/redux/action-creator'

function App() {
  const { counter1, counter2 } = useSelector(({ counter1, counter2 }) => ({
    counter1: counter1.counter,
    counter2 : counter2.counter
  }))

  const dispatch = useDispatch()


  return (
    <>
      <div>Hello</div>
      <div>
        {counter1}  - Counter 1
      </div>
      <div>
        {counter2}  - Counter 2
     </div>

      <button onClick={() => { dispatch(incAction()) }}>INC</button>
      <button onClick={() => { dispatch(incCustomAction(102)) }}>INC 102</button>
      <button onClick={() => { dispatch(decAction()) }}>DEC</button>
      <button onClick={() => { dispatch(resetAction()) }}>RESET</button>
    </>
  )
}



export default App;
