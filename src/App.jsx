import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Diary from "./components/diary";
import Footer from "./components/footer";
import DiaryEntry from "./components/diaryentry";
import { UserProvider } from "./components/context";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/diaryentry" element={<DiaryEntry />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
