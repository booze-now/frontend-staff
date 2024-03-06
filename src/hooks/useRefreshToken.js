import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

export default function useRefresToken() {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.get("/refresh", {
        withCredentials: true,
      });

      setAuth((prev) => {
        console.log(prev);
        console.log(response.data?.roles);
        console.log(response.data?.accessToken);
        return {
          ...prev,
          accessToken: response.data?.accessToken,
          roles: response.data?.roles,
        };
      });
      return response.data.accessToken;
    } catch (err) {
      console.log(err);
    }
  };
  return refresh;
}
