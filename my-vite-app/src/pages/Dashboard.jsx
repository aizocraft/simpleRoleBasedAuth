import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ currentUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      switch (currentUser.role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'manager':
          navigate('/manager');
          break;
        case 'sales':
          navigate('/sales');
          break;
        default:
          navigate('/login');
      }
    }
  }, [currentUser, navigate]);

  return <div>Loading dashboard...</div>;
};

export default Dashboard;