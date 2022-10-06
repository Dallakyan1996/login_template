import { useSelector } from "react-redux";

const state = useSelector(state => state)

export default function admin({ next, store }) {
  if (state.auth.isAdmin) next();
  else next({ name: "notFound" });
}
