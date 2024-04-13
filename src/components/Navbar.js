import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#264653',
    color: '#f4f4f4', 
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const linkStyle = {
    color: '#f4f4f4',
    textDecoration: 'none',
    fontSize: '18px',
    margin: '0 10px'
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0, color: '#e9c46a' }}>Jasmeen Kaur Portfolio</h2>
      <div>
        <Link to="/" style={linkStyle}>Basic Info</Link>
        <Link to="/work" style={linkStyle}>Work</Link>
        <Link to="/skills" style={linkStyle}>Skills</Link>
        <Link to="/resources" style={linkStyle}>Resources</Link>
        <Link to="/setup" style={linkStyle}>Setup</Link>
        <Link to="/Contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
