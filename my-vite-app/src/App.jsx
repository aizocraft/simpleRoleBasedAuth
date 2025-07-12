import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import SalesDashboard from './pages/SalesDashboard';
import Navbar from './components/Navbar';
import AuthService from './services/AuthService';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await AuthService.getCurrentUser();
        if (user) {
          setCurrentUser(user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Navbar 
        isAuthenticated={isAuthenticated} 
        currentUser={currentUser} 
        onLogout={handleLogout} 
      />
      <Routes>
        <Route path="/" element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
        } />
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Login setCurrentUser={setCurrentUser} setIsAuthenticated={setIsAuthenticated} />
        } />
        <Route path="/register" element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Register />
        } />
        <Route path="/dashboard" element={
          isAuthenticated ? <Dashboard currentUser={currentUser} /> : <Navigate to="/login" />
        } />
        <Route path="/admin" element={
          isAuthenticated && currentUser?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/dashboard" />
        } />
        <Route path="/manager" element={
          isAuthenticated && currentUser?.role === 'manager' ? <ManagerDashboard /> : <Navigate to="/dashboard" />
        } />
        <Route path="/sales" element={
          isAuthenticated && currentUser?.role === 'sales' ? <SalesDashboard /> : <Navigate to="/dashboard" />
        } />
      </Routes>
    </Router>
  );
}

export default App;