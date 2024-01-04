import { cookies } from "next/headers";
import { api } from "../libs/axios-config";
import { redirect } from "next/navigation";

export const verifyLoging = async () => {
  try {
    const cookieString = Object.entries(cookies().getAll())
      .map(([key, val]) => `${val.name}=${val.value}`)
      .join("; ");

    await api.get("/auth-admin/verify", {
      withCredentials: true,
      headers: {
        ["Cookie"]: cookieString,
      },
    });

    console.log("verifyLoging: true");
    redirect("/");
  } catch (error) {
    return null;
  }
};
