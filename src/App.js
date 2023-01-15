import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import './App.css';
import WhatsApp from './component/whatsApp/WhatsApp';
import Home from './pages/v1/Home/Home';
import Footer from './pages/v1/shared/Footer/Footer';
import Header from './pages/v1/shared/Header/Header';
import Contact from './pages/v1/Contact/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <WhatsApp></WhatsApp>
    </div>
  );
}

export default App;
