import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import NewSessionPage from "./pages/NewSessionPage/NewSessionPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PatientsPage from "./pages/PatientsPage/PatientsPage";
import SessionDetailPage from "./pages/SessionDetailPage/SessionDetailPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import UpdateSessionPage from "./pages/UpdateSessionPage/UpdateSessionPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route>
          <Route path="/updatesession/:id" element={<UpdateSessionPage />} />
          <Route path="/sessions/:id" element={<SessionDetailPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/newsession" element={<NewSessionPage />} />{" "}
          <Route path="/" element={<CalendarPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
