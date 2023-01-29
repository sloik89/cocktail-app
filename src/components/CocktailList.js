import React from "react";
import Loading from "../components/Loading";
import Cocktail from "./Cocktail";

import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();
  console.log(cocktails);
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length === 0) {
    return (
      <div className="title-wrapper">
        <h2 className="section-title">
          no cocktails matched your search criteria
        </h2>
      </div>
    );
  }
  return (
    <div className="cocktails-list">
      <h2 className="cocktail-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
