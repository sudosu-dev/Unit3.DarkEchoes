import { useState } from "react";
import Roster from "./Components/Roster/Roster";
import EpisodeDetails from "./Components/EpisodeDetails/EpisodeDetails";
import { episodeList } from "./data";

export default function App() {
  // create state variable to store selected episode
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main className="main-display">
        <Roster
          episodeList={episodeList}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails selectedEpisode={selectedEpisode} />
      </main>
    </>
  );
}
