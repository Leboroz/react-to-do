import React, { useState, useContext } from 'react';
import { ItemContext } from './ItemProvider';
import { RiDeleteBin2Line } from 'react-icons/ri';

export default function ToDoItem({ title, id }) {
  const [completed, setCompleted] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { deleteItem } = useContext(ItemContext);
  const titleHandler = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <li className="to-do-items__to-do-item">
      <input
        type="checkbox"
        className="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
      />
      <input
        className="to-do-title"
        type="text"
        value={newTitle}
        onChange={titleHandler}
      />
      <button
        className="icon icon__delete-button"
        type="button"
        onClick={() => deleteItem(id)}
      >
        <RiDeleteBin2Line />
      </button>
    </li>
  );
}
