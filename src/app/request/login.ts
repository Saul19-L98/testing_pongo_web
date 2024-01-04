import axios from "axios";
import { AxiosResponse } from "axios";

export const login = <T>(
  email: string,
  password: string
): Promise<AxiosResponse<T>> => {
  return axios.post<T>(
    "/api/auth/login",
    { email, password },
    { withCredentials: true }
  );
};
