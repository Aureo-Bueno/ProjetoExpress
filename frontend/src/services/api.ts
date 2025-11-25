import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface ApiErrorResponse {
  message: string;
  status: number;
  data?: any;
}

class ApiClient {
  private baseURL = "http://localhost:5000";
  private axiosInstance = axios.create();

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
    });

    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = this.getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        config.headers["Content-Type"] = "application/json";
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem("@auth:token");
          localStorage.removeItem("@auth:user");
        }

        if (error.response?.status === 403) {
          console.error("Acesso proibido:", error.response.data);
        }

        return Promise.reject(error);
      }
    );
  }

  private getAuthToken(): string | null {
    return localStorage.getItem("@auth:token");
  }

  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(
        endpoint,
        config
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post<T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(
        endpoint,
        data,
        config
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async put<T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put(
        endpoint,
        data,
        config
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async patch<T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.patch(
        endpoint,
        data,
        config
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete(
        endpoint,
        config
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async uploadFile<T>(
    endpoint: string,
    file: File,
    additionalData?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const formData = new FormData();
      formData.append("file", file);

      // Adicionar dados adicionais ao FormData
      if (additionalData) {
        Object.entries(additionalData).forEach(([key, value]) => {
          formData.append(key, value);
        });
      }

      const response: AxiosResponse<T> = await this.axiosInstance.post(
        endpoint,
        formData,
        {
          ...config,
          headers: {
            ...config?.headers,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async downloadFile(
    endpoint: string,
    filename?: string,
    config?: AxiosRequestConfig
  ): Promise<void> {
    try {
      const response = await this.axiosInstance.get(endpoint, {
        ...config,
        responseType: "blob",
      });

      // Criar URL do blob
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename || "download");
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): ApiErrorResponse {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message =
        error.response?.data?.message || error.message || "Erro na requisição";

      console.error(`[API Error ${status}]:`, message);

      return {
        message,
        status,
        data: error.response?.data,
      };
    }

    console.error("[Unknown Error]:", error);
    return {
      message: "Erro desconhecido",
      status: 500,
    };
  }

  async batch<T>(
    requests: Array<{
      method: "get" | "post" | "put" | "patch" | "delete";
      endpoint: string;
      data?: any;
      config?: AxiosRequestConfig;
    }>
  ): Promise<T[]> {
    try {
      const promises = requests.map((req) => {
        switch (req.method) {
          case "get":
            return this.get(req.endpoint, req.config);
          case "post":
            return this.post(req.endpoint, req.data, req.config);
          case "put":
            return this.put(req.endpoint, req.data, req.config);
          case "patch":
            return this.patch(req.endpoint, req.data, req.config);
          case "delete":
            return this.delete(req.endpoint, req.config);
          default:
            return Promise.reject(new Error("Método não suportado"));
        }
      });

      return Promise.all(promises);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  setBaseURL(baseURL: string): void {
    this.baseURL = baseURL;
    this.axiosInstance.defaults.baseURL = baseURL;
  }

  getAxiosInstance() {
    return this.axiosInstance;
  }
}

export const apiClient = new ApiClient();

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export type { ApiErrorResponse };
