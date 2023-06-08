import { useQuery } from '@tanstack/react-query';
import { ApiSearchUserResponse } from '@/interfaces/user';
import { Repository } from '@/interfaces/repository';
import { apiInstance } from '@/lib/axios';

export const useGetUser = (keyword: string) => {
  return useQuery<ApiSearchUserResponse>({
    queryKey: ['users'],
    queryFn: ({ signal }) =>
      apiInstance
        .get(`/search/users?q=${keyword}&per_page=5`, { signal })
        .then((res) => res.data),
    refetchOnWindowFocus: false,
    enabled: false,
  });
};

export const useGetUserRepositories = (username: string) => {
  return useQuery<Repository[]>({
    queryKey: [`repos-${username}`],
    queryFn: ({ signal }) =>
      apiInstance
        .get(`/users/${username}/repos`, { signal })
        .then((res) => res.data),
    refetchOnWindowFocus: false,
    enabled: false,
  });
};

