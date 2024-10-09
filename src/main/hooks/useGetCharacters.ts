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

export const useGetCharacters = (page: number): ISingleCharacter[] => {
  const {data} = useQuery<IAllCharacterResponse>(
    {
      initialData: {
        results: [],
      } as any,
      queryKey: [`characters-${page}`],
      queryFn: async () =>
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
          .then((res) => res.data),
    },
  );
  
  return useMemo(() => data?.results || [], [data]);
}