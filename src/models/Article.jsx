/**
 * Interface pour décrire les propriétés d'un article.
 * @interface
 */
function ArticleProperties() {}

/**
 * Le titre de l'article.
 * @type {string}
 */
ArticleProperties.prototype.titre = "";

/**
 * L'url de l'image.
 * @type {string}
 */
ArticleProperties.prototype.image = "";

/**
 * La description de l'article.
 * @type {string}
 */
ArticleProperties.prototype.description = "";

/**
 * La date de publication.
 * @type {string}
 */
ArticleProperties.prototype.date = "";


/**
 * Classe représentant un article.
 */
class Article {
  constructor() {
    this.titre = "";
    this.image = "";
    this.description = "";
    this.date = "";
  }
}

export default Article;
