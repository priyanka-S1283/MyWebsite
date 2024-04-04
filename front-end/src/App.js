import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Register from './Components/Register';
import Product from './Components/Product';
import Product2 from './Components/Product2';
function App() {
  return (
    <div className="App">
      <Router >
        <>
        <Link to ="/" />
        <Link to ="/AboutUs" />
        <Link to = "/Register" />
        <Link to ="/Product"/>
        <Link to ="/Product2"/>
        <Routes>
          <Route path = "/" element ={<Home/>}/>
          <Route path = "/AboutUs" element ={<AboutUs/>}/>
          <Route path = "/Register" element={<Register/>}/>
          <Route path = "/Product" element={<Product/>}/>
          <Route path = "/Product2" element={<Product2/>}/>
        </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
