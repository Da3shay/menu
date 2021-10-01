
import { useState } from 'react';
function ButtonIncrement(props) {
  
   return (
     <button style={{ backgroundColor:"white",borderRadius:"50px",border:"none"}} onClick={props.onClickFunc}>
     +
     </button>
   )
}
function ButtonDecrement(props) {
  
  return (
    <button style={{ marginLeft: '.5rem',cursor:"pointer",backgroundColor:"white",borderRadius:"50px",border:"none", }} onClick={props.onClickFunc}>
    -
    </button>
  )
}
function Display(props) {
  return (
    <label style={{ marginLeft: '.5rem',cursor:"pointer",paddingTop:"3px",fontSize:"8px"}} >{props.message}</label>
 
    )
}
function Increment( {setnumber ,number}) {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () =>{ setCounter(counter + 1); setnumber(counter + 1) };
  let decrementCounter = () => {setCounter(counter - 1);setnumber(counter - 1)};
  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }

  // const setquan=()=>{
  //   setquantity(counter)
  // }
  return (
    <div style={{display:"flex",fontSize:"10px",border:"1px solid green", borderRadius:"10px",marginRight:"10px",marginLeft:"10px"}}> 
      <ButtonIncrement  />
      <Display  message={number}/> 
      <ButtonDecrement  />
   
   
    </div>
  );
}
export default Increment;
// width:"10px",height:"10px"