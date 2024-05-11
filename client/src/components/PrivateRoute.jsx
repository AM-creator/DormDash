import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  // changes in the state will trigger a re-render
  const { currentUser } = useSelector((state) => state.user);
  //<Outlet> is a placeholder for child route elements within a parent route
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}
