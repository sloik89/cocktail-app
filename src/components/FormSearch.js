import React from "react";
import { useGlobalContext } from "../context";

const FormSearch = () => {
  const value = useGlobalContext();

  const { loading } = useGlobalContext();
  console.log(loading);
  if (loading) {
  }
  return (
    <form className="search">
      <label htmlFor="search-input">Type somtheing</label>
      <input type="text" name="search-input" />
    </form>
  );
};

export default FormSearch;
