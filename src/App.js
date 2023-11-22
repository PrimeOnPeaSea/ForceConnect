import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthProvider } from "./authentication/AuthContext";
import { auth } from "./authentication/firebase";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./authentication/PrivateRoute";
import { Navigate } from "react-router-dom";

// Import the new components
import Header from "./pages/components/Header/Header";
import HeroImage from "./pages/components/HeroImage/HeroImage";
import BlogPosts from "./pages/components/BlogPosts/BlogPosts";
import Products from "./pages/components/Products/Products";
import Footer from "./pages/components/Footer/Footer";
import Error from "./pages/error/Err.js";

// Existing imports
import Profile from "./pages/dashboard/Profile";
import VerifyEmail from "./pages/verification/VerifyEmail";
import Auth from "./pages/login/Auth";
import Home from "./pages/homepage/Home";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <Router>
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home>
                <HeroImage />
                <BlogPosts />
                <Products />
              </Home>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/auth"
            element={
              !currentUser?.emailVerified ? (
                <Auth />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
