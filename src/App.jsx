import { useEffect, useState } from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
import UserLogin from "./components/UserLogin";
import UserSignup from "./components/UserSignup";
import UserDashboard from "./components/UserDashboard";
import GetToken from "./components/GetToken";
import MyQueue from "./components/MyQueue";
import Appointments from "./components/Appointments";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminTokens from "./components/AdminTokens";
import AdminUsers from "./components/AdminUsers";
import AdminAppointments from "./components/AdminAppointments";
import AdminQueue from "./components/AdminQueue";


function App() {

  const getPageFromURL = () => {
    const page = window.location.hash.replace("#", "");
    return page || "home";
  };

  const [page, setPage] = useState(getPageFromURL());

  const navigate = (newPage) => {
    window.history.pushState({ page: newPage }, "", `#${newPage}`);
    setPage(newPage);
  };

  useEffect(() => {
    const handleBackForward = () => {
      setPage(getPageFromURL());
    };

    window.addEventListener("popstate", handleBackForward);
    window.addEventListener("hashchange", handleBackForward);

    return () => {
      window.removeEventListener("popstate", handleBackForward);
      window.removeEventListener("hashchange", handleBackForward);
    };
  }, []);

  return (
    <div className="app">

      {page === "home" && (
        <Dashboard
          onUserClick={() => navigate("login")}
          onAdminClick={() => navigate("adminLogin")}
        />
      )}

      {page === "login" && (
        <UserLogin
          onSignup={() => navigate("signup")}
          onLogin={() => navigate("userDashboard")}
        />
      )}

      {page === "signup" && (
        <UserSignup
          onLogin={() => navigate("login")}
        />
      )}

      {page === "userDashboard" && (
        <UserDashboard
          onDashboard={() => navigate("userDashboard")}
          onGetToken={() => navigate("getToken")}
          onMyQueue={() => navigate("myQueue")}
          onAppointments={() => navigate("appointments")}
          onLogout={() => navigate("home")}
        />
      )}

      {page === "appointments" && (
        <Appointments
          onBack={() => navigate("userDashboard")}
        />
      )}

      {page === "myQueue" && (
        <MyQueue
          onBack={() => navigate("userDashboard")}
        />
      )}

      {page === "getToken" && (
        <GetToken
          onBack={() => navigate("userDashboard")}
        />
      )}
    

      {page === "adminLogin" && (
        <AdminLogin
          onLogin={() => navigate("adminDashboard")}
        />
      )}

      {page === "adminDashboard" && (
        <AdminDashboard
          onTokens={() => navigate("adminTokens")}
          onUsers={() => navigate("adminUsers")}
          onAppointments={() => navigate("adminAppointments")}
          onQueue={() => navigate("adminQueue")}
          onLogout={() => navigate("home")}
        />
      )}

      {page === "adminTokens" && (
        <AdminTokens
          onBack={() => navigate("adminDashboard")}
        />
      )}

      {page === "adminUsers" && (
        <AdminUsers
          onBack={() => navigate("adminDashboard")}
        />
      )}

      {page === "adminAppointments" && (
        <AdminAppointments
          onBack={() => navigate("adminDashboard")}
        />
      )}

      {page === "adminQueue" && (
        <AdminQueue
          onBack={() => navigate("adminDashboard")}
        />
      )}

    </div>
  );
}

export default App;
