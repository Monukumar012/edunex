import React, { useState } from 'react'
import './FormStyle.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useAlert}  from 'react-alert'


const ContactForm = () => {


  //Navigate

  const navigate = useNavigate();
  const alert = useAlert();

  //State
  const [inputs,setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message : ""
  })


  //Handle Change
  const handleChange = (e) =>{
    setInputs((prevState) =>({
      ...prevState,
      [e.target.name]:[e.target.value]
    }))
  }

  //Handle Submit
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/user/contact',{
        name : inputs.name[0],
        email : inputs.email[0],
        subject : inputs.subject[0],
        message : inputs.message[0]
      })

      const data =response.data;

      if (data.success) {
        alert.success(data.message);
        navigate('/');
      }
    } catch (error) {
      if(error.response){
        alert.error(error.response.data.message)
      }
      else{
        console.log(`Error in Axios ${error}`);
      }
    }
  }


  return (
    <div className='container'>
      <h1>Send a message to us!</h1>

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
          name='subject'
          id='subject'
          type='text'
          required
          value={inputs.subject}
          onChange={handleChange}
          placeholder='Subject'
        />
        <textarea
          name='message'
          id='message'
          value={inputs.message}
          onChange={handleChange}
          placeholder='Message'
          rows="4"
        >

        </textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm