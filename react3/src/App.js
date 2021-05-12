import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from './components-context/Header'
import { CreateTodosPage } from './components-context/CreateTodosPage'
import React, { createContext, useState } from 'react';
import { TodosList } from './components-context/Todoslist';

// Context
export const TodoContext = createContext()


// Provider
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([{ title: 'add', body: 'remington' }])
  const [doneTodoNameBody, setDoneTodoNameBody] = useState([])

  // Fn add newTodo
  const onTodoCreate = (newTodo) => {
    if (!newTodo || !newTodo.title || !newTodo.body) {
      console.error('wrong new todo');
      return
    }
    setTodos([newTodo, ...todos])
  }

  // Fn del one Todo item
  const onDelTodo = ({ oneTodo }) => {
    const filteredTodos = todos.filter(item => item.title !== oneTodo.title && item.body !== oneTodo.body)
    const filteredDoneTodo = doneTodoNameBody.filter(el => el !== (oneTodo.title + oneTodo.body))

    setTodos(filteredTodos)
    setDoneTodoNameBody(filteredDoneTodo)
  }

  return (

    <TodoContext.Provider value={{
      todos,
      onTodoCreate,
      onDelTodo,
      doneTodoNameBody,
      setDoneTodoNameBody
    }}>

      {children}

    </TodoContext.Provider>

  )
}



function App() {

  return (
    <TodoProvider>

      <Router>
        <Header />

        <Switch>
          <Route path='/' exact>
            <TodosList />
          </Route>

          <Route path='/create-todo'>
            <CreateTodosPage />
          </Route>
        </Switch>
      </Router>

    </TodoProvider>
  )
}



export default App;
