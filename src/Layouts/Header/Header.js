import React, { useState, useRef } from "react";
import { NavLink } from 'react-router-dom';
import { history } from '../../Helpers/helpers';
import { useOutsideClick } from "../../CustomHooks/CustomHooks";
import { BiLogIn, BiLockAlt } from "react-icons/bi";
import { accessToken } from "../../Utils/constants";
import AuthService from "../../Services/AuthService";
import { changePassActionsType } from "../../Reducers/actions-type";
import s from './header.module.css';
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dropDownRef = useRef(null);
  const state = useSelector(state => state)
  const dispatch = useDispatch();
  const { CHANGE_PASSWORD_OPEN } = changePassActionsType
  const logout = async () => {
    await AuthService.logout()
    localStorage.removeItem(accessToken)
    history?.push("/login")

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
        <div className={s.userNameDiv}>{state?.auth?.user?.name}</div>
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
          <div className={s.navLink} style={{
            cursor: "pointer"
          }} onClick={() => {
            dispatch({
              type: CHANGE_PASSWORD_OPEN
            })
          }}>
            <BiLockAlt />
            <span>Change Password</span>
          </div>
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