const SalesDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sales Dashboard</h1>
      <p className="text-gray-700">Welcome to the Sales Dashboard. Track your sales and performance.</p>
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Sales Features</h2>
        <ul className="list-disc pl-5">
          <li>Customer Management</li>
          <li>Sales Tracking</li>
          <li>Personal Performance</li>
        </ul>
      </div>
    </div>
  );
};

export default SalesDashboard;