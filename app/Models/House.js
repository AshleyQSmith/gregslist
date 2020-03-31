export default class House {
  constructor(data) {
    this.id = data.id || data._id
    this.imgUrl = data.imgUrl
    this.beds = data.bedrooms
    this.baths = data.bathrooms
    this.year = data.year
    this.price = data.price
    this.levels = data.levels
    this.description = data.description || "No description provided."
  }

  get Template() {
    return /*html*/ `
    <div class="col-3 border border-dark rounded shadow mx-2 my-2">
      <img class="img-fluid" src="${this.imgUrl}" />
      <h5>${this.beds} Bed/${this.baths} Bath</h5>
      <h6>${this.year} ${this.levels} Level Home</h6>
      <h6>$${this.price}</h6>
      <h6>${this.description}</h6>
      <button class="btn btn-danger btn-block" onclick="app.houseController.delete('${this.id}')">Delete</button>
      <button type="button" class="btn btn-success btn-block" onclick="app.houseController.bid('${this.id}')">Bid</button>
    </div>`
  }


}