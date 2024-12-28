import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Project = lazy(() => import("./pages/Project"));

const App = () => {
  return (
    <Router>
      <Cursor />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<Loader />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Project />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
