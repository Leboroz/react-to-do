import { useContext, useEffect } from 'react';
import { ItemContext } from './ItemProvider';
import ToDoItem from './ToDoItem';

export default function ToDoList() {
  const { items } = useContext(ItemContext);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
  }, [items]);

  return (
    <ul className="to-do-items">
      {items.map((item) => (
        <ToDoItem key={item.id} id={item.id} title={item.title} />
      ))}
    </ul>
  );
}
