import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateResume from "./components/CreateResume";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import "./components/Navbar.css";
import Templates from "./components/resume templates/Templates";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-resume" element={<CreateResume />}></Route>
          <Route path="/templates" element={<Templates />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
