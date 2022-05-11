import Card from "./Card";
function CardContainer({ songs }) {
  return (
    <div className="container">
      <div className="columns is-multiline">
        {songs.map((song, key) => (
          <Card key={key} song={song.result} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
