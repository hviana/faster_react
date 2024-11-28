const DashboardSummary = (props: any) => {
  const { data } = props;
  return (
    <>
      {/* Statistic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center">
            <div className="text-blue-500">
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 11a1 1 0 011-1h1v6H3a1 1 0 01-1-1v-4z" />
                <path
                  fillRule="evenodd"
                  d="M13 7H7v6h6V7zm-2 4V9h-2v2h2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-2xl font-semibold text-gray-700">
                1,257
              </h4>
              <div className="text-gray-500">New Users</div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center">
            <div className="text-green-500">
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 3a2 2 0 00-2 2v1h14V5a2 2 0 00-2-2H5z" />
                <path
                  fillRule="evenodd"
                  d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 100 2h4a1 1 0 100-2H8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-2xl font-semibold text-gray-700">
                $24,300
              </h4>
              <div className="text-gray-500">Total Sales</div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center">
            <div className="text-yellow-500">
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 3a1 1 0 000 2h12a1 1 0 100-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M5 6a2 2 0 00-2 2v6a2 2 0 002 2h6v-5h5V8a2 2 0 00-2-2H5zm6 7V8h5v5h-5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-2xl font-semibold text-gray-700">152</h4>
              <div className="text-gray-500">Open Tickets</div>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center">
            <div className="text-red-500">
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" />
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v10l-4-4H4a1 1 0 00-1 1v3a1 1 0 01-2 0V5a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-2xl font-semibold text-gray-700">94%</h4>
              <div className="text-gray-500">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      {/* Recent Activities */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Activities
        </h2>
        <div className="mt-4">
          <div className="bg-white shadow-lg rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-500 uppercase">
                    User
                  </th>
                  <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-500 uppercase">
                    Activity
                  </th>
                  <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-500 uppercase">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 border-b">John Doe</td>
                  <td className="px-6 py-4 border-b">Logged In</td>
                  <td className="px-6 py-4 border-b">5 minutes ago</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b">Jane Smith</td>
                  <td className="px-6 py-4 border-b">Updated Profile</td>
                  <td className="px-6 py-4 border-b">10 minutes ago</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Bob Johnson</td>
                  <td className="px-6 py-4">Made a Purchase</td>
                  <td className="px-6 py-4">15 minutes ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Chart Placeholder */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Performance Overview
        </h2>
        <div className="mt-4">
          <div className="bg-white shadow-lg rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-500">[Chart Placeholder]</p>
          </div>
        </div>
      </div>
      {/* End of dash-content */}
    </>
  );
};
export default DashboardSummary;
