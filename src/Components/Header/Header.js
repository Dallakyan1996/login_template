import "./Header.css";
import React from "react";
import { apiServices } from "../../services/API";
import { Link } from 'react-router-dom';
import { history } from './../../helpers/history';
import 'react-dropdown/style.css';
import './Header.css';


const Header = () => {
  const logout = () => {
    apiServices.logout();
    history.push('/login');
  }



  return (
    <div className="header">
      <Link to='/'>
        <span className="testSpan">DLCO</span>
      </Link>
      <div className="dropdown show">
        <a
          className="drop"
          href="/#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >

          {/* <span className="userSpan"> */}
          {/* <span className='userName'>{apiServices.currentUserValue.firstName}</span> */}
          <img
            className="userImg"
            src="https://a1at.studymonitoring.net/img/undraw_profile.svg"
            alt="user" />
          {/* </span> */}
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <Link className="dropdown-item drop-down-a" to="/change-password">
            <i className="fa fa-lock logoutIcon"></i>
            Change Password
          </Link>
          <Link className="dropdown-item drop-down-a" to="/login"
            onClick={logout}>
            <i className="fa fa-sign-out fa-2x logoutIcon"></i>
            Logout
          </Link>
        </div>
      </div>
    </div >
  );
};

export default Header;
