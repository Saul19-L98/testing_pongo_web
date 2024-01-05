import axios from "axios";
import { AxiosResponse } from "axios";

export const verifySession = <T>(): Promise<AxiosResponse<T>> => {
  return axios.get<T>("/api/auth/verify", { withCredentials: true });
};
