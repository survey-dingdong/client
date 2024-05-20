import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GetUserListResponse } from "generated-client";

export const fetchUserQueryKey = "/users/me";

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: [fetchUserQueryKey],
    queryFn: () =>
      axios.get<GetUserListResponse>("/users/me").then((res) => res.data),
  });

  return {
    user,
    isLoading,
  };
};
