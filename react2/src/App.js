import './App.css';
import React, { useState } from 'react';
import { useRef } from 'react';

const Posts = () => {

  return (
    <>
    <div>kl</div>
    </>
  )
}

function App() {

  // const inpName = React.useRef();
  // const inpAge = React.useRef();

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(inpAge);


  //      Деструктуризація
  // const { target: {
  //   elements: {
  //     nameInp,
  //     ageInp,
  //   }
  // } } = e

  //        JSON Обєкта упорядкований
  // const saveInJSON = JSON.stringify(
  //   { inpName: nameInp.value, inpAge: ageInp.value }, null, 2
  // )
  // alert(saveInJSON)
  //}



  // ------HW------------

  // Controled Inputs ---
  // const iText = useRef()
  // const iRadio1 = useRef()
  // const iRadio2 = useRef()
  // const iCheck = useRef()
  // const iSelecter = useRef()

  // const submitFn = (e) => {
  //   e.preventDefault()

  //   const data = JSON.stringify({
  //     iText: iText.current.value,
  //     iRadio1: iRadio1.current.value,
  //     iRadio2: iRadio2.current.value,
  //     iCheck: iCheck.current.value,
  //     iSelecter: iSelecter.current.value,
  //   }, null, 2)

  //   alert(data)

  // Uncontroled Imputs
  // const [iText, setIText] = useState('')
  // const [iText2, setIText2] = useState('')
  // const [iRadio1, setIRadio1] = useState('off')
  // const [iRadio2, setIRadio2] = useState('on')
  // const [itext, setIText] = useState('')
  // const [itext, setIText] = useState('')

  const [inputs, setInputs] = useState({
    iText: '',
    iText2: '',
  })

 
  const saveFn = () => {
    const data = JSON.stringify(inputs, null, 2)
    alert(data)
  }

  const changeSets = (nameInputs, valueOfInputs) => {
    setInputs({...inputs, [nameInputs] : valueOfInputs})
  }

  return (
    <div className='App'>
      {/* Controled Inputs ---*/}
      {/* <form onSubmit={submitFn}>

        <input type="text" ref={iText} name="inpText" placeholder="Enter text" />
        <input type="radio" ref={iRadio1} name="inpRadio1"  value='1'/> Men
        <input type="radio" ref={iRadio2} name="inpRadio2" value='1' /> Woomen
        <input type="checkbox" ref={iCheck} name="inpCheck" />
        <select ref={iSelecter} name="inpSelecter" >
          <option value="1">11</option>
          <option value="1">22</option>
        </select>
        <button type="submit">Save</button>
      </form> */}

      {/* Uncontroled Inputs */}

      <input value={inputs.iText}
        onChange={({ target: { value } }) => changeSets('iText', value)}
        type="text" name="inpText" placeholder="endPoint ex. 'posts'" />

      <input value={inputs.iText2}
        onChange={({ target: { value } }) => changeSets('iText2',value)}
        type="text" name="inpText" placeholder="number" />

      <button onClick={saveFn}>Show</button>


    </div>
  )
}


export default App;
