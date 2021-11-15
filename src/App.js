import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home';
import Explore from './Components/Explore/Explore';
import PurchaseOrder from './Components/PurchaseOrder/PurchaseOrder';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    <div >
      <AuthProvider>
        <Router>

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path='/purchaseOrder/:id'>
              <PurchaseOrder></PurchaseOrder>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>

          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
