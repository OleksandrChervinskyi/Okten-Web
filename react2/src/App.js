import './App.css';
import React, { useState } from 'react';
import { Items } from './Components/Items'




// class App extends React.Component{

//   state = {
//     counter: 0,
//     switch : true,
//     todo : ['hello', 'react']
//   }
//   clickHand = () => {
//     this.setState({counter : this.state.counter + 1})
//   }
//   doOffOn = () => {
//     this.setState({switch : !this.state.switch})
//   }
//   changeToDo =() => {
//       const newToDO = [...this.state.todo];
//       newToDO[1] = Math.random();

//       this.setState({todo: newToDO})
//   }


//   render(){
//       return (
//     <div className="App">
//       {this.state.switch && <Header counter={this.state.counter}/>}
//       {this.state.todo}

//       <button onClick={this.clickHand}>Press!</button>
//       <button onClick={this.doOffOn} >Off/On</button>
//       <button onClick={this.changeToDo} >Change</button>
//     </div>
//       );

//   }
// }


// function App() {
//   // const [counter, setCounter] = useState(0);
//   // const [swith, switcjOn] = useState(true);

//   const [state, setState] = useState({
//     counter: 0,
//     switch: true,
//     todo: [{ id: 1, title: 'Hello', context: 'React' }, { id: 2, title: 'Bye', context: 'JavaScript' }]
//   })

//   const clickHand = () => {
//     setState({
//       ...state,
//       counter: state.counter + 1
//     })
//   }
//   const doOffOn = () => {
//     setState({
//       ...state,
//       switch: state.switch + 1
//     })
//   }

//   const changeToDo = () => {
//     const newToDO = [...state.todo];
//     newToDO[1] = Math.random();

//     setState({
//       ...state,
//       todo: state.newToDO
//     })
//   }

//   return (
//     <div className="App">
//       {state.swith && <Header counter={state.counter} />}

//       <button onClick={clickHand}>Press!</button>
//       <button onClick={doOffOn} >Off/On</button>
//       <button onClick={changeToDo} >Change</button>


//     </div>
//   );
// }



// function App() {
//   const [arr, setArr] = useState([
//     { id: 1, name: 'Alex', age: 22 },
//     { id: 2, name: 'Tanya', age: 21 },
//     { id: 3, name: 'Marvin', age: 1 }
//   ])

//   const [reserv, setRererv] = useState([])

//   const filteredArr = arr.filter(el => !reserv.includes(el.id))

//   function removeOne(element){
//     if (!element) return

//     const clone = [...reserv]
//     clone.push(element.id)
//     setRererv(clone)
//   }

//   const turn = () => setRererv([])


//   return (
//     <div className="App">


//       {filteredArr.map(el => (
//         <div key={el.id}>
//           d
//           {el.age} - {el.name} <button onClick={() => removeOne(el)}>Delete this</button>
//         </div>
//       ))}


//       <button onClick={turn}>Revert</button>
//     </div>

//   )
// }

function App() {
  const [arr, setArr] = useState([
    {
      id: 1,
      name: 'Alex',
      age: 22
    },
    {
      id: 2,
      name: 'MAks',
      age: 13
    },
    {
      id: 3,
      name: 'Gena',
      age: 45
    }
  ])
  const [box, setBox] = useState([])


  const filtered = arr.filter(el => !box.includes(el.id))


  const removeItem = (object) => {
    if (!object) return

    const cloneBox = [...box]
    cloneBox.push(object.id)
    setBox(cloneBox)
  }

  const returnAll = () => setBox([])

  return (
    <div className='App'>

      <Items obj={filtered} />
      <button onClick={returnAll}>Return All</button>
    </div>

  )
}

export default App;
