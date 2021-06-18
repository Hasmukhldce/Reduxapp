import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {incNum, decNum} from "./actions/index";
import './App.css';

const App = () =>{
const localState = useSelector((state)=> state.changeNum);
const dispatch = useDispatch();

return(
  <>
      <div class="container">

          <h1>Increament/Decrement the counter</h1>
          <h4>Using React Redux</h4>
  
          <div className="quantity">
              
              <a className="quantity_minus" title="Decrement" 
                  onClick = { ()=> dispatch(decNum())}><span>-</span></a>  
              
              <input name="quantity" type="text" className ="quantity_input" value = {localState} />
              
              <a className="quantity_plus" title="Increment" 
                    onClick = { ()=> dispatch(incNum())} ><span>+</span></a>  

          </div>
      
      </div>
  </>
)
}

export default App