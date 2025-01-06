import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from './Pages/HomePage/Home';
import Portfolio from "./Pages/PortfolioPage/Portfolio";
import Blogs from "./Pages/BlogPage/Blog";
import BlogDetail from "./Pages/BlogDetailPage/BlogDetail";
import Contact from "./Pages/ContactPage/Contact";
import ProjectDetail from './Pages/ProjectDetailPage/ProjectDetail';


function App() {
  return (
    <>
      {/* Ensure this is part of your layout */}
      <Outlet />
    
    </>
  );
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="blogdetail" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projectdetail" element={<ProjectDetail />} />
      </Route>
    </>
  )
);

export default App;
