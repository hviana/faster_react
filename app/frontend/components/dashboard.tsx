import { useState } from "react";
import { route } from "@helpers/frontend/route.ts";
import ResponsiveMenu from "./parts/menu.tsx";
import DashboardSummary from "./parts/dashboard_summary.tsx";
const Dashboard = (props: any) => {
  const { user, token } = props;
  if (!user || !token) {
    route({ path: "/pages/login" })();
    return;
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <script src="https://cdn.tailwindcss.com"></script>
      <ResponsiveMenu user={user} token={token} />
      {/* Rest of the dashboard content */}
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        <div id="dash-content" className="container mx-auto px-6 py-8">
          <DashboardSummary />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
