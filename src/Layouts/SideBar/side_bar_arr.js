import { FaChartBar, FaChartLine } from "react-icons/fa";
import s from "./side_bar.module.css"

export const side_bar_arr = [
    {
        name: "Dashboard",
        icon: <FaChartBar className={s.sideBarIcons}/>,
        route: "/"
    },
    {
        name: "Summary",
        icon: <FaChartLine className={s.sideBarIcons}/>,
        route: "/line"
    }
]