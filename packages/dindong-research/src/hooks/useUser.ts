import { useQuery } from "@tanstack/react-query";
import { userApi } from "src/apis/client";

export const fetchUserQueryKey = "/users/me";

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: [fetchUserQueryKey],
    queryFn: () => userApi.getUserMeUsersMeGet(),
  });

  return {
    user,
    isLoading,
  };
};
