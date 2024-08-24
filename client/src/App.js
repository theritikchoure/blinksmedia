import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LayoutMain from "./layout/main.js";
import LayoutMain2 from "./layout/main2.js";
import Home from "./landing_page";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegistrationPage.js";
import ForYouPage from "./pages/ForYouPage.js";
import ExplorePage from "./pages/ExplorePage.js";
import AuthPopups from "./components/auth-popups/AuthPopups.js";

// Dummy authentication status
const isAuthenticated = false;

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/for-you" element={<ForYouPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/video/:video_id" element={<ForYouPage />} />

          {/* Protected Routes */}
          {/* <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          /> */}

          {/* Catch-all Route for 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
      <AuthPopups />
    </Router>
  );
}

export default App;
