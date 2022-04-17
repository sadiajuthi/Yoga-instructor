
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header';
import Blogs from './Blogs/Blogs'
import About from './About/About'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
