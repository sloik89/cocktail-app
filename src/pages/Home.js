import React from "react";
import FormSearch from "../components/FormSearch";
import CocktailList from "../components/CocktailList";
const Home = () => {
  return (
    <main className="main">
      <FormSearch />
      <CocktailList />
    </main>
  );
};

export default Home;
