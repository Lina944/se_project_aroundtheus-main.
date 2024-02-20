export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this.name = name;
    this.link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }
  
  _setEventListeners() {
    this._cardHeartButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._cardEl
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._cardEl.remove();
      });

    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick(this);
    });
  }

  _handleLikeIcon() {
    this._cardHeartButton.classList.toggle("card__like-button-plus_active");
  }

  _handleRemoveCard() {
    this._cardEl.remove();
    this._cardEl = null;
  }

  getView() {
    this._cardEl = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._cardImageEl = this._cardEl.querySelector(".card__picture");
    this._cardTitle = this._cardEl.querySelector(".card__text");
    this._cardHeartButton =
      this._cardEl.querySelector(".card__like-button-plus");
      
      this._cardRemoveButton =
      this._cardEl.querySelector(".card__delete-button");

    this._cardImageEl.src = this.link;
    this._cardImageEl.alt = this.name;
    this._cardTitle.textContent = this.name;

    this._setEventListeners();

    return this._cardEl;
  }
}
