import React, { useState, useEffect } from "react";
import GitHubProfile from "./GitHubProfile";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.github.com/users/aestheticsuraj234",
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return <GitHubProfile data={data} isLoading={isLoading} />;
};

export default App;
