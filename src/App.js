import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NavBar from './components/NavBar';

function App({ children }) {
  return (
    <>
      <div className="app">
        <NavBar />
        <Routes>
          {children.map((page) => (
            <Route key={uuidv4()} path={page.props.path} element={page} />
          ))}
        </Routes>
      </div>
      <footer className="footer">footer</footer>
    </>
  );
}

export default App;
