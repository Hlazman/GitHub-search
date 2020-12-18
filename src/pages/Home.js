import React, { Fragment, useContext } from "react";
import { Search } from "../components/Search";
import { Cards } from "../components/Cards";
import { GithubContext } from "../context/github/GithubContext";

export const Home = () => {
  const { loading, users } = useContext(GithubContext);

  return (
    <Fragment>
      <Search />
      <div className="row">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          users.map((user) => (
            <div className="col-sm-4 mb-4" key={user.id}>
              <Cards user={user} />
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};