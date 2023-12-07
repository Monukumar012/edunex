import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import MyApplicationSection from '../Components/MyApplicationSection/MyApplicationSection'
import { useSelector } from "react-redux"


const MyApplication = () => {
  const {user } = useSelector(state => state.user)
  return (
    <>
      <Navbar />

      <MyApplicationSection

        c1Name="main-application"
        c2Name="main-1"
        c4Name="main-1-2"
        heading1="My Applications"
        para="User not applied"

        email={user.email} />

    </>
  )
}

export default MyApplication