import _houseService from '../Services/HouseService.js'
import _store from '../store.js'
import store from "../store.js"

function _drawHouses(){
  let template = ''
  let houses = _store.State.houses
  houses.forEach(house => template += house.Template)
  document.getElementById("houses").innerHTML = template
}



export default class HouseController {
constructor(){
  console.log("house controller works")
  store.subscribe('houses', _drawHouses)
}


create(event) {
  event.preventDefault()
  let formData = event.target
  let newHouseObj = {
    bedrooms: formData.beds.value,
    bathrooms: formData.baths.value,
    levels: formData.levels.value,
    year: formData.year.value,
    price: formData.price.value,
    imgUrl: formData.imgUrl.value,
    description: formData.description.value
  }

  _houseService.create(newHouseObj)
  formData.reset()
  $('#add-house-modal').modal('toggle')
  }

  delete(houseID) {
    _houseService.delete(houseID)
  }

  bid(houseID) {
    _houseService.bid(houseID)
  }
}


