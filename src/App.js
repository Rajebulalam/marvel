import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import './App.css';
import WhatsApp from './component/whatsApp/WhatsApp';
import Home from './pages/v1/Home/Home';
import Footer from './pages/v1/shared/Footer/Footer';
import Header from './pages/v1/shared/Header/Header';
import Contact from './pages/v1/Contact/Contact';
import ScrollToTop from './component/ScrollTop/ScrollTop';
import AboutUs from './pages/v1/AboutUs/AboutUs';
import React, { Suspense, useEffect } from 'react';
import './i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  // Used for Animation
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      once: false,
    });
  }, [])

  return (
    <div>
      <Suspense fallback={null}>
        <ScrollToTop />
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about-us' element={<AboutUs></AboutUs>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
        <WhatsApp></WhatsApp>
      </Suspense>
    </div>
  );
}

export default App;
