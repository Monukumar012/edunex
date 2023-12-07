
import './App.css';
import { useSelector } from 'react-redux'

import Home from './routes/Home'
import Logout from './routes/Logout'
import Service from './routes/Service'
import About from './routes/About'
import Contact from './routes/Contact'
import SignUp from './routes/SignUp'
import Login from './routes/Login'
import Internship from './routes/Internship'
import MyApplication from './routes/MyApplication'
import ServiceDeatils from './routes/ServiceDeatils'
import ApplicationDetails from './routes/ApplicationDetails'
import Profile from '../src/Components/Profile/Profile.js'
import store from './store';

import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import { loadUser } from './actions/userAction';


function App() {


  useEffect(() => {
    store.dispatch(loadUser())
  }, [])


  const { isAuthenticated } = useSelector(state => state.user)


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/service/:id' element={<ServiceDeatils />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/internship' element={isAuthenticated ? <Internship /> : <Login />} />
        <Route path='/my-application' element={isAuthenticated ? <MyApplication /> : <Login />} />
        <Route path='/my-application/:id' element={isAuthenticated ? <ApplicationDetails /> : <Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/account' element={ <Profile />} />
      </Routes>
    </>


  );
}

export default App;
