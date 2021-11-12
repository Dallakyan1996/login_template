import "./Header.css";
import React from "react";
import { authenticationService } from "../../services/API";
import { Link } from 'react-router-dom';
import { history } from './../../helpers/history';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Header.css';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

const Header = () => {
  const logout = () => {
    authenticationService.logout();
    history.push('/login');
  }

  const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two', className: 'myOptionClassName' },
    {
      type: 'group', name: 'group1', items: [
        { value: 'three', label: 'Three', className: 'myOptionClassName' },
        { value: 'four', label: 'Four' }
      ]
    },
    {
      type: 'group', name: 'group2', items: [
        { value: 'five', label: 'Five' },
        { value: 'six', label: 'Six' }
      ]
    }
  ];

  return (
    <div className="header">
      <Link to='/'>
        <span className="testSpan">DCR-A1AT-201: Conditional Follow-Up Portal</span>
      </Link>
      {/* <div className="fakeDataInfo">
        Please note that this is a test data for UAT.
      </div> */}
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
          {/* <span className='userName'>{authenticationService.currentUserValue.firstName}</span> */}
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
