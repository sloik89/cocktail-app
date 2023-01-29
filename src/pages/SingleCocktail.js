import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [singleCocktail, setSingleCocktail] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchDrink = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const { drinks } = data;

      const {
        idDrink,
        strAlcoholic: alcohol,
        strCategory: category,
        strDrink: name,
        strDrinkThumb: image,
        strGlass: glass,
        strInstructions: info,
        strIngredient1: ing1,
        strIngredient2: ing2,
        strIngredient3: ing3,
        strIngredient4: ing4,
      } = drinks[0];
      const ingriedents = [ing1, ing2, ing3, ing4];
      const newCocktail = {
        idDrink,
        alcohol,
        category,
        name,
        image,
        glass,
        info,
        ingriedents,
      };
      setSingleCocktail(newCocktail);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDrink();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!singleCocktail) {
    return (
      <section className="title">
        <h2>There is no cocktail to display</h2>
      </section>
    );
  }
  const { idDrink, alcohol, category, name, image, glass, info, ingriedents } =
    singleCocktail;
  return (
    <div className="single-cocktail-wrapper">
      <Link to="/" className="btn-details back">
        go back
      </Link>
      <div className="single-cocktail">
        <div className="single-cocktail-img">
          <img src={image} alt="" />
        </div>
        <div className="coltail-info">
          <p>
            <span className="drink-data">Name:</span>
            <span>{name}</span>
          </p>
          <p>
            <span className="drink-data">Category:</span>
            <span>{category}</span>
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            <span>{glass}</span>
          </p>
          <p>
            <span className="drink-data">Instruction:</span>
            <span>{info}</span>
          </p>
          <p className="ingridients">
            <span className="drink-data">Ingridients:</span>

            {ingriedents.map((item, idx) => {
              return item ? (
                <span className="ing" key={idx}>
                  {item}
                </span>
              ) : null;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
