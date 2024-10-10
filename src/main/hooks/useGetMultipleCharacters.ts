import {ISingleCharacter} from "./useGetSingleCharacter";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useMemo} from "react";

export const useGetMultipleCharacters = (ids: string[]): ISingleCharacter[] => {
  const queryId = useMemo(() => ids.join(','), [ids]);
  
  const {data} = useQuery<ISingleCharacter[]>(
    {
      initialData: [] as any[],
      queryKey: [`characters-${queryId}`],
      queryFn: async () =>
        axios.get(`https://rickandmortyapi.com/api/character/${queryId}`)
          .then((res) => res.data),
      enabled: ids.length > 0,
    },
  );
  
  return data || [];
};