import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useGetMultipleCharacters} from "./useGetMultipleCharacters";
import {useMemo} from "react";
import {ISingleCharacter} from "./useGetSingleCharacter";
import {getIdOfData} from "../../utils";

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

export const useGetLocation = (id: string): Omit<ILocation, "residents"> & { residents: ISingleCharacter[] } | null => {
  const {data} = useQuery<ILocation>(
    {
      initialData: {} as any,
      queryKey: [`location-${id}`],
      queryFn: async () =>
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
          .then((res) => res.data),
    },
  );
  
  const residents = useGetMultipleCharacters(data?.residents?.map((e) => getIdOfData(e)) || []);
  
  return useMemo(() => data ? {...data, residents} : null, [data, residents]);
};