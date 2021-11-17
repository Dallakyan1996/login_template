import "./SideBar.css";
import { NavLink } from 'react-router-dom';
import { FaChartBar, FaUserFriends, FaRegFilePdf, FaUserPlus, FaUserMinus, FaChartLine } from "react-icons/fa";
import algorithmPDF from "./../../Assets/PDF/CFU_Description_v0.13_06-Oct-2021.pdf"

const SideBar = () => {
    return <>
        <nav className="main-menu">
            <ul className="sideBarItemsUl">
                <li className="dashboard">
                    <NavLink exact activeClassName="active" to="/">
                        <FaChartBar className="sideBarIcons" />
                        <span className='nav-text'>
                            Dashboard
                        </span>
                    </NavLink>
                </li>
                <li className="has-subnav search">
                    <NavLink exact activeClassName="active" to="/line">
                        <FaChartLine className="sideBarIcons" />
                        <span className='nav-text'>
                            Line graph
                        </span>
                    </NavLink>
                </li>
                <li className="has-subnav usersListEnable">
                    <NavLink activeClassName="active" to="/users-list">
                        <FaUserFriends className="sideBarIcons" />
                        <span className='nav-text'>
                            Users List
                        </span>
                    </NavLink>
                </li>
                <li className="has-subnav usersListEnable">
                    <NavLink activeClassName="active" to="/create-user">
                        <FaUserPlus className="sideBarIcons" />
                        <span className='nav-text'>
                            Create Request
                        </span>
                    </NavLink>
                </li>
                <li className="has-subnav usersListEnable">
                    <NavLink activeClassName="active" to="/revoke-user">
                        <FaUserMinus className="sideBarIcons" />
                        <span className='nav-text'>
                            Revoke Request
                        </span>
                    </NavLink>
                </li>
                <li className="has-subnav usersListEnable">
                    <NavLink activeClassName="active" target="_blank" to={algorithmPDF}>
                        <FaRegFilePdf className="sideBarIcons" />
                        <span className='nav-text'>
                            Algorithm Description
                        </span>
                    </NavLink>
                </li>
                {/* <li className="has-subnav usersListEnable">
                    <NavLink activeClassName="active"
                        to='/create-user-request'>
                        <FaRegFilePdf className="sideBarIcons" />
                        <span className='nav-text'>
                            create
                        </span>
                    </NavLink>
                </li> */}
                {/* <li className="has-subnav notifications">
                    <FaBell className="sideBarIcons" />
                    <span className='nav-text'>
                        Notifications
                    </span>
                </li> */}
            </ul>
        </nav>
    </>
}

export default SideBar;