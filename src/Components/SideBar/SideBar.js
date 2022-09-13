import "./SideBar.css";
import { NavLink } from 'react-router-dom';
import { FaChartBar, FaChartLine } from "react-icons/fa";

const SideBar = () => {
    return <>
        <nav className="main-menu">
            <ul className="sideBarItemsUl">
                <li className="dashboard">
                    <NavLink exact activeClassName="active" to="/">
                        <FaChartBar className="sideBarIcons" />
                        <span className='nav-text'>
                            Rules
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
            </ul>
        </nav>
    </>
}

export default SideBar;