import React from "react";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";
const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();
  console.log(cocktails);
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length === 0) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return <div>CocktailList</div>;
};

export default CocktailList;
