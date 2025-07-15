import type { AxiosResponse, AxiosRequestConfig } from "axios";

declare module "axios" {
  export interface RequestConfig extends AxiosRequestConfig {
    showLoading?: boolean;
    needToken?: boolean;
  }
  export interface ApiResponse<T = any> extends AxiosResponse {
    code: number;
    data: T;
    message: string;
    [key: string]: any;
  }

  export interface AxiosInstance {
    <T = any>(config: RequestConfig): Promise<T>
    request<T = any>(config: RequestConfig): Promise<T>
    get<T = any>(url: string, config?: RequestConfig): Promise<T>
    post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T>
  }
}
