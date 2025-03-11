import React from 'react'

const App = () => {
  return (
    <><Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
    </>
  )
}
export default  App
function Logo(){
  return <h1>🌴 Farm Away 💼</h1>
}function Form(){
  return (
    <form>
            <h3>What you need for your trip?</h3>
<select></select>
<input type="text" placeholder="item.." />
<button>Add</button>

</form>
  )
}function PackingList(){
  return (
    <div className="list">
      <ul>
        <li></li>
      </ul>
      </div>
  )
}function Stats(){
  return (
    <footer>
    <em>
      ? "You got everything! Ready to go ✈️" : ` 💼 You have X on your list,
      and you already packed `
    </em>
  </footer>
  )
}