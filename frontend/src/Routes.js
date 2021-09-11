import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import SignUp from "./pages/SignUp.js";
import { useCookies } from "react-cookie";
import instance from "./helpers/axiosConfig";

const ProtectedRoute = ({ ...props }) => {
  const [cookies] = useCookies([]);
  const token = cookies["x-access-token"];
  const userId = cookies["user-id"];
  if (cookies["x-access-token"]) {
    instance.defaults.headers.common["x-access-token"] = token;
    instance.defaults.headers.common["user-id"] = userId;
    return <Route {...props} />;
  }
  return <Redirect to="/" />;
};

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/home" component={Home} />
        <ProtectedRoute path="/settings">
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path="/sign-up">
          <SignUp />
        </ProtectedRoute>
        <ProtectedRoute path="/search">
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path="/pet-info">
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path="/pet-locale">
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path="/pet-add">
          <Home />
        </ProtectedRoute>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
