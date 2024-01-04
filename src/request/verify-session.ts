import { cookies } from "next/headers";
import { api } from "../libs/axios-config";
import { redirect } from "next/navigation";

export const verifySession = async () => {
  try {
    const cookieString = Object.entries(cookies().getAll())
      .map(([key, val]) => `${val.name}=${val.value}`)
      .join("; ");

    const data = await api.get("/auth/verify", {
      withCredentials: true,
      headers: {
        ["Cookie"]: cookieString,
      },
    });
    if (cookieString) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    redirect("/");
  }
};
