import { Character } from "models/graphQlModel";

type CharacterInfo = {
  label: string;
  value: string;
};

const generateCharacterInfo = (character: Character): CharacterInfo[] => {
  const {
    status,
    species,
    type,
    gender,
    origin,
    location,
    created,
  } = character;
  return [
    {
      label: "Status",
      value: status || "No data",
    },
    {
      label: "Location",
      value: location?.name || "No data",
    },
    {
      label: "Species",
      value: species || "No data",
    },
    {
      label: "Type",
      value: type || "No data",
    },
    {
      label: "Gender",
      value: gender || "No data",
    },
    {
      label: "Origin",
      value: origin?.name || "No data",
    },
    {
      label: "Created",
      value: created || "No data",
    },
  ];
};

export default generateCharacterInfo;
