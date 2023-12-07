import React, { useState } from 'react'
import './NavbarStyle.css'
// import { NavbarItems } from "./NavbarItems"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"





const Navbar = () => {

        const {isAuthenticated,user} = useSelector(state =>state.user)
        const NavbarItems = [
                {
                        titile: "Home",
                        url: "/",
                        cName: "nav-links"
                },
                {
                        titile: "Internship",
                        url: "/service",
                        cName: "nav-links"
                },
                {
                        titile: "About",
                        url: "/about",
                        cName: "nav-links"
                },
                {
                        titile: "Contact",
                        url: "/contact",
                        cName: "nav-links"
                },
                {
                        titile: isAuthenticated ? user.name : "Login",
                        url: isAuthenticated ? "/account" : "/login",
                        cName: "nav-links"
                }

        ]
        if(isAuthenticated){
                NavbarItems.splice( 1,0,
                        {
                                titile: "My Application",
                                url: "/my-application",
                                cName: "nav-links"
                        }
                ) 
        }
        const [clicked, setClicked] = useState(false)

        const handleClicked = () => {
                setClicked(!clicked)
        }

        return (
                <nav className='navbar'>
                        <h4 className='nav-logo'>

                                Edunexx

                        </h4>

                        <div className='nav-icons' onClick={handleClicked}>
                                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                        <ul className={clicked ? "nav-menu active" : "nav-menu"} >

                                {NavbarItems.map((item, index) => {
                                        return (
                                                <li key={index} className={item.cName}>
                                                        <Link to={item.url}>{item.titile}</Link>
                                                </li>
                                        )
                                })}
                        </ul>
                </nav>
        )
}


// class Navbar extends Component {


//         state = { clicked: false };
//         handleClicked = ()=>{
//                 this.setState({clicked : !this.state.clicked})
//         }
//         render() {


//         // // const store =prop.isLogin
//         // //global state
//         // const isLogin = useSelector((state) =>state.isLogin);
//         // console.log("store");

//         }
// }


export default Navbar