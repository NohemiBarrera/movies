import "./App.css";
import LoginFacebook from "./components/Login/LoginFacebook";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Container from "@material-ui/core/Container";
import {
  ROOT_URL,
  LOGIN_URL,
  FAVORITE_MOVIES,
  PROFILE,
  MOVIE_DETAIL,
} from "./urls";
import Movies from "./components/Movies/Movies";
import Favorites from "./components/Movies/Favorites";
import Profile from "./components/Profile/Profile";
import Detail from "./components/Movies/Detail";
import Error404 from "./components/Common/404";
import PrivateRoute from "./components/Common/PrivateRoute";

function App(props) {
  return (
    <Provider store={store}>
      <Container maxWidth="xl" fixed="true">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path={LOGIN_URL} component={LoginFacebook} />
            <PrivateRoute exact path={ROOT_URL} component={Movies} />
            <PrivateRoute exact path={MOVIE_DETAIL} component={Detail} />
            <PrivateRoute exact path={FAVORITE_MOVIES} component={Favorites} />
            <PrivateRoute exact path={PROFILE} component={Profile} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </Container>
    </Provider>
  );
}

export default App;
