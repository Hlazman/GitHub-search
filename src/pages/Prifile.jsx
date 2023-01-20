import React, { Fragment, useContext, useEffect } from "react";
import { GithubContext } from "../context/github/GithubContext";
import { Link, useParams } from "react-router-dom";
import { Repos } from "../components/Repos";

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const { name: prifile } = useParams();

  useEffect(() => {
    getUser(prifile);
    getRepos(prifile);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        {" "}
        back home
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img className="shadow rounded" src={avatar_url} alt={name} style={{ width: "250px" }} />
              <h1 className="mt-4" style={{ fontSize: "30px" }}>{name}</h1>
              {location && <p> Location: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a 
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mb-3"
              >
                Open Profile
              </a>
              <ul>
                {login && (
                  <li>
                    <strong> Username: </strong> {login}
                  </li>
                )}

                {company && (
                  <li>
                    <strong> Company: </strong> {company}
                  </li>
                )}

                {blog && (
                  <li>
                    <strong> Website: </strong> {blog}
                  </li>
                )}
              </ul>

              <div className="badge badge-primary mr-2"> Followers: {followers}</div>
              <div className="badge badge-success mr-2"> Following: {following}</div>
              <div className="badge badge-info mr-2">
                {" "}
                Repository: {public_repos}
              </div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};
