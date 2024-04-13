import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#264653', 
    color: '#f4f4f4', 
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    borderTop: '1px solid #f4f4f4'
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Jasmeen Kaur. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
