import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {ISingleCharacter} from "./useGetSingleCharacter";
import {useGetMultipleCharacters} from "./useGetMultipleCharacters";
import {useMemo} from "react";
import {getIdOfData} from "../../utils";

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

export const useGetEpisode = (id: string): Omit<IEpisode, "characters"> & { characters: ISingleCharacter[] } | null => {
  const {data} = useQuery<IEpisode>(
    {
      initialData: {} as any,
      queryKey: [`episode-${id}`],
      queryFn: async () =>
        axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
          .then((res) => res.data),
    },
  );
  
  const characters = useGetMultipleCharacters(data?.characters?.map((e) => getIdOfData(e)) || []);
  
  return useMemo(() => data ? {...data, characters} : null, [data, characters]);
};