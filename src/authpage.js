import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const auth = getAuth(); 
    const provider = new GoogleAuthProvider();

    try {
      // Attempt Google sign-in via popup
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Signed in as:", user.displayName);
      navigate("/workout-tracker"); 
    } catch (error) {
      setError(error.message); 
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="auth-page">
      <h2>Welcome to the Workout Tracker!</h2>
      <button onClick={handleGoogleSignIn} className="google-sign-in-button">
        Sign in with Google
      </button>

      {error && <p className="error-message">{error}</p>} {/* Display error message if exists */}
    </div>
  );
};

export default AuthPage;