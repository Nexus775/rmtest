import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export interface ISingleCharacter {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
}

export type Status = "Alive" | "Dead" | "unknown";

export type Gender = "Female" | "Male" | "genderless" | "unknown";

export const useGetSingleCharacter = (id: string): ISingleCharacter | null => {
  const {data} = useQuery<ISingleCharacter>(
    {
      initialData: {} as any,
      queryKey: [`character-${id}`],
      queryFn: async () =>
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
          .then((res) => res.data),
    },
  );
  
  return data || null;
};