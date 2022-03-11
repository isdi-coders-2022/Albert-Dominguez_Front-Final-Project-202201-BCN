import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route>
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
