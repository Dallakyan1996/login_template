import { NavLink } from 'react-router-dom';
import { side_bar_arr } from "./side_bar_arr";
import "./SideBar.css";

const SideBar = () => {
    return <>
        <nav className="main-menu">
            <ul className="sideBarItemsUl">
                {side_bar_arr.map(item => {
                    return <li key={item.route} className="dashboard">
                        <NavLink exact activeClassName="active" to={item.route}>
                            {item.icon}
                            <span className='nav-text'>
                                {item.name}
                            </span>
                        </NavLink>
                    </li>
                })}
            </ul>
        </nav>
    </>
}

export default SideBar;