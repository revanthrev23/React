import React, { useEffect } from "react";
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateValue } from "./StateProvider";


const spotify = new SpotifyWebApi();

function App() {

  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){

      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
    }

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists,
      });
    });

    spotify.getPlaylist('3kVm6DlIKL2I6ik4kj9duV').then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });

  }, [token, dispatch]);

  // console.log('I am', user);
  console.log('I HAVE A TOKEN -> ', token);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
