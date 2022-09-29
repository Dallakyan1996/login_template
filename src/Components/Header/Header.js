import "./Header.css";
import React, { useState, useRef } from "react";
import { apiServices } from "../../services/API";
import { Link } from 'react-router-dom';
import { history } from './../../helpers/history';
import './Header.css';
import { useOutsideClick } from "../../CustomHooks/CustomHooks";
import { getUserInfo } from "../../utils/constants";


const Header = () => {
  const dropDownRef = useRef(null);
  const logout = () => {
    apiServices.logout();
    history.push('/login');
  }

  let [openDropDown, setOpenDropDown] = useState(false)
  useOutsideClick(dropDownRef, setOpenDropDown);


  return (
    <div className="header">

      <Link to='/'>
        <span className="testSpan">Title</span>
      </Link>
      <div className="headerDropDown" ref={dropDownRef} onClick={() => {
        setOpenDropDown(!openDropDown)
      }}>
        <div className="userNameDiv">{getUserInfo()?.user?.name}</div>
        <a
          className="drop"
          href="/#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            className="userImg"
            src="https://a1at.studymonitoring.net/img/undraw_profile.svg"
            alt="user" />
        </a>
        {openDropDown && <div className="dropDownMenu" aria-labelledby="dropdownMenuLink">
          <Link className="" to="/change-password">
            <i className="fa fa-lock logoutIcon"></i>
            Change Password
          </Link>
          <Link className="" to="/login"
            onClick={logout}>
            <i className="fa fa-sign-out fa-2x logoutIcon"></i>
            Logout
          </Link>
        </div>}
      </div>
    </div>
  );
};
export default Header;