import ParallerChart from "../Components/Charts/ParallerChart";
// import PieChart from "../Components/Charts/PieChart";
// import LineChart from "../Components/Charts/LineChart";
import ChangePassword from "../Pages/ChangePassword/ChangePassword";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import RulesComponent from "../Pages/RulesPage/RulesComp"

export const routes_arr = [
    {
        path: "/",
        exact: true,
        component: <RulesComponent />
    },
    {
        path: "/line",
        exact: true,
        component: <div>Test</div>
    },
    {
        path: "/change-password",
        exact: true,
        component: <ChangePassword />
    },
    {
        path: "/charts",
        exact: true,
        component: <ParallerChart/>
    },
    {
        path: null,
        component: <PageNotFound />
    }
]