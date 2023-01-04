import { useGetBreedsQuery } from "./petApiService";

export default function useBreedList(animal) {
  // delete this line
  // const results = useQuery(["breeds", animal], fetchBreedList);

  const { data: breeds, isLoading } = useGetBreedsQuery(animal, {
    skip: !animal,
  });

  if (!animal) {
    return [[], "loaded"];
  }

  return [breeds ?? [], isLoading ? "loading" : "loaded"];
}