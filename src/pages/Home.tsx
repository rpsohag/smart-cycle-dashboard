const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Smart Cycle</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Dashboard Overview</h2>
            <p className="text-gray-600">View your cycling statistics and performance metrics</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
            <p className="text-gray-600">Check your latest rides and achievements</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Goals</h2>
            <p className="text-gray-600">Track your progress towards fitness goals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
