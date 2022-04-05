import "./App.css";
import { useEffect } from "react";

import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";

import { PostList, Login, Signup } from "../pages";
import { Header } from "../components";
import { Grid } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "./firebase";

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = !!sessionStorage.getItem(_session_key);

  useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <Grid>
      <Header />
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </ConnectedRouter>
    </Grid>
  );
}

export default App;
