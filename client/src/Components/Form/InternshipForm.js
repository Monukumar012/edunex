import React, { useState } from 'react'
import './FormStyle.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'

const InternshipForm = () => {

        //Naviagte
        const navigate = useNavigate()
        const alert = useAlert();

        //State
        const [inputs, setInputs] = useState({
                name: "",
                mobile: "",
                internship: "",
                qualification: "",
                major: "",
                college: "",
                linkedin: "",
                github: "",
        })

        //pdf STate
        const [pdfFile, setPdfFile] = useState(null);


        //Handle Change
        const handleChange = (e) => {
                setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: [e.target.value]
                }))
        }


        //Handle Pdf Change
        const handleFileChange = (e) => {
                const file = e.target.files[0];
                setPdfFile(file);
        };


        //Handle Submit
        const handleSubmit = async (e) => {
                e.preventDefault();
                try {

                        const formData = new FormData();
                        formData.append("name", inputs.name);
                        formData.append("mobile", inputs.mobile);
                        formData.append("internship", inputs.internship);
                        formData.append("qualification", inputs.qualification);
                        formData.append("major", inputs.major);
                        formData.append("college", inputs.college);
                        formData.append("linkedin", inputs.linkedin);
                        formData.append("github", inputs.github);
                        formData.append("file", pdfFile);

                        const response = await axios.post('/api/v1/application/add', formData);
                        const data = response.data;

                        if (data.success) {
                                alert.success(data.message);
                                navigate('/');
                        }
                } catch (error) {
                        if (error.response) {
                                alert.error(error.response.data.message)
                        }
                        else {
                                console.log(`Error in Axios ${error}`);
                        }
                }
        }


        return (
                <div className='container'>
                        <h1>Internship Application Form</h1>

                        <form onSubmit={handleSubmit}>
                                <label>Full Name</label>
                                <input
                                        name='name'
                                        id='name'
                                        type='text'
                                        placeholder='Name'
                                        required
                                        value={inputs.name}
                                        onChange={handleChange}
                                />
                                <label>Mobile Number</label>
                                <input
                                        name='mobile'
                                        id='mobile'
                                        type='number'
                                        required
                                        value={inputs.mobile}
                                        onChange={handleChange}
                                        placeholder='Mobile Number'
                                />
                                <label>Internship Domain</label>
                                <select
                                        name='internship'
                                        id='internship'
                                        type='internship'
                                        required
                                        value={inputs.internship}
                                        onChange={handleChange}
                                        placeholder='Internship Domain'
                                >
                                        <option value="">Choose Internship Domain</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="Java Development">Java Development</option>
                                        <option value="React Developer">React Developer</option>
                                        <option value="MERN Developer">MERN Developer</option>
                                        <option value="React Developer">React Developer</option>
                                        <option value="Campus Ambassador">Campus Ambassador</option>
                                </select>

                                <label>Qualification</label>
                                <select name="qualification"
                                        required
                                        value={inputs.qualification}
                                        onChange={handleChange}
                                >
                                        <option value="">Choose Qualification</option>
                                        <option value="BE">BE</option>
                                        <option value="B.Tech">B.Tech</option>
                                        <option value="M.Tech">M.Tech</option>
                                        <option value="Bsc">Bsc</option>
                                        <option value="Msc">Msc</option>
                                        <option value="Diploma">Diploma</option>

                                </select>
                                <label>Specelization</label>
                                <input
                                        name='major'
                                        id='major'
                                        type='text'
                                        placeholder='Specelization'
                                        required
                                        value={inputs.major}
                                        onChange={handleChange}
                                />
                                <label>College Name</label>
                                <input
                                        name='college'
                                        id='college'
                                        type='text'
                                        placeholder='College Name'
                                        required
                                        value={inputs.college}
                                        onChange={handleChange}
                                />
                                <label>Linkedin Profile Link</label>
                                <input
                                        name='linkedin'
                                        id='linkedin'
                                        type='url'
                                        placeholder='Linkedin profile link'
                                        required
                                        value={inputs.linkedin}
                                        onChange={handleChange}
                                />
                                <label>Github Profile Link</label>
                                <input
                                        name='github'
                                        id='github'
                                        type='url'
                                        placeholder='Github profile link'
                                        required
                                        value={inputs.github}
                                        onChange={handleChange}
                                />
                                <label>Resume</label>
                                <input
                                        name='file'
                                        id='file'
                                        type='file'
                                        required
                                        onChange={handleFileChange}
                                />

                                <button>Apply</button>
                        </form>
                </div>
        )
}

export default InternshipForm