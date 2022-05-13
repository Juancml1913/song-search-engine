import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSong } from "../actions/searchActions";
import { helpHttp } from "../helpers/helpHttp";

function Song({ setLoading, setError }) {
  const state = useSelector((state) => state);
  const { song } = state.search;
  const dispatch = useDispatch();
  let { id } = useParams();

  let api = helpHttp();
  let url = "https://genius.p.rapidapi.com";

  useEffect(() => {
    getSongLocal(id);
  }, [id]);

  {
    /*useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://genius.com/songs/${song.id}/embed.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });*/
  }

  const getSongLocal = (id) => {
    setLoading(true);
    let endpoint = `${url}/songs/${id}`;
    api.get(endpoint).then((res) => {
      if (!res.err) {
        dispatch(getSong(res.response.song));
        setError(null);
      } else {
        setError(res);
      }
      setLoading(false);
    });
  };

  return (
    <div className="container columns">
      <div className="column is-offset-3-desktop is-offset-2-tablet is-4-desktop is-4-tablet">
        <div className="card">
          <div className="card-image">
            <div dangerouslySetInnerHTML={{ __html: song.embed_content }}></div>
          </div>
        </div>
      </div>
      <div className="column is-4-desktop is-4-tablet">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={song.header_image_url} alt="Song" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={song.song_art_image_url} alt="Song" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{song.full_title}</p>
                <p className="subtitle is-6">
                  Facebook <strong>{song.facebook_name}</strong> <br />
                  Twitter <strong>{song.twitter_name}</strong>
                </p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <br />
              <a href={song.url}>{song.full_title}</a>
              <br />
              <time>{song.release_date}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Song;
