import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import {Nomatch} from './components/Nomatch';
import {Products} from './components/Products';
import { Kurtis } from './components/Kurtis';
import { Watches } from './components/Watches';
import { Profilepage } from './components/Profilepage';
import {Login} from './components/Login';
import {AuthProvider} from './components/Auth';

function App() {
  return (
    <div>
      <AuthProvider>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path ='about' element={<About />}></Route>
      <Route path='*' element={<Nomatch />}></Route>
      <Route path='products' element={<Products />}>
        <Route path='kurtis'element={<Kurtis />}></Route>
        <Route path='watches' element={<Watches />}></Route>
      </Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='profilepage' element={<Profilepage />}></Route>
    </Routes>
    </AuthProvider>
    </div>
  );
}

export default App;
