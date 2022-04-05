import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import {PostList, Login, Signup} from "../pages";
import { Header } from "../components";
import { Grid } from "../elements";

function App() {
  return (
    <Grid>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </BrowserRouter>
    </Grid>
  );
}

export default App;
