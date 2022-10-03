
import React, { useState, useRef } from "react";
import { apiServices } from "../../services/API";
import { NavLink } from 'react-router-dom';
import { history } from './../../helpers/history';
import s from './header.module.css';
import { useOutsideClick } from "../../CustomHooks/CustomHooks";
import { getUserInfo } from "../../utils/constants";
import { BiLogIn, BiLockAlt } from "react-icons/bi";

const Header = () => {
  const dropDownRef = useRef(null);
  const logout = () => {
    apiServices.logout();
    history.push('/login');
  }

  let [openDropDown, setOpenDropDown] = useState(false)
  useOutsideClick(dropDownRef, setOpenDropDown);


  return (
    <div className={s.header}>
      <NavLink className={s.navLink} to='/'>
        <span className={s.testSpan}>Title</span>
      </NavLink>
      <div className={s.headerDropDown} ref={dropDownRef} onClick={() => {
        setOpenDropDown(!openDropDown)
      }}>
        <div className={s.userNameDiv}>{getUserInfo()?.user?.name}</div>
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
            className={s.userImg}
            src="https://a1at.studymonitoring.net/img/undraw_profile.svg"
            alt="user" />
        </a>
        {openDropDown && <div className={s.dropDownMenu} aria-labelledby="dropdownMenuLink">
          <NavLink className={s.navLink} to="/change-password">
            <BiLockAlt />
            <span>Change Password</span>
          </NavLink>
          <NavLink className={s.navLink} to="/login"
            onClick={logout}>
            <BiLogIn />
            <span> Logout</span>
          </NavLink>
        </div>}
      </div>
    </div>
  );
};
export default Header;