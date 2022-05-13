import { useNavigate } from "react-router-dom";

function Card({ song, getArtistLocal }) {
  let navigate = useNavigate();

  const handleArtist = (e) => {
    navigate(`/artist/${song.primary_artist.id}`);
  };

  const handleSong = (e) => {
    navigate(`/song/${song.id}`);
  };

  return (
    <div className="column is-3-desktop is-4-tablet">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={song.header_image_url} alt="Song" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <button
                onClick={handleSong}
                className="button is-ghost is-medium"
              >
                {song.title}
              </button>
              <button
                onClick={handleArtist}
                className="button is-ghost is-normal"
              >
                {song.primary_artist.name}
              </button>
            </div>
          </div>
          <div className="content">
            <time>{song.release_date_for_display}</time>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
