import React, { useRef } from 'react';
import '../styles/components/Layout.css';
import Header from './Header';
import Footer from './Footer';

const splash = document.getElementById('splash');

export default function Layout({ children }) {
  const main = useRef(null);
  setTimeout(() => {
    splash.setAttribute('style', 'display: none');
    main.current?.setAttribute('style', 'position: relative');
  }, 3000);
  return (
    <div className="Main" ref={main}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
