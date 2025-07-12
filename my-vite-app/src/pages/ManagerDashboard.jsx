const ManagerDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>
      <p className="text-gray-700">Welcome to the Manager Dashboard. You can manage your team and view reports.</p>
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Manager Features</h2>
        <ul className="list-disc pl-5">
          <li>Team Management</li>
          <li>Sales Reports</li>
          <li>Performance Tracking</li>
        </ul>
      </div>
    </div>
  );
};

export default ManagerDashboard;