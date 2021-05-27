import './App.css';
import { Inputs } from './component-hooks/inputs';
import { useSelector } from 'react-redux';
import { Posts } from './component-hooks/Endpoints/Posts';


function App() {

  const inputsValue = useSelector(({ lot1: { inputsValue } }) => (inputsValue))


  return (
    <>
      <Inputs />
      <hr />
      <Posts />
    </>
  )
}



export default App;
