import "./Roster.css";

export default function Roster({ episodeList, setSelectedEpisode }) {
  return (
    <section className="roster">
      <h1>Dark Echoes</h1>
      <h2>Episodes</h2>
      <ul className="roster-list">
        {episodeList.map((episode) => (
          <li
            className="roster-list-item"
            key={episode.id}
            onClick={() => {
              console.log("clicked:", episode.title);
              setSelectedEpisode(episode);
            }}
          >
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
