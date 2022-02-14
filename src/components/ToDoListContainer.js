import React, { useState, useContext } from 'react';
import { ItemProvider, ItemContext } from './ItemProvider';
import MyInput from './Input';
import ToDoList from './ToDoList';

export default function ToDoListContainer() {
  const { items } = useContext(ItemContext);

  return (
    <div className="to-do-container">
      <header className="title">
        <h1 className="display">Todos</h1>
        <ItemProvider>
          <MyInput placeholder="Add to do..." />
          <ToDoList />
        </ItemProvider>
      </header>
    </div>
  );
}
