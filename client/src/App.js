import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home.jsx"
import About from "./containers/About/About.jsx"
import Products from "./containers/Products/Products.jsx"
import Contact from "./containers/Contact/Contact.jsx"
import ProductDetails from "./containers/ProductDetails/ProductDetails.jsx"
import Admin from "./containers/Admin/Admin.jsx"
import NewProduct from "./containers/NewProduct/NewProduct.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/products/:id" component={ProductDetails}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/admin/new-product" component={NewProduct}></Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
