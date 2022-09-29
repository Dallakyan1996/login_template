export default function auth({ to, next, store }) {
  // const loginQuery = { path: "/login", query: { redirect: to.fullPath } };
  const loginQuery = { path: "/login"};

  if (!store.getters["auth/authUser"]) {
    store.dispatch("auth/getAuthUser").then(() => {
      if (!store.getters["auth/authUser"]) next(loginQuery);
      else next();
    });
  } else {
    next();
  }
}
