import { FaChartBar, FaChartLine } from "react-icons/fa";

export const side_bar_arr = [
    {
        name: "Dashboard",
        icon: <FaChartBar className="sideBarIcons" />,
        route: "/"
    },
    {
        name: "Summary",
        icon: <FaChartLine className="sideBarIcons" />,
        route: "/line"
    }
]