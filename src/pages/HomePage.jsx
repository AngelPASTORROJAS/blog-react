import { useContext } from "react";
import { context } from "./../reduces/provider";
import Button from "./../components/Button"

const HomePage = () => {
  const [state, dispatch] = useContext(context);
  return (
    <>
      <p style={{color:"white", font:"bold"}}>propriété count de contexte : {state.count}</p>
      <Button />
    </>
  );
};
export default HomePage;
