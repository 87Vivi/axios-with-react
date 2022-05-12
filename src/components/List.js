import React from "react";

const List = (props) => {
  const { repos } = props; //here we are initializing a prop for the component called repos

  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;

  return (
    <ul>
      <h2 className="list-head">Available Public Repositories</h2>
      {repos.map((repo) => {
        //here we are mapping through each of the repositories that will be provided by the API request we make and extracting each of the repositories names and their descriptions, then we are displaying each of them in a list
        return (
          <li key={repo.id} className="list">
            <span className="repo-text">{repo.name}</span>
            <span className="repo-description">{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
