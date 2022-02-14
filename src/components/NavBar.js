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
    <nav className="navbar">
      <button type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? <GiHamburgerMenu /> : <AiFillCloseSquare />}
      </button>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
