import { ItemProvider } from './ItemProvider';
import MyInput from './Input';
import ToDoList from './ToDoList';

export default function ToDoListContainer() {
  return (
    <div className="to-do-container">
      <header className="title">
        <h1 className="display">Todos</h1>
      </header>
      <ItemProvider>
        <MyInput placeholder="Add to do..." />
        <ToDoList />
      </ItemProvider>
    </div>
  );
}
