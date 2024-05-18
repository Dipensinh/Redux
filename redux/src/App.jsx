import React from 'react';
import "./App.css" 
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'; 
import changeNumber from './Reducer/Updown';
import {incNumber , decNumber} from "./Action/index"
function App() {

  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch()

  return (
    <>
    <div className="container">
      <h1>Incriment/Decrement counter</h1>
      <h1>using react and redux </h1>

      <div>
        <button onClick={()=>dispatch(incNumber())}>+</button>
        <input type="text" value={myState}/>
        <button onClick={()=>dispatch(decNumber())}>-</button>
        <button>*</button>
        <button>/</button>
      </div>
    </div>
    </>
  )
}

export default App
