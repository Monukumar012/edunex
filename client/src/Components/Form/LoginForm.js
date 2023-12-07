import React, { useState, useEffect, Fragment } from 'react'
import './FormStyle.css'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../Loader/Loader'

import { login, clearErrors } from '../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'


const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const {error, loading, isAuthenticated } = useSelector(state => state.user)


  // State 
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })


  //Handle Change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value]
    }))
  }

  //handle Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(inputs.email[0], inputs.password[0]))
  }


  // const forgotPassword = () => {
  //   dispatch(forgotPassword)
  // }

  //Use Effect
  useEffect(() => {

    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }

    if (isAuthenticated) {
      alert.success("Login Successfully")
      navigate('/');
    }

  }, [dispatch, error, alert, isAuthenticated, navigate])




  return (
    <Fragment>
      {loading ? <Loader /> :
        (
          <div className='container'>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
              <input
                name='email'
                id='email'
                type='email'
                placeholder='Email'
                required
                value={inputs.email}
                onChange={handleChange}

              />
              <input
                name='password'
                id='password'
                type='password'
                placeholder='Password'
                required
                value={inputs.password}
                onChange={handleChange}
              />
              <button>Login</button>
              <div className='two-link'>
                <p>New on our platform? <Link to='/signup'>Create an account</Link> </p>
                {/* <Link onClick={forgotPassword}>Forgot Password</Link> */}
              </div>
            </form>
          </div>
        )

      }
    </Fragment>
  )
}

export default LoginForm