import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/global.scss";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<MovieDetail />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
