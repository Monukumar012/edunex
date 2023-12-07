import React, { Fragment, useEffect, useState } from 'react'
import './ServiceDeatilsSectionStyle.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

import { getDomainDetails } from '../../actions/domainAction'
import Loader from '../Loader/Loader';


const ServiceDeatilsSection = () => {

    const [dataLoaded, setDataLoaded] = useState(false);
    const alert = useAlert()

    const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch()
    const { domain } = useSelector((state) => state.domainDetails)
    useEffect(() => {
        dispatch(getDomainDetails(id))
        .then(() => {
            setDataLoaded(true);
        })
        .catch((error) => {
            setDataLoaded(true);
            console.error('Error fetching domain details:', error);
            return alert.error(error)
        });
    }, [dispatch,id,alert])


    
    


    return (

        <Fragment>
            {!dataLoaded ? <Loader /> :

                <Fragment>
                    <div className='main'>

                        <div className='main-1'>
                            <h1>{domain.role}</h1>
                            <div className='main-1-1'>
                                <p>Duration : {domain.duration}</p>
                                <p>Location : {domain.location}</p>
                            </div>
                            <button onClick={() => navigate(`/internship`)}>Apply</button>
                        </div>
                        <div className='main-2'>
                            <h2>Minimum qualifications</h2>
                            <ul >

                                {domain.minQualifications.map((item, i) => {
                                    return (
                                        <li key={i} >
                                            {item}
                                        </li>
                                    )
                                })}
                            </ul>

                            <h2>Responsibilities</h2>
                            <ul >

                                {domain.responsibilities.map((item, i) => {
                                    return (
                                        <li key={i} >
                                            {item}
                                        </li>
                                    )
                                })}
                            </ul>

                            <h2>Skills Required</h2>
                            <ul >

                                {domain.skills.map((item, i) => {
                                    return (
                                        <li key={i} >
                                            {item}
                                        </li>
                                    )
                                })}
                            </ul>

                        </div>

                    </div>
                </Fragment>

            }
        </Fragment>
    )
}

export default ServiceDeatilsSection