import React, { Fragment, useEffect } from 'react'
import './ProfileStyle.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
import { logout } from '../../actions/userAction'
import { useAlert } from 'react-alert'
import MyApplicationSection from '../MyApplicationSection/MyApplicationSection'

const Profile = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();

    const {loading, user, isAuthenticated } = useSelector(state => state.user);


    function logoutUser() {
        dispatch(logout())
        alert.success("Logout Successfully!")

    }


    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [navigate, isAuthenticated])


    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment >
                    <div className='profile-main'>
                        <div className='profile-top'>
                            <button onClick={() => navigate('/')}>Back to home</button>
                            <button onClick={logoutUser}>Logout</button>
                        </div>

                        <div className='profile-bottom'>
                            <div className='bottom-left'>
                                <h1>My Profile</h1>
                                <div className='bottom-left-inner'>
                                    <h4>Full Name : </h4>
                                    <p>{user!=null && user.name}</p>
                                </div>
                                <div className='bottom-left-inner'>
                                    <h4>Email : </h4>
                                    <p> { user!=null && user.email}</p>
                                </div>
                                <div className='bottom-left-inner'>
                                    <h4>Joined Date : </h4>
                                    <p>{user!=null && String( user.createdAt).substring(0, 10)}</p>
                                </div>


                            </div>
                            <div className='bottom-right'>
                                <h1>My Application</h1>
                                <MyApplicationSection
                                    c1Name="profile-application"
                                    c2Name="profile-main-1"
                                    c4Name="profile-main-1-2"
                                    para="User not applied"
                                    email={user!=null && user.email} />

                            </div>
                        </div>
                    </div>
                </Fragment>
            )
            }
        </Fragment >
    )
}

export default Profile