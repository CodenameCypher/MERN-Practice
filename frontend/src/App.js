// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";

// components
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
