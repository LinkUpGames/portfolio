import { useEffect, useState } from "react";

/**
 * Check for a specific media query and if the app currently matches it
 *
 * @param query The media query to test
 *
 * For example `(min-width: 768px)`
 */
const useMediaQuery = (query: string) => {
  const [match, setMatch] = useState<boolean>(false); // check whether the current app matches the media query

  /**
   * Attach the listener to any browser width changes
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = () => setMatch(mediaQuery.matches);

    handleChange(); // Initial check
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return match;
};

export default useMediaQuery;
