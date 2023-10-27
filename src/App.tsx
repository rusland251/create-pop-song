import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import HeaderMenu from "./components/Header/Header";

function App() {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
