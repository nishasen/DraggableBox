import React, { useCallback, useEffect, useState } from 'react';
import { AppBar, Display, FloatingBox, Footer } from '../Components';
import './Styles.css';
const Page1 = () => {
  const [showFloatingBox, setShowFloatingBox] = useState(true);
  const escFunction = useCallback((event) => {
    console.log(event)
    if (event.keyCode === 27) {
      setShowFloatingBox(false);
    }
    if(event.keyCode === 13) {
      setShowFloatingBox(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  return (
    <div className="page">
        <nav className="nav">
            <AppBar />
        </nav>
        <main className="main">
            <Display />
            {showFloatingBox && <FloatingBox />}
        </main>
        <footer className="footer">
            <Footer />
        </footer>
    </div>
  )
}

export {Page1};