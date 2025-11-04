import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/main.scss";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Nav from "./components/Nav";
import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);

  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <main className="movies-app container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="*" element={<>Not found!</>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
