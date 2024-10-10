import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {ISingleCharacter} from "./useGetSingleCharacter";
import {useMemo} from "react";

export interface IAllCharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: ISingleCharacter[];
}

export const useGetCharacters = (page: number, filter: string): {
  results: ISingleCharacter[];
  noResults: boolean;
} => {
  const {data, isRefetching} = useQuery<IAllCharacterResponse>(
    {
      initialData: {
        results: [],
      } as any,
      retry: false,
      queryKey: [`characters-${page}${filter ? `-${filter}` : ""}`],
      queryFn: async () =>
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}${filter ? `&${filter}` : ""}`)
          .then((res) => res.data),
      throwOnError: false,
    },
  );
  
  return useMemo(() => ({
    results: data?.results || [],
    noResults: isRefetching ? false : !!filter && data?.results?.length === 0
  }), [data, isRefetching, filter]);
};