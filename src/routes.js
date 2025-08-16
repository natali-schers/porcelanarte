import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "components/Footer/footer";
import Layout from "components/Layout";
import Post from "pages/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts/:id" element={<Post/>} />
        </Route>

        <Route path="*" element={<div>Ops... Página não encontrada :(</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;