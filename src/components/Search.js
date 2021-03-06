import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import Artist from "./Artist";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, noData } from "../actions/searchActions";
import { helpHttp } from "../helpers/helpHttp";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Message from "./Message";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Error404 from "./Error404";
import Song from "./Song";
function Search() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { songs } = state.search;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let api = helpHttp();
  let url = "https://genius.p.rapidapi.com";

  useEffect(() => {
    setLoading(true);
    let endpoint = `${url}/search?q=guns and roses`;
    helpHttp()
      .get(endpoint)
      .then((res) => {
        if (!res.err) {
          dispatch(getSongs(res.response.hits));
          setError(null);
        } else {
          dispatch(() => noData());
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const getSongsLocal = (data) => {
    setLoading(true);
    let endpoint = `${url}/search?q=${data}`;
    api.get(endpoint).then((res) => {
      if (!res.err) {
        dispatch(getSongs(res.response.hits));
        setError(null);
      } else {
        setError(res);
      }
      setLoading(false);
    });
  };
  /*const getArtistLocal = (id) => {
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
  };*/

  return (
    <div>
      <HashRouter>
        <SearchBar getSongsLocal={getSongsLocal} />
        <nav className="breadcrumb container" aria-label="breadcrumbs">
          <ul>
            <li>
              <NavLink to="/">
                <span className="icon is-small">
                  <i className="fas fa-home" aria-hidden="true"></i>
                </span>
                <span>Home</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        <Routes>
          <Route
            exact
            path="/"
            element={songs.length > 0 && <CardContainer songs={songs} />}
          ></Route>
          <Route
            exact
            path="/artist/:id"
            element={<Artist setLoading={setLoading} setError={setError} />}
          />
          <Route
            exact
            path="/song/:id"
            element={<Song setLoading={setLoading} setError={setError} />}
          />
          <Route path="*" element={Error404} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Search;
