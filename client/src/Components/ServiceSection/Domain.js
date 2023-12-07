import React from 'react'
import './DomainStyle.css'
import { useNavigate } from 'react-router-dom'

const Domain = ({ domain }) => {
        const navigate = useNavigate()
        return (

                <div className='domain-box'>
                        <div className='domain-box-img'>
                                <img
                                        alt={domain.role}
                                        src={domain.imageurl}
                                />
                        </div>
                        <h2>{domain.role}</h2>
                        <p>{domain.duration}</p>
                        <p>{domain.location}</p>
                        <button onClick={() => navigate(`/service/${domain._id}`)}>See More</button>
                </div>
        )
}

export default Domain