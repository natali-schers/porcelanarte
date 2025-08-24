import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "components/Footer/footer";
import Layout from "components/Layout";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navigation />
       <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="/posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;