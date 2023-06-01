import Article from "../models/Article";
/**
 * @param {Article[]} articles
 * @param {number} count
 */
const initialState = {
  count: 0,
  articles: [
    { titre: "titre1", image: "https://www.autour-dumonde.fr/sx-content/uploads/cms/img-presentation-1.jpg", description: "desc1", date: "date1" },
    { titre: "titre2", image: "https://ressources.regionsjob.com/seo/ObsJob/conseiller-voyages.jpg", description: "desc2", date: "date2" }
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "Ajout d'aticle":
      return { ...state, articles:articles.push(action.article)}
    default:
      state;
  }
};
export { initialState, reducer };
