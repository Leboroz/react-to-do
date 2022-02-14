import { createContext, useState } from 'react';

export const ItemContext = createContext({
  items: [],
  addItem: () => {},
  deleteItem: () => {},
});

export function ItemProvider({ children }) {
  const [items, setItems] = useState(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : []
  );
  const addItem = (item) => setItems((todos) => [...todos, item]);
  const deleteItem = (id) =>
    setItems((todos) => todos.filter((todo) => todo.id !== id));

  const value = {
    items,
    addItem,
    deleteItem,
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}
