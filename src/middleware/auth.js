import store from "./../Store/store"
const state = store.getState()

export default function auth({ to, next, store }) {
  // const loginQuery = { path: "/login", query: { redirect: to.fullPath } };
  const loginQuery = { path: "/login"};

  if (!state.auth.authUser) {
    store.dispatch("auth/getAuthUser").then(() => {
      if (!state.auth.authUser) next(loginQuery);
      else next();
    });
  } else {
    next();
  }
}
