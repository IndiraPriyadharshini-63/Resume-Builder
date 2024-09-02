import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CheckSelectedId from "./components/CheckSelectedId";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/Navbar";
import FillDetails from "./pages/fillDetails/FillDetails";
import MyResumes from "./pages/myResumes/MyResumes";

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
