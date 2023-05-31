import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Make your to do list</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    
      <li tabIndex={0}>
        <a>
          Menu
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><Link to='/createtask'>Add Task</Link></li>
          <li><Link to='/all'>All</Link></li>
          <li><Link to='/active'>Active</Link></li>
          <li><Link to='/complete'>Completed</Link></li>
        </ul>
      </li>
     
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;