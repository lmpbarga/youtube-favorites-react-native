import axios from "axios";

const apiKey = "AIzaSyBbti8DZ82QcQexILVidcmEd_fS5Dtymf0";

const suggestqueriesGoogle = (query: string) =>
  `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;

const googleApiYoutube = (query: string) =>
  `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}&maxResults=10`;

const getSuggestedQueries = (query: string) => {
  return axios.get(suggestqueriesGoogle(query));
};

const getYoutubeVideos = (query: string) => {
  return axios.get(googleApiYoutube(query));
};

export const api = {
  getSuggestedQueries,
  getYoutubeVideos,
};
