import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateResume from "./components/CreateResume";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import "./components/Navbar.css";
import Template1 from "./Templates/Template1";
import CheckSelectedId from "./components/CheckSelectedId";
import FillDetails from "./pages/FillDetails";
import MyResumes from "./pages/MyResumes";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-resume" element={<CreateResume />}></Route>
          <Route path="/templates" element={<Template1 />}></Route>
          <Route path="/template/FillDetails" element={
            <CheckSelectedId>
              <FillDetails />
            </CheckSelectedId>
          }></Route>
          <Route path="/my-resumes" element={<MyResumes />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
