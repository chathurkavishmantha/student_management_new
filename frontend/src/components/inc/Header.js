import React, { Fragment } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import HeaderLogo from '../css/img/Home_Construction_logo_White.png';
import UserImage from '../css/img/male_default.jpg';
import { connect } from 'react-redux';
import cookie from 'js-cookie';
import {FaBell} from 'react-icons/fa';


//Routes
import ListEmployteeComponent from '../ListEmployteeComponent';



function Header(props) {


    


        return (
                <header>
                        <nav className="fire_gradient navbar navbar-expand-md navbar-dark text-light shadow">
                            <div className="container">
                                <Link to="/" className="navbar-brand text-white"><img className="header_image" src={HeaderLogo} alt="" /> Home Construction</Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarResponsive">
                                        <ul className="navbar-nav ml-auto float-right text-right">
                                            <li className="nav-item">
                                                <Link className="nav-link text-white" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white" to="/about">About</Link>
                                            </li>
                                            {
                                                !props.loggedIn ? 
                                                (<Fragment>
                                                <li className="nav-item">
                                                    <Link className="nav-link text-white" to="/login">Login</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link text-white" to="/register_mainpage">Register</Link>
                                                </li>
                                                </Fragment>)
                                                :
                                
                                                (<Fragment>
                                                <li className="nav-item">
                                                    <Link className="nav-link text-white" to="/#" >Logout</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#"><FaBell className="notifi_icon"/></Link>
                                                </li>
                                                <li className="nav-item nav-user-img">
                                                    {/* <Link to="#"><img src={UserImage} className="nav-bar-user-img" alt="" /></Link> */}
                                                    <div className="dropdown dropDown_sizing">
                                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <img src={UserImage} className="nav-bar-user-img" alt="" />
                                                        </button>
                                                        <div className="dropdown-menu dropDown_menu_sizing" aria-labelledby="dropdownMenu2">
                                                            <Link className="dropdown-item btn-sm text-right text-sm" type="button" to="/UserProfile">Dashboard</Link>
                                                            <a className="dropdown-item btn-sm text-right" type="button" >Logout</a>
                                                        </div>
                                                    </div>
                                                </li></Fragment>)
                                            }  
                                                                                                               
                                        </ul>
                                    </div>
                            </div>
                        </nav>
                        {props.children}
                        <div>
                            <Switch>
                            
                                <Route exact path="/" component={ListEmployteeComponent}/>
                                    
                                    

                            </Switch>
                        </div>
                </header>
           
        );
}




export default Header;