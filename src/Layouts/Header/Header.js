import React, { useState, useRef } from "react";
import { NavLink } from 'react-router-dom';
import { history } from '../../Helpers/helpers';
import { useOutsideClick } from "../../CustomHooks/CustomHooks";
import { BiLogIn, BiLockAlt, BiInfoCircle, BiChevronDown } from "react-icons/bi";
import { accessToken } from "../../Utils/constants";
import AuthService from "../../Services/AuthService";
import { changePassActionsType } from "../../Reducers/actions-type";
import s from './header.module.css';
import heamoneticsLogo from "./../../Assets/images/Haemonetics.png"
import { useDispatch, useSelector } from "react-redux";
import { side_bar_arr } from "../SideBar/side_bar_arr";

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
      <div className={s.logoDiv}>
        <img
          className={s.heamoneticsLogo}
          src={heamoneticsLogo}
          alt="user" />
        <span style={{
          color: "#172B4D",
          fontWeight: "700",
          paddingRight: "1rem"
        }}>
          TP-CLN-100503
        </span>
      </div>
      <div className={s.menuSide}>
        <ul className={s.menuItemsUl}>
          {side_bar_arr.map((item, index) => {
            return <li key={item.route} className={s.menuItemLi}>
              <NavLink exact
                activeClassName={index ? s.active : s.firstActive}
                className={s.navLink} to={item.route}>
                {item.icon}
                <span className={s.navText}>
                  {item.name}
                </span>
              </NavLink>
            </li>
          })}
        </ul>
        <div className={s.headerDropDown}>
          <div className={s.helpDiv}>
            <BiInfoCircle />
            <span>Help</span>
          </div>
          <div style={{
            display: "flex"
          }} ref={dropDownRef} onClick={() => {
            setOpenDropDown(!openDropDown)
          }}>
            <div className={s.userNameDiv}>{state?.auth?.user?.name}</div>
            <BiChevronDown />
            <a
              className="drop"
              href="/#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
            </a>
            {openDropDown && <div className={s.dropDownMenu} aria-labelledby="dropdownMenuLink">
              <div className={s.navLinkDropDow}
                style={{
                  cursor: "pointer"
                }}
                onClick={() => {
                  dispatch({
                    type: CHANGE_PASSWORD_OPEN
                  })
                }}>
                <BiLockAlt />
                <span>Change Password</span>
              </div>
              <NavLink className={s.navLinkDropDow} to="/login"
                onClick={logout}>
                <BiLogIn />
                <span> Logout</span>
              </NavLink>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;