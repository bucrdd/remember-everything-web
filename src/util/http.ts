import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

interface ApiResponse<T = any> extends AxiosResponse {
  code: number;
  data: T;
  message: string;
  [key: string]: any;
}

interface RequestConfig extends AxiosRequestConfig {
  showLoading?: boolean;
  needToken?: boolean;
}

class HttpClient {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.setupInterceptors();
  }

  private setupInterceptors() {
    // 请求拦截
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 添加token逻辑
        if ((config as RequestConfig).needToken !== false) {
          const token = localStorage.getItem('token')
          if (token) {
            config.headers.Authorization = `Bearer ${token}`
          }
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    // 响应拦截
    this.instance.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => {
        // 统一处理业务错误码
        // if (response.data.code !== 200) {
        //   return Promise.reject(response.data)
        // }
        return response.data
      },
      (error) => {
        // 统一处理HTTP错误
        return Promise.reject(error)
      }
    )
  }

  public request<T = any>(config: RequestConfig): Promise<ApiResponse<T>> {
    return this.instance.request(config)
  }

  public get<T = any>(url: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.instance.get(url, config)
  }

  public post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.instance.post(url, data, config)
  }
}

// 创建实例
const http = new HttpClient({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default http
