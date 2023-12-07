import React, { Fragment, useEffect, useState } from 'react'
import './UserOptionStyle.css'
import { SpeedDial, SpeedDialAction } from "@material-ui/lab"
import PersonIcon from '@material-ui/icons/Person'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Backdrop } from '@material-ui/core'

import { useAlert } from 'react-alert'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../actions/userAction'

const UserOptions = ({ user }) => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();

    const options = [
        { icon: <ExitToAppIcon />, name: 'Logout', func: logoutUser },
        { icon: <PersonIcon />, name: 'Profile', func: account },
    ]


    function account() {
        navigate('/account');
    }

    function logoutUser() {
        dispatch(logout());
        alert.success("Logout Successfully");
    }

    useEffect(() => {
        if (!user.isAuthenticated) {
            navigate("/login");
        }
    }, [user.isAuthenticated])
    

    return (
        <Fragment>
            <Backdrop open = {open}/>
            <SpeedDial
                ariaLabel='SpeeDial toolip example'
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                direction='left'
                className='speedDial'
                icon = {
                    <img
                        className='speedDialIcon'
                        src='/profile.jpg'
                        alt='Profile'
                    />
                }
            >
                {options.map((item) => (
                    <SpeedDialAction 
                    key={item.name}
                    icon={item.icon} 
                    tooltipTitle={item.name} 
                    onClick={item.func} 
                    className='speedDialAction'
                />
                ))}
            </SpeedDial>
        </Fragment>
    )
}

export default UserOptions