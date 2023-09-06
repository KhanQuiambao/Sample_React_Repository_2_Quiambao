import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import ClassState from "./pages/ClassState";
import FunctionalState from "./pages/FunctionalState";
import BasicFormHandling from "./pages/BasicFormHandling";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
          <Route path="/classState" element={<ClassState/>}></Route>
          <Route path="/functionalUseState" element={<FunctionalState/>}></Route>
          <Route path="/basicFormHandling" element={<BasicFormHandling/>}></Route>
        </Routes>
      </BrowserRouter>
      
      <h1 className="text-danger">Hello World</h1>
    </>
  );
}

export default App;
