import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className="footer">
      <span onClick={()=> navigate('/page2', {replace: true})}>Go to page 2 ➡</span>
    </div>
  )
}

export {Footer};
