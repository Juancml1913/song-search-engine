import { GET_SONGS, NO_DATA } from "../types";

export const getSongs = (data) => ({ type: GET_SONGS, payload: data });
export const noData = () => ({ type: NO_DATA });
