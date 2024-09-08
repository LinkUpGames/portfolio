import { AppContext } from "@/AppContext";
import { GET_CONTRIBUTIONS } from "@/clients/GithubQuery";
import { useQuery } from "@apollo/client";
import { useContext, useMemo, useState } from "react";

/**
 * The github window that shows the user that is inputted data
 */
const Github = () => {
  // CONSTANTS
  const { changePopup } = useContext(AppContext);

  // STATES
  const [userName, setUserName] = useState("LinkUpGames"); // This is the user that we want to get the contributions

  // QUERIES
  /**
   * Get all of the contrubutions for a user based on weeks
   */
  const {
    data: contributionData,
    loading: contributionLoading,
    error: contributionError,
  } = useQuery(GET_CONTRIBUTIONS, {
    variables: {
      userName: userName,
    },
    fetchPolicy: "cache-first",
    nextFetchPolicy: "cache-first",
  });

  // MEMOS
  /**
   * The contributions that this user
   *
   * Returns the total contributions and also aggregates the contribution by date
   */
  const contributions = useMemo<Contributions>(() => {
    if (contributionData && contributionData.user) {
      const data = contributionData.user;
      const total =
        data.contributionsCollection.contributionCalendar.totalContributions;
      const weeks: any[] =
        data.contributionsCollection.contributionCalendar.weeks[
          data.contributionsCollection.contributionCalendar.weeks.length - 1
        ].contributionDays;

      const days = weeks.slice(0, 10).map((week) => ({
        total: week.contributionCount,
        date: week.date,
      }));

      return {
        total: total,
        contrbutions: days,
      };
    } else {
      return {
        total: 0,
        contrbutions: [],
      };
    }
  }, [contributionData]);

  return (
    <div>
      <p>Total Contributions: {contributions.total}</p>
    </div>
  );
};

export default Github;
