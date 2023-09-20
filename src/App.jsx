import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppRouter from './routes/App.router';

AOS.init();

export default function App() {
  return <AppRouter />;
}
