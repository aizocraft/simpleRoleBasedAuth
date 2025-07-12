import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, currentUser, onLogout }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Auth App</Link>
        
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span>Welcome, {currentUser?.name}</span>
              <span className="bg-blue-500 px-2 py-1 rounded text-sm">
                {currentUser?.role}
              </span>
              <button 
                onClick={onLogout}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300">Login</Link>
              <Link to="/register" className="hover:text-gray-300">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;