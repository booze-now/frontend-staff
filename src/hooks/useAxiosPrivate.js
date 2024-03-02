import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefresToken from "./useRefreshToken";
import useAuth from "./useAuth";

export default function useAxiosPrivate() {
  const refresh = useRefresToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    const responsIntercept = axiosPrivate.interceptors.response.use(
      (respons) => respons,

      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status == 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.response.eject(responsIntercept);
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [auth, refresh]);
  return axiosPrivate;
}
