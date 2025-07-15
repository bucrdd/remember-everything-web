import http from "@/util/http";
import type { AxiosResponse } from "axios";

export interface LoginParams {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  roles: string[];
}

export const userApi = {
  login(data: LoginParams): Promise<AxiosResponse<User>> {
    return http.post("/api/auth/login", data);
  },
  listSessions(): Promise<AxiosResponse> {
    return http.get("/api/sessions");
  },
  currentSession(): Promise<AxiosResponse> {
    return http.get("/api/current-session");
  },
};
