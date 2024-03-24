import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Leaderboard from "./components/LeaderBoard";
import PageNotFound from "./components/PageNotFound";
import Settings from "./components/Settings";
import Connect from "./components/Connect";
import Play from "./components/Play";

import { ContextProvider } from "./context/Data";

export default function App() {
  return (
    <main className="flex flex-jc-al-cnt">
      <div className="container">
        <BrowserRouter>
          <ContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/play" element={<Play />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </ContextProvider>
        </BrowserRouter>
      </div>
    </main>
  );
}
