import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    route: '/',
    linkName: 'Exercise Tracker'
  },
  {
    route: '/create',
    linkName: 'Create Exercise Log'
  },
  {
    route: '/user',
    linkName: 'Create User'
  },
  {
    route: '/users',
    linkName: 'All Users'
  }
];

const NavLink = ({ route, linkName }) => {
  return (
    <li className='navbar-item'>
      <Link to={route} className='nav-link'>
        {linkName}
      </Link>
    </li>
  );
};

function Navbar() {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <Link to='/' className='navbar-brand'>
        Exercise Tracker
      </Link>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          {navLinks.map(({ route, linkName }) => {
            return <NavLink key={linkName} route={route} linkName={linkName} />;
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
