import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>Ops... Página não encontrada :(</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;