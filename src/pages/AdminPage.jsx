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
          <input type="text" />
        </p>
        <p style={styleP}>
          Description :
          <input type="text" />
        </p>
        <p style={styleP}>
          Url de l'image :
          <input type="text" />
        </p>
        <p style={styleP}>
          date :
          <input type="text" />
        </p>
        <button
          type="submit"
        >
          Ajouter
        </button>
      </form>
    </>
  );
};

export default AdminPage;
