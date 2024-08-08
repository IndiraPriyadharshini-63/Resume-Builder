import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CheckSelectedId from "./components/CheckSelectedId";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import "./components/Navbar.css";
import FillDetails from "./pages/FillDetails";
import MyResumes from "./pages/MyResumes";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route
            path="/template/FillDetails"
            element={
              <CheckSelectedId>
                <FillDetails />
              </CheckSelectedId>
            }
          ></Route>
          <Route path="/my-resumes" element={<MyResumes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
