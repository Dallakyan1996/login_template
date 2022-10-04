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
        path: null,
        component: <PageNotFound />
    }
]