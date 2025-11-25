import { apiClient, ApiResponse } from "@/services/api";
import { useCallback, useEffect, useState } from "react";

interface UserType {
  id: string;
  name: string;
  email: string;
  contact: string;
}

export const useGetUsers = () => {
  const [users, setUsers] = useState<UserType[] | undefined>();

  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await apiClient
        .getAxiosInstance()
        .get<ApiResponse<UserType[]>>("/users");

      if (response.status === 200 && response.data.success) {
        setUsers(response.data.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Failed to fetch users:", error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, fetchUsers, loading };
};
