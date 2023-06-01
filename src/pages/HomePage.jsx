import { useContext } from "react";
import { context } from "./../reduces/provider";
import Button from "./../components/Button";

const HomePage = () => {
  const [state, dispatch] = useContext(context);
  return (
    <>
      <p style={{ color: "white", font: "bold" }}>
        propriété count de contexte : {state.count}
      </p>
      <Button />
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
