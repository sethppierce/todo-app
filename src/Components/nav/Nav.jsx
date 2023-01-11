import React from 'react';
import './styles.scss'
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div id='nav'>
      <Link to="/">Home</Link>
      <Link to='/settings'>Settings</Link>
    </div>
  )
}

export default Nav