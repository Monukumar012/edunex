import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'




const Logout = () => {

    const navigate = useNavigate();
    var {isLogin } = useSelector(state => state.loginUser)


    useEffect(() => {
      
    }, [isLogin])
    
  return (
    <>
      <Navbar />


      {/* <LoginForm /> */}
    </>
  )
}

export default Logout