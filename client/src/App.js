import SignUp from "./components/SignUp/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Home/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import Nav from "./components/Nav";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import MyBoard from "./components/Dashboard/MyBoard";
import Write from "./components/Write/Write";
import Cover from "./components/Container/Cover";
import Tags from "./components/Tags/Tags";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Nav></Nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/myboard" component={MyBoard} />
            <PrivateRoute path="/write" component={Write} />
            <Route path="/blogs/:title" component={Cover} />
            <Route path="/tags/:title" component={Tags} />
          </Switch>
          <Footer></Footer>
        </Router>{" "}
      </AuthProvider>
    </>
  );
}

export default App;
