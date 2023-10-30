import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Footer from './components/Footer';
import Header from './components/Header';
import View from './components/View/View';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/view/:id' element={<View/>} />

      </Routes>
      
      <Footer/>

    

    </>
  );
}

export default App;
