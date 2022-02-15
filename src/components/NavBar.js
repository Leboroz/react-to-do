import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseSquare } from 'react-icons/ai';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: '/react-to-do/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/react-to-do/about',
      text: 'About',
    },
  ];

  return (
    <nav className="navbar-container">
      <button
        className="ham"
        type="button"
        onClick={() => {
          setNavbarOpen(!navbarOpen);
        }}
      >
        {!navbarOpen ? <GiHamburgerMenu /> : <AiFillCloseSquare />}
      </button>
      <ul className={`navbar${!navbarOpen ? '' : ' open'}`}>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
