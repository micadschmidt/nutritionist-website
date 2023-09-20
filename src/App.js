// import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  // useRouteError,
} from "react-router-dom";

  import NavBar from "./components/NavBar";
  import Home from "./pages/Home";
  import AboutMe from "./pages/AboutMe";
  import Schedule from "./pages/Schedule";
  import Footer from "./components/Footer";
  import Blog from "./pages/Blog";
  import BlogPost from "./pages/BlogPosts";
  import Testing from "./pages/Testing";
  import Recipes from "./pages/Recipes";
  import RecipePage from "./pages/RecipePage";
  import Retreats from "./pages/Retreats";
  import Contact from "./pages/Contact";
  import GuideSignup from "./pages/GuideSignup";
  import ErrorPage from "./components/ErrorPage";
  import Success from "./pages/Success";
  import { ScrollToTop } from "./utils";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/blogpost" element={<BlogPost />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/recipe" element={<RecipePage />} />
        <Route path="/retreats" element={<Retreats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/emailsignup" element={<GuideSignup />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <Footer />
    </>
  );
};

export default App;
