import React, { Fragment, useEffect, useState } from 'react'
import './ApplicationDeatilsSectionStyle.css'

import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

import { getApplicationDetails } from '../../actions/applicationAction'
import Loader from '../Loader/Loader';





const ApplicationDeatilsSection = () => {

    const [dataLoaded, setDataLoaded] = useState(false);
    const alert = useAlert()
    const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch()

    const { application } = useSelector((state) => state.applicationDetails)
    useEffect(() => {
        dispatch(getApplicationDetails(id))
            .then(() => {
                setDataLoaded(true);
            })
            .catch((error) => {
                setDataLoaded(true);
                console.log('Error fetching domain details:', error);
                return alert.error(error)
            });
    }, [dispatch, id, alert])



    return (
        <Fragment>
            {!dataLoaded ? <Loader /> :

                <Fragment>
                    <div className='main'>

                        <div className='main-1'>
                            <p>Role : {application.internship}</p>
                            <p>Applied Date : {application.createdAt.substring(0,10)}</p>
                        </div>
                        <div className='main-2'>

                            <p>Offer Letter : {application.status}</p>
                            <p>Your Tasks : {application.status}</p>
                            <p>Task Submission : {application.status}</p>
                            <p>Internship Completion Certificate: {application.status}</p>

                        </div>

                    </div>
                </Fragment>

            }
        </Fragment>
    )
}

export default ApplicationDeatilsSection