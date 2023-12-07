import { useState, useEffect, Fragment } from 'react'
import React from 'react'
import './FormStyle.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/userAction'
import { useAlert } from 'react-alert'
import Loader from '../Loader/Loader'


const SignUpForm = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const alert = useAlert();

  const { error, isAuthenticated, loading } = useSelector(state => state.user)

  //State
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword : "",
  })


  //Handle Change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }


  //handle Submit

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(inputs))

  }



  useEffect(() => {

    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }
    
    if (isAuthenticated) {
      alert.success("Register Successfully")
      navigate('/login');
    }


  }, [dispatch, error, alert,isAuthenticated,navigate])


  return (
    <Fragment>
      {loading ? <Loader /> : (
        <div className='container'>
          <h1>Sign Up</h1>

          <form onSubmit={handleSubmit}>
            <input
              name='name'
              id='name'
              type='text'
              placeholder='Name'
              required
              value={inputs.name}
              onChange={handleChange}
            />
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
            <input
              name='confirmPassword'
              id='confirmPassword'
              type='password'
              placeholder='Confirm Password'
              required
              value={inputs.confirmPassword}
              onChange={handleChange}
            />
            <button>Sign Up</button>
            <div className='one-link'>
                <p>Already registered? <Link to='/login'>Login Now</Link> </p>
              </div>
          </form>
        </div>
      )}
    </Fragment>
  )
}

export default SignUpForm