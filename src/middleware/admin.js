import store from "./../Store/store"
const state = store.getState()
export default function admin({ next, store }) {
  if (state.auth.isAdmin) next();
  else next({ name: "notFound" });
}
