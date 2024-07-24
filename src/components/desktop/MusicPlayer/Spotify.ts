import axios from "axios";
import { DateTime } from "luxon";

/**
 * Checks if we have an auth token from spotify or if we need to request one
 */
const checkAuthToken = async () => {
  let token = localStorage.getItem("spotify-token");
  let expire = parseInt(localStorage.getItem("spotify-token-expire") ?? "-1");

  // We don't have a token available
  if (expire === -1) {
    const { access_token: newToken, expires_in: newExpire } =
      await getAuthToken(); // Get a new token

    token = newToken;
    expire = DateTime.now().plus({ minute: newExpire }).toMillis();

    localStorage.setItem("spotify-token", token);
    localStorage.setItem("spotify-token-expire", expire.toString());
  } else {
    // Check if we need a new token
    const now = DateTime.now();
    const expireDate = DateTime.fromMillis(expire);

    // The token has expired
    if (now > expireDate) {
      const { access_token: newToken, expires_in: newExpire } =
        await getAuthToken(); // Get a new auth token
      token = newToken;
      expire = DateTime.now().plus({ minute: newExpire }).toMillis();

      localStorage.setItem("spotify-token", token);
      localStorage.setItem("spotify-token-expire", expire.toString());
    }
  }

  return {
    token: token,
    expire: expire,
  };
};

/*
 * Requests an auth token from spotify and it's ttl
 */
export const getAuthToken = async () => {
  let access_token = "";
  let expires_in = -1;
  try {
    const token = btoa(
      `${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`,
    );

    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        grant_type: "client_credentials",
      },
      {
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const data = response.data;

    access_token = data.access_token;
    expires_in = data.expires_in;
  } catch (error) {
    console.error("Error sending auth request to spotimeme: ", error);
  }

  return {
    access_token: access_token,
    expires_in: expires_in,
  };
};

/**
 * Get a refresh token
 * @param refreshToken The refresh token
 *       */
export const getRefreshToken = async (refreshToken: string) => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: import.meta.env.VITE_CLIENT_ID,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const data = response.data;

    return {
      refresh_token: data.refresh_token,
    };
  } catch (error) {
    console.error("Error refreshing token: ", error);
  }
};

/**
 * Get the playlist based on id
 * @param id The playlist
 */
export const getPlaylist = async (id: string) => {
  const { token } = await checkAuthToken();

  const response = await axios.get(
    "https://api.spotify.com/v1/playlists/6Zhw3L9LG0jKIPvZheyIjf",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        fields: "name,id,tracks.items(track(name,href,id))",
      },
    },
  );

  console.log("response: ", response.data);
};
