import { useContext } from "react";
import { context } from "../reduces/provider";

const Button = () => {
  const [state, dispatch] = useContext(context);
  return (
    <button
      onClick={() => {
        dispatch({ type: "ADD" });
      }}
    >
      Ajouter
    </button>
  );
};
export default Button