import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewSessionPage from "./pages/NewSessionPage/NewSessionPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PatientsPage from "./pages/PatientsPage/PatientsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SessionDetailPage from "./pages/SessionDetailPage/SessionDetailPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import UpdateSessionPage from "./pages/UpdateSessionPage/UpdateSessionPage";
import { RootState } from "./redux/store";

function App() {
  const user: any = useSelector((state: RootState) => state.userInfo);

  const [logged, setLogged] = useState(user.loggedIn);

  useEffect(() => {
    const token = localStorage.getItem("UserToken");
    token ? setLogged(user.loggedIn) : setLogged(!user.loggedIn);
  }, [user.loggedIn]);

  return (
    <div className="App">
      <ToastContainer />
      <Navigation />
      <Routes>
        <Route>
          <Route path="/updatesession/:id" element={<UpdateSessionPage />} />
          <Route path="/sessions/:id" element={<SessionDetailPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/newsession" element={<NewSessionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
