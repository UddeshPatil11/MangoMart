import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
      <p className="text-gray-600 mt-4">This is a protected route. You must be logged in to see this page.</p>
    </div>
  );
};

export default Dashboard;
