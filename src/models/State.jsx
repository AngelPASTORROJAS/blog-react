import Article from "./Article";

/**
 * Interface pour décrire les propriétés d'un state.
 * @interface
 */
function StateProperties() {}

/**
 * La liste des articles.
 * @type {Article[]}
 */
StateProperties.prototype.articles = [];

/**
 * Le nombre de count.
 * @type {number}
 */
StateProperties.prototype.count = 0;

/**
 * Classe représentant un state.
 */
class State {
  /**
   * @param {StateProperties} props - Les propriétés du state.
   */
  constructor(props) {
    this.articles = props.articles;
    this.count = props.count;
  }
}
export default State;
