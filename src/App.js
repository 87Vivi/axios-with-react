import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List";
import WithListLoading from "./components/WithListLoading";

function App() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://api.github.com/users/87Vivi/repos";
    axios.get(apiUrl).then((repos) => {
      //in this block of code, we are making a get request then we are returning a promise that contains the repos data and assigning the data to a constant variable called allRepos. We are the setting the current loading state to false and also passing the data from the request to the repo state variable
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

  return (
    <div className="App">
      <div className="container">
        <h1>My Repositories</h1>
      </div>
      {/* here we are basically just rendering the Component we assigned our higher-order component to and also filling the isLoading prop and repos prop with their state value */}
      <div>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
    </div>
  );
}

export default App;
