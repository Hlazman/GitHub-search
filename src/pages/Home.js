import React, { Fragment } from "react";
import { Search } from "../components/Search";
import { Cards } from "../components/Cards";

export const Home = () => {
  const card = new Array(10).fill("").map((item, index) => {
    return index;
  });

  return (
    <Fragment>
      <Search />
      <div className="row">
        {card.map((card) => {
          return (
            <div className="col-sm-4 mb-4" key={card}>
              <Cards />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};