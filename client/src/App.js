import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import "./App.css";
import LayoutMain from "./layout/main.js";
import LayoutMain2 from "./layout/main2.js";
import Home from "./landing_page";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegistrationPage.js";
import ForYouPage from "./pages/ForYouPage.js";
// import ExplorePage from "./pages/ExplorePage.js";
import VideosPage from "./pages/VideosPage.js";
import VideoPage from "./pages/VideoPage.js";
import AuthPopups from "./components/auth-popups/AuthPopups.js";
import ProfilePage from "./pages/ProfilePage.js";
import FollowingPage from "./pages/FollowingPage.js";
import { AuthContext } from "./context/AuthenticationContext.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import UploadVideoPage from "./pages/uploadPage.js";
import EditProfile from "./pages/EditProfile.js";
import SystemDesignPage from "./pages/SystemDesignPage.js";

const publicVapidKey =
  "BDmFy-ySri7M4mvIRxUrSQzMIaZKWYC9CTde7fsn3QoRSZw353rG3lEjKAO1oggsA5ui2KF42_oKRqbASQYUKA8";

function App() {
  const { isUserLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    // Register service worker and subscribe to push notifications
    const registerServiceWorker = async () => {
      const register = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });

      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
      });

      // Send subscription to the server
      await axios.post("http://localhost:5000/api/v1/subscribe", subscription);
    };

    // Check if service workers are supported
    if ("serviceWorker" in navigator) {
      registerServiceWorker().catch((error) => console.error(error));
    }
  }, []);

  // Helper function to convert VAPID key
  const urlBase64ToUint8Array = (base64String) => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/for-you" element={<ForYouPage />} /> */}
          {/* <Route path="/explore" element={<ExplorePage />} /> */}
          <Route path="/explore" element={<VideosPage />} />
          <Route path="/video/:video_id" element={<VideoPage />} />
          <Route path="/system-design" element={<SystemDesignPage />} />
          {/* <Route path="/profile" element={<ProfilePage />} />
          <Route path="/following" element={<FollowingPage />} /> */}

          {/* Protected Routes */}
          <Route
            path="/profile"
            element={isUserLoggedIn ? <ProfilePage /> : <Navigate to="/" />}
          />
          <Route
            path="/edit-profile"
            element={isUserLoggedIn ? <EditProfile /> : <Navigate to="/" />}
          />
          <Route
            path="/following"
            element={isUserLoggedIn ? <FollowingPage /> : <Navigate to="/" />}
          />
          <Route
            path="/upload"
            element={isUserLoggedIn ? <UploadVideoPage /> : <Navigate to="/" />}
          />

          {/* Catch-all Route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <AuthPopups />
    </Router>
  );
}

export default App;
