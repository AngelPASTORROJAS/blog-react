import { useContext } from "react";
import { context } from "./../reduces/provider";
import State from "../models/State";

const AdminPage = () => {
  /**
   * @type {[State, any]}
   */
  const [state, dispatch] = useContext(context);

  const styleP = { color: "white", font: "bold" };

  return (
    <>
      <p style={styleP}>Page admin</p>
      <form>
        <p style={styleP}>
          Titre :
          <input
          onChange={(e) =>
            dispatch({ type: "updateTitre", value: e.target.value })
          }
          value={state.titre} type="text" />
        </p>
        <p style={styleP}>
          Description :
          <input
          onChange={(e) =>
            dispatch({ type: "updateDescription", value: e.target.value })
          }
          value={state.description} type="text" />
        </p>
        <p style={styleP}>
          Url de l'image :
          <input
          onChange={(e) =>
            dispatch({ type: "updateImage", value: e.target.value })
          }
          value={state.image} type="text" />
        </p>
        <p style={styleP}>
          date :
          <input
          onChange={(e) =>
            dispatch({ type: "updateDate", value: e.target.value })
          }
          value={state.date} type="text" />
        </p>
        <button onClick={() => dispatch({ type: "Ajout d'article"})}>
          Ajouter
        </button>
      </form>
    </>
  );
};

export default AdminPage;
