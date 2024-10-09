export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [];
}

export const useGetLocation = (id: string): ILocation | null => {
  return null;
};