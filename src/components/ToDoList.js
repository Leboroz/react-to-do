import { ItemContext } from './ItemProvider';
import ToDoItem from './ToDoItem';
import { useContext, useEffect } from 'react';

export default function ToDoList({ title }) {
  const { items } = useContext(ItemContext);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
  }, [items]);
  console.log(items);
  return (
    <ul className="to-do-items">
      {items.map((item) => (
        <ToDoItem key={item.id} id={item.id} title={item.title} />
      ))}
    </ul>
  );
}
