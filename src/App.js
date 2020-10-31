import "./App.css";
import Facebook from "./components/Login/Facebook";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Container from "@material-ui/core/Container";
import {ROOT_URL, LOGIN_URL} from "./urls";
import Movies from "./components/Movies/Movies";
import PrivateRoute from "./components/Common/PrivateRoute";

function App(props) {
  return (
    <Provider store={store}>
       <Container maxWidth="xl" fixed="true">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <PrivateRoute
              exact
              path={ROOT_URL}
              component={Movies}
            />
            <Route exact path={LOGIN_URL} component={Facebook} />
          </Switch>
      </BrowserRouter>
      </Container>
    </Provider>
  );
}

export default App;
