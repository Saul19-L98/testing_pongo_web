import { cookies } from "next/headers";

export const verifySession = () => {
  const cookieString = Object.entries(cookies().getAll())
    .map(([key, val]) => `${val.name}=${val.value}`)
    .join("; ");
  if (cookieString.startsWith("Cookie")) {
    return true;
  }
  return false;
};
