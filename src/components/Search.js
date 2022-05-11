import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, noData } from "../actions/searchActions";
import { helpHttp } from "../helpers/helpHttp";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Message from "./Message";
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
    let endpoint = `${url}/search?q=Tigres del norte`;
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

  return (
    <>
      <SearchBar getSongsLocal={getSongsLocal} />
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      {songs.length > 0 && <CardContainer songs={songs} />}
    </>
  );
}

export default Search;
