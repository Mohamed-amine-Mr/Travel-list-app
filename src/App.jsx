import React from 'react'
import "./index.css"
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
  return (
    <div className='add-form'>
    <h3>What you need for your trip?</h3>
<select></select>
<input type="text" placeholder="item.." />
<button>Add</button>

</div>
  )
}function PackingList(){
  return (
    <div className="list">
      <ul>
list      
</ul>
      </div>
  )
}function Stats(){
  return (
    <footer className='stats'>
    <em>
      You got everything! Ready to go ✈️  💼 You have X on your list,
      and you already packed 
    </em>
  </footer>
  )
}