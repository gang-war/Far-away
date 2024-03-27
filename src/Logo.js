import { useState } from "react";

export function Logo() {
  return <h1> 💕 Far Away ❤️</h1>;
}
export function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (description !== null) {
      const newItem = {
        description,
        quantity,
        packed: false,
        id: Date.now(),
      };

      console.log(newItem);

      onAddItem(newItem);

      setDescription("");
      setQuantity(1);
    }
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="What's in your mind"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
