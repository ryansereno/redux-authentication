import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector, useDispatch, connect } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => {
    return state.auth.isAuthenticated;
  });
  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
