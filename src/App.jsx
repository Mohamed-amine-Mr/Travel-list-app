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
function Form(){
const [description,setDescription]=useState("")

  function handleSubmit(e){
    e.preventDefault()
     
  }
  return (
    <div className='add-form' onSubmit={handleSubmit}>
    <h3>What you need for your trip?</h3>
    <select>
      {
        // create an array from 1 to 20 , and we will loop over it ,and create a list of option elements 
     Array.from({length:20},(_,i)=>i+1).map((num)=><option value={num} key={num}>{num}</option>)
     }
    </select>
    <input type="text" placeholder="item.."value={description} onChange={(e)=>setDescription(e.target.value)} />
    <button>Add</button>

</div>
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