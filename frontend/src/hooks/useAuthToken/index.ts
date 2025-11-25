import { TOKEN_KEY } from "@/constants/localstorage.constants";
import { useEffect, useState } from "react";

export const useAuthToken = (): string | null => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    setToken(storedToken);
  }, []);

  return token;
};