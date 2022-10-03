import { NavLink } from 'react-router-dom';
import { side_bar_arr } from "./side_bar_arr";
import s from "./side_bar.module.css";

const SideBar = () => {
    return <>
        <nav className={s.mainMenu}>
            <ul className={s.sideBarItemsUl}>
                {side_bar_arr.map(item => {
                    return <li key={item.route} className={s.menuItemLi}>
                        <NavLink exact activeClassName={s.active} className={s.navLink} to={item.route}>
                            {item.icon}
                            <span className={s.navText}>
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