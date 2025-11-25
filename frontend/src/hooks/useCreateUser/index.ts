import { apiClient, ApiResponse } from "@/services/api";
import { useState } from "react";

export const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const createUser = async (userData: {
    name: string;
    email: string;
    contact: string;
  }) => {
    try {
      setLoading(true);
      const response = await apiClient
        .getAxiosInstance()
        .post<ApiResponse>(`/users`, userData);

      if (response.status !== 201 && !response.data.success) {
        throw new Error(`Error creating user`);
      }
    } catch (error) {
      console.error("Failed to create user:", error);
    } finally {
      setLoading(false);
    }
  };

  return { createUser, loading };
};
