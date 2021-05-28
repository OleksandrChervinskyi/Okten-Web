import './App.css';
import { Inputs } from './component-hooks/inputs';
import { useSelector } from 'react-redux';
import { Posts } from './component-hooks/Endpoints/Posts';
import { Albums } from './component-hooks/Endpoints/Albums';
import { Todos } from './component-hooks/Endpoints/Todos';
import { Comments } from './component-hooks/Endpoints/Comments';
import { Users } from './component-hooks/Endpoints/Users';
import { Photos } from './component-hooks/Endpoints/Photos';
import {
  POSTS,
  ALBUMS,
  TODOS,
  COMMENTS,
  USERS,
  PHOTOS
} from './component-hooks/redux/action-types'


function App() {

  // imputs value
  const inputsValue = useSelector(({ lot1: { inputsValue } }) => (inputsValue))

  return (
    <>
      <Inputs />
      <hr />
      {inputsValue[0] === POSTS && <Posts />}
      {inputsValue[0] === ALBUMS && <Albums />}
      {inputsValue[0] === TODOS && <Todos />}
      {inputsValue[0] === COMMENTS && <Comments />}
      {inputsValue[0] === USERS && <Users />}
      {inputsValue[0] === PHOTOS && <Photos />}

    </>
  )
}



export default App;
