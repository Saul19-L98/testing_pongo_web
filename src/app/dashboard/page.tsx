"use client";
import WithPrivateRoute from "@/shared/routes/WithPrivateRoute";
import { verifySession } from "./request/authorize";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
// export default WithPrivateRoute(Dashboard, verifySession);
