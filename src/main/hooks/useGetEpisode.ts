export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: [];
}

export const useGetEpisode = (id: string): IEpisode | null => {
  return null;
};