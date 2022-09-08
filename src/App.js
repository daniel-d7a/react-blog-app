import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </div>
  );
}

export default App;
