// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
// import RegisterShop from "./pages/RegisterShop"; // Placeholder

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/register-shop" element={<RegisterShop />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
