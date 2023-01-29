import React from "react";
import { useGlobalContext } from "../context";

const FormSearch = () => {
  const { setSearchTerm, searchTerm } = useGlobalContext();

  const { loading } = useGlobalContext();
  console.log(loading);
  if (loading) {
  }
  return (
    <form className="search">
      <label htmlFor="search-input">Type somtheing: </label>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        name="search-input"
        value={searchTerm}
        placeholder="search cocktails"
      />
    </form>
  );
};

export default FormSearch;
