import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Navbar from '../src/pages/Home/Navbar/Navbar'
import Footer from './pages/Footer/Footer';
import Packages from './pages/Packages/Packages';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './pages/Context/AuthProvider';
import Error from './pages/404 Error/Error';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import MyOrders from './pages/MyOrders/MyOrders';
import ManageAllOrders from './pages/ManageAllOrders/ManageAllOrders';
import BookOrder from './pages/BookOrder/BookOrder';
import AddaNewPackage from './pages/AddaNewPackage/AddaNewPackage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          {/* navbar */}

          <Navbar></Navbar>
          {/* home */}

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            {/* home */}

            <Route exact path="/home">
              <Home></Home>
            </Route>

            {/* packages */}

            <PrivateRoute exact path="/packages">
              <Packages></Packages>
            </PrivateRoute>

            {/* my orders */}
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            {/* manage all orders */}
            <PrivateRoute exact path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            {/* add a new package */}
            <PrivateRoute exact path="/addAnewPackage">
              <AddaNewPackage></AddaNewPackage>
            </PrivateRoute>

            {/* book order */}
            <PrivateRoute exact path="/bookOrder/:id">
              <BookOrder></BookOrder>
            </PrivateRoute>


            {/* packages */}

            <Route exact path="/contact">
              <Contact></Contact>
            </Route>


            {/* about us */}

            <Route exact path="/about">
              <About></About>
            </Route>


            {/* Login */}

            <Route exact path="/login">
              <Login></Login>
            </Route>


            {/* Register */}

            <Route exact path="/register">
              <Register></Register>
            </Route>

            {/* 404 error */}
            <Route exact path="*">
              <Error></Error>
            </Route>

          </Switch>

          {/* footer */}
          <Footer></Footer>

        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
