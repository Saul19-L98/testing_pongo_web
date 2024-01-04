import { verifySession } from "@/request/verify-session";

const page = async () => {
  await verifySession();
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default page;
