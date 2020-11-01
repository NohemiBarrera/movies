import "./App.css";
import Facebook from "./components/Login/Facebook";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Container from "@material-ui/core/Container";
import { ROOT_URL, LOGIN_URL, FAVORITE_MOVIES, PROFILE } from "./urls";
import Movies from "./components/Movies/Movies";
import Favorites from "./components/Movies/Favorites";
import Profile from "./components/Profile/Profile";
import Error404 from "./components/Common/404";
import PrivateRoute from "./components/Common/PrivateRoute";

function App(props) {
  return (
    <Provider store={store}>
      <Container maxWidth="xl" fixed="true" style={{ backgroundColor: '#f5f5f5', height: '100vh' }}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <PrivateRoute exact path={ROOT_URL} component={Movies} />
            <Route exact path={LOGIN_URL} component={Facebook} />
            <PrivateRoute exact path={FAVORITE_MOVIES} component={Favorites} />
            <PrivateRoute exact path={PROFILE} component={Profile}/>
            <Route
              component={Error404}
            />
          </Switch>
        </BrowserRouter>
      </Container>
    </Provider>
  );
}

export default App;
