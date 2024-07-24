import axios from "axios";
import { DateTime } from "luxon";

/**
 * Checks if we have an auth token from spotify or if we need to request one
 */
const checkAuthToken = async () => {
  let token = localStorage.getItem("spotify-token");
  let expire = localStorage.getItem("spotify-token-expire");

  // We don't have a token available
  if (!expire) {
  } else {
    const now = DateTime.now();
    const expireDate = DateTime.fromMillis(parseInt(expire));

    if (now > expireDate) {
      const { access_token: newToken } = await getAuthToken(); // Get a new auth token
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

    console.log("Data: ", response.data);
  } catch (error) {
    console.error("Error sending auth request to spotimeme: ", error);
  }

  return {
    access_token: access_token,
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

    console.log("Data: ", response.data);
  } catch (error) {
    console.error("Error refreshing token: ", error);
  }
};
