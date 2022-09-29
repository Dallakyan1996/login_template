import PageNotFound from "../Components/PageNotFound/PageNotFound";
import RulesComponent from "../Components/RulesPage/RulesComp";

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