import "./App.css";

import {ConnectedRouter} from "connected-react-router";
import { Route } from "react-router-dom";
import {history} from "../redux/configureStore";

import {PostList, Login, Signup} from "../pages";
import { Header } from "../components";
import { Grid } from "../elements";

function App() {
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
