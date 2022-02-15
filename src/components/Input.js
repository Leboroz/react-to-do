import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { GrAddCircle } from 'react-icons/gr';
import { ItemContext } from './ItemProvider';

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
      <div className="input">
        <input
          type="text"
          className="input-bar"
          placeholder={placeholder}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="icon icon__add-button" type="submit">
          <GrAddCircle />
        </button>
      </div>
    </form>
  );
}
