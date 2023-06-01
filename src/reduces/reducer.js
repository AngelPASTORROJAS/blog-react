import Article from "../models/Article";
import State from "../models/State";

const initialState = new State(
 {
  count: 0,
  articles: [
    { titre: "titre1", image: "https://www.autour-dumonde.fr/sx-content/uploads/cms/img-presentation-1.jpg", description: "desc1", date: "10/10/2021" },
    { titre: "titre2", image: "https://ressources.regionsjob.com/seo/ObsJob/conseiller-voyages.jpg", description: "desc2", date: "10/12/2023" }
  ],
  newArticle:new Article()
});

/**
 * @param {State} state 
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "Ajout d'article":
      return { ...state, articles:[]}
    default:
      break;
  }
};
export { initialState, reducer };
