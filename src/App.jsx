import React from 'react'
import "./index.css"
import {useState} from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description : "Socks", quantity: 12, packed: false },
  { id: 3, description : "phone", quantity: 12, packed: true },
];

const App = () => {
  return (
    <>
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
    </>
  )
}
export default  App
function Logo(){
  return <h1>🌴 Farm Away 💼</h1>
}
/*
Controlled elements:
  1. Define a piece of state.
  2. Use that state on the element we want to control. We basically force the element to always take the value, value={quantity}.
  3. Update the state variable with an onChange handler, onChange={(e) => setDescription(e.target.value)}.
**/
function Form(){
const [description,setDescription]=useState("")
const [quantity,setQuantity]=useState(1)


  function handleSubmit(e){
    e.preventDefault()
if (!description){
  return
}
    const newItem = {description,quantity,
    
      packed:false,id:Date.now()};
      console.log(newItem);
  // Reset the select and input elements to their initial state after submitting the form 
  
setQuantity(1)
setDescription("")
}



  return (
    <form className='add-form' onSubmit={handleSubmit}>
    <h3>What you need for your trip?</h3>
    
    <select value={quantity} onChange={(q)=>setQuantity(Number(q.target.value))}> 
      {
        // create an array from 1 to 20 , and we will loop over it ,and create a list of option elements 
     Array.from({length:20},(_,i)=>i+1).map((num)=>
     <option value={num} key={num}>{num}</option>)
     }
    </select>
    <input type="text" placeholder="item.."value={description} onChange={(e)=>setDescription(e.target.value)} />
    <button>Add</button>

</form>
  )
}

function PackingList(){
  return (
    <div className="list">
      <ul>
    {initialItems.map((item)=><Item item={item} key={item.id}/>)}  
    </ul>
    </div>
  )
}
function Item({item}){
  return (
<>
<li>
  <span style={item.packed ? {textDecoration:"line-through"}:{}}>
    {item.quantity} {item.description}
  </span>
  <button>❌</button>

</li>


</>
  

  )

}

function Stats(){
  return (
    <footer className='stats'>
    <em>
      You got everything! Ready to go ✈️  💼 You have X on your list,
      and you already packed 
    </em>
  </footer>
  )
}