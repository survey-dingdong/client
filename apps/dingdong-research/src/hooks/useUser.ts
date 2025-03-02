import { useQuery } from "@tanstack/react-query";
import { userApi } from "src/client";

export const fetchUserQueryKey = "/users/me";

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: [fetchUserQueryKey],
    queryFn: () => userApi.getUserMeUsersMeGet(),
    select: (data) => data.data,
  });

  return {
    user,
    isLoading,
  };
};
