import React from "react";
import { Route, Routes } from "react-router-dom";
import CalendarComponent from "./components/CalendarComponent/CalendarComponent";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route>
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
