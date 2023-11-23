import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import API from "./pages/API";
import TicTacToe from "./pages/TicTacToe";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/api" element={<API />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="*" element={<noPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
