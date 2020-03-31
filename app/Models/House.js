export default class House {
  constructor(data) {
    this.address = data.address
    this.price = data.price
    this.beds = data.beds
    this.baths = data.baths
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided."
  }

  getTemplate(index) {
    return /*html*/ `
    <div class="col-4 border border-info rounded shadow">
      <h1>Address: ${this.address}</h1>
      <h5>Price: ${this.price}</h5>
      <h5>Bedrooms: ${this.beds}</h5>
      <h5>Bathrooms: ${this.baths}</h5>
      <img class="img-fluid" src="${this.imgUrl}" />
      <button class="btn btn-danger btn-block" onclick="app.houseController.delete(${index})">Delete</button>
    </div>`
  }


}