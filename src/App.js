// import Home from "./pages/Home";
import Video from "./pages/Video";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos/:videoId" element={<Video />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
