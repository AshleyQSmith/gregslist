export default class Car {
  constructor(data) {
    this.id = data.id || data._id
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided."
  }

  get Template() {
    return /*html*/ `
    <div class="col-4 border border-info rounded shadow">
      <h2>${this.make} ${this.model}</h2>
      <h6>Year: ${this.year}</h6>
      <h6>Price: ${this.price}</h6>
      <img class="img-fluid" src="${this.imgUrl}" />
      <button type="button" class="btn btn-danger btn-block" onclick="app.carController.delete('${this.id}')">Delete</button>
      <button type="button" class="btn btn-success btn-block" onclick="app.carController.bid('${this.id}')">Bid</button>
    </div>`
  }


}