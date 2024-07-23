import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import { BrowserRouter , Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateResume from "./components/CreateResume";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route path="/create-resume" element={<CreateResume />}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
