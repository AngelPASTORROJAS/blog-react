import { useContext } from "react";
import { context } from "./../reduces/provider";
import State from "../models/State";

const HomePage = () => {
  /**
   * @type {[State, any]}
   */
  const [state, dispatch] = useContext(context);
  return (
    <>
      <br />
      {state.articles.map((article) => (
        <article style={{ display: "flex", flexWrap: "wrap" }}>
          <img
            style={{ margin: "10px" }}
            width="300px"
            src={article.image}
            alt=""
          />
          <div>
            <h2 style={{ margin: "10px", color: "red" }}>{article.titre}</h2>
            <p style={{ margin: "10px", color: "red" }}>
              {article.description}
            </p>
            <p style={{ margin: "10px", color: "red" }}> {article.date} </p>
          </div>
        </article>
      ))}
    </>
  );
};
export default HomePage;
