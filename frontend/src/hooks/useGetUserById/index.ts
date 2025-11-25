import { apiClient, ApiResponse } from "@/services/api";
import { useEffect, useState } from "react";

interface UserType {
  id: string;
  name: string;
  email: string;
  contact: string;
}

export const useGetUserById = (id: string) => {
  const [user, setUser] = useState<UserType | undefined>();
  const [loading, setLoading] = useState(false);

  const getUserById = async (id: string) => {
    try {
      setLoading(true);
      const response = await apiClient
        .getAxiosInstance()
        .get<ApiResponse<UserType>>(`/users/${id}`);

      if (
        response.status === 200 &&
        response.data.data &&
        response.data.success
      ) {
        setUser(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Failed to fetch user by ID:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserById(id);
  }, [id]);

  return { user, loading };
};
