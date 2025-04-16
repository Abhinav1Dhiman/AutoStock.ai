// src/pages/Login.tsx
import { useState } from "react";
import { signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // You can replace this with a backend check later
      const isRegistered = true; // ← dummy, replace with API check
      navigate(isRegistered ? "/dashboard" : "/register-shop");
    } catch (err) {
      console.error(err);
    }
  };

  const handleEmailLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;

      const isRegistered = true; // ← dummy, replace with API check
      navigate(isRegistered ? "/dashboard" : "/register-shop");
    } catch (err) {
      alert("Invalid login credentials.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-blue-600 text-white p-2 rounded-md mb-4 hover:bg-blue-700"
        >
          Continue with Google
        </button>

        <div className="text-center my-4 text-gray-500">or</div>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded-md mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded-md mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleEmailLogin}
          className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
        >
          Login with Email
        </button>
      </div>
    </div>
  );
};

export default Login;
