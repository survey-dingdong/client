import { useQuery } from "@tanstack/react-query";
import { getUserMeUsersMeGet } from "src/client";

export const fetchUserQueryKey = "/users/me";

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: [fetchUserQueryKey],
    queryFn: () => getUserMeUsersMeGet(),
  });

  return {
    user,
    isLoading,
  };
};
