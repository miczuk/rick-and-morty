import { Episode } from "models/graphQlModel";

type EpisodeInfo = {
  label: string;
  value: string;
};

const generateEpisodeInfo = (episode: Episode): EpisodeInfo[] => {
  const { name, episode: episodeInfo, air_date: airDate, created } = episode;
  return [
    {
      label: "Name",
      value: name || "No data",
    },
    {
      label: "Episode",
      value: episodeInfo || "No data",
    },
    {
      label: "Air Date",
      value: airDate || "No data",
    },
    {
      label: "Created",
      value: created || "No data",
    },
  ];
};

export default generateEpisodeInfo;
