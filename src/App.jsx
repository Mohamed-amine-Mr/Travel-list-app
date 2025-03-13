import React from "react";
import "./index.css";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </>
  );
};

export default App;

function Logo() {
  return <h1>🌴 Farm Away 💼</h1>;
}

/*
Controlled elements:
  1. Define a piece of state.
  2. Use that state on the element we want to control. We basically force the element to always take the value, value={quantity}.
  3. Update the state variable with an onChange handler, onChange={(e) => setDescription(e.target.value)}.
**/

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]); // got lift up to App
  /*
  we want to pass items from the Form to PackingList , we can not use props because they are sbiling components 
  the solution is : Lift The State UP to the closest common componet with is App
*/
  // // got lift up to App
  // function handleAddItems() {
  //   setItems((items) => [...items, item]);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    const newItem = {
      description,
      quantity,

      packed: false,
      id: Date.now(),
    };
    // console.log(newItem);
    onAddItems(newItem);

    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What you need for your trip?</h3>

      <select
        value={quantity}
        onChange={(q) => setQuantity(Number(q.target.value))}
      >
        {
          // Generate options from 1 to 20 for the quantity dropdown
          Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))
        }
      </select>
      <input
        type="text"
        placeholder="item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
// we reseave the props from the app , the got lift up from Form to App (common coponent)
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {/*now we use items state in our jsx*/}
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <>
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button>❌</button>
      </li>
    </>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        You got everything! Ready to go ✈️ 💼 You have X on your list, and you
        already packed
      </em>
    </footer>
  );
}
