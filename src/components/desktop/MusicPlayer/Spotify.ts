import axios, { AxiosError } from "axios";

/**
 * Checks if we have an auth token from spotify or if we need to request one
 */
const checkAuthToken = async () => {
  let token = localStorage.getItem("spotify-token");

  try {
    if (!token) {
      const { access_token: newToken } = await getAuthToken();

      token = newToken;

      localStorage.setItem("spotify-token", newToken);
    } else {
      await axios.get(
        "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      const status = error.response?.status;

      if (status === 401) {
        console.log("HERE");
        const { access_token: newToken } = await getAuthToken();

        token = newToken;

        localStorage.setItem("spotify-token", token);
      }
    }

    console.error("Error in checkAuthToken: ", error);
  }

  return {
    token: token,
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
export const getPlaylist = async (
  id: string,
): Promise<MusicPlaylist | null> => {
  try {
    const { token } = await checkAuthToken();

    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          fields: "name,id,tracks.items(track(name,href,id,album(images))",
        },
      },
    );

    const data = response.data;

    const playlist: MusicPlaylist = {
      name: data.name,
      id: data.id,
      tracks: data.tracks.items.map((item: any) => ({
        link: item.track.href,
        id: item.track.id,
        name: item.track.name,
        images: item.track.album.images,
      })),
    };

    return playlist;
  } catch (error) {
    console.error("Error getting the playlist: ", error);

    if (error instanceof AxiosError) {
      const status = error.response?.status;

      if (status === 401) {
        localStorage.removeItem("spotify-token");
      }
    }

    return null;
  }
};
