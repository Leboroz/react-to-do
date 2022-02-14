import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
function App(props) {
  return (
    <>
      <div className="app">
        <NavBar />
        <Routes>
          {props.children.map((page, i) => {
            console.log(page);
            return <Route key={i} path={page.props.path} element={page} />;
          })}
        </Routes>
      </div>
      <footer className="footer">footer</footer>
    </>
  );
}

export default App;
