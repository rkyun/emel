class ShoeModel {
  constructor(shoeId, toe, tab){
    this.key = new Date().getTime().toString();
    this.shoeId = shoeId;
    this.toe = toe;
    this.tab = tab;
  }
}

module.exports = ShoeModel;