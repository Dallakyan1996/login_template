import { BiBarChart, BiRocket, BiVial } from "react-icons/bi";
// import s from "./side_bar.module.css"
import s from "./../Header/header.module.css"

export const side_bar_arr = [
    {
        name: "Dashboard",
        icon: <svg stroke="currentColor" fill="currentColor" className={s.menuItemIcons} strokeWidth="0"
            viewBox="0 0 16 16"
            height=".9em" width=".9em" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6 1H1v3h5V1zM1 0a1 1 0 00-1 1v3a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 00-1 1v3a1 1 0 001 1h5a1 1 0 001-1v-3a1 1 0 00-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 00-1 1v7a1 1 0 001 1h5a1 1 0 001-1V8a1 1 0 00-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 00-1 1v7a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1h-5z" 
            clipRule="evenodd">
            </path>
        </svg>,
        route: "/"
    },
    {
        name: "Summary",
        icon: <BiVial className={s.menuItemIcons} />,
        route: "/line"
    },
    {
        name: "Charts",
        icon: <BiBarChart className={s.menuItemIcons} />,
        route: "/charts"
    }
]