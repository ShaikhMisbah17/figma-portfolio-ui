import "./App.css";
import Home from "./container/Home";
import Blog from "./container/Blog";
import Work from "./container/Work";
import WorkDetail from "./container/WorkDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="work" element={<Work />} />
        <Route path="work-detail" element={<WorkDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
