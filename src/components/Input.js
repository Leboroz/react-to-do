import ToDoItem from './ToDoItem';
import { useEffect, useContext } from 'react';
import { ItemContext } from './ItemProvider';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';

export default function MyInput({ placeholder }) {
  const { addItem } = useContext(ItemContext);
  const [title, setTitle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    addItem({ title, id: uuidv4() });
    e.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          className="input-bar"
          placeholder={placeholder}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="icon__add-button" type="submit">
          <GrAddCircle />
        </button>
      </div>
    </form>
  );
}
