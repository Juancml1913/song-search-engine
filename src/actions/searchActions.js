import { GET_ARTIST, GET_SONG, GET_SONGS, NO_DATA } from "../types";

export const getSongs = (data) => ({ type: GET_SONGS, payload: data });
export const noData = () => ({ type: NO_DATA });
export const getArtist = (data) => ({ type: GET_ARTIST, payload: data });
export const getSong = (data) => ({ type: GET_SONG, payload: data });
