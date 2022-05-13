import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtist } from "../actions/searchActions";
import { helpHttp } from "../helpers/helpHttp";

function Artist({ setLoading, setError }) {
  const state = useSelector((state) => state);
  const { artist } = state.search;
  const dispatch = useDispatch();
  let { id } = useParams();

  let api = helpHttp();
  let url = "https://genius.p.rapidapi.com";

  useEffect(() => {
    getArtistLocal(id);
  }, [id]);

  const getArtistLocal = (id) => {
    setLoading(true);
    let endpoint = `${url}/artists/${id}`;
    api.get(endpoint).then((res) => {
      if (!res.err) {
        dispatch(getArtist(res.response.artist));
        setError(null);
      } else {
        setError(res);
      }
      setLoading(false);
    });
  };

  return (
    <div className="container columns">
      <div className="column is-offset-5-desktop is-offset-3-tablet is-4-desktop is-6-tablet">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={artist.image_url} alt="Artist" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={artist.header_image_url} alt="Artist" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{artist.name}</p>
                <p className="subtitle is-6">
                  Facebook <strong>{artist.facebook_name}</strong> <br />
                  Twitter <strong>{artist.twitter_name}</strong>
                </p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <br />
              <a href={artist.url}>{artist.name}</a>
              <br />
              <time>11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artist;
