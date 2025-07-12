const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-700">Welcome to the Admin Dashboard. You have full access to all features.</p>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Admin Features</h2>
        <ul className="list-disc pl-5">
          <li>User Management</li>
          <li>System Configuration</li>
          <li>All Reports Access</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;