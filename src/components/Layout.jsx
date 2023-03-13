import React from 'react';
import "../styles/components/Layout.css";
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className='Main'>
            <Header />
            { children }
            <Footer />
        </div>
    )
}
