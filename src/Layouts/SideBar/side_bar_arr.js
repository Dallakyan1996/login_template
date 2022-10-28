import { BiBarChart, BiRocket, BiVial } from "react-icons/bi";
import s from "./side_bar.module.css"

export const side_bar_arr = [
    {
        name: "Dashboard",
        icon: <BiRocket className={s.sideBarIcons} />,
        route: "/"
    },
    {
        name: "Summary",
        icon: <BiVial className={s.sideBarIcons} />,
        route: "/line"
    },
    {
        name: "Charts",
        icon: <BiBarChart className={s.sideBarIcons} />,
        route: "/charts"
    }
]