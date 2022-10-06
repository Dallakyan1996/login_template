import { useSelector } from "react-redux";
import AuthService from "../Services/AuthService";

const state = useSelector(state=>state)

export default function auth({ to, next, store }) {
  // const loginQuery = { path: "/login", query: { redirect: to.fullPath } };
  const loginQuery = { path: "/login"};

  if (!state.auth.authUser) {
    AuthService.getAuthUser().then(() => {
      if (!state.auth.authUser) next(loginQuery);
      else next();
    });
  } else {
    next();
  }
}
