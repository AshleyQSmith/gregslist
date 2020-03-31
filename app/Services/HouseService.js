import House from "../Models/House.js"
import _store from '../store.js'
import store from "../store.js"

let _api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/houses',
  timeout: 3000
})


class HouseService {

  delete(houseID) {
    _api.delete(houseID)
      .then(res => {this.getHouses()})
      .catch(err => console.error(err))
  }

create(newHouseObj) {_api.post('', newHouseObj)
.then(res => {
  let newHouse = new House(res.data.data)
    let houses = [newHouse, ...store.State.houses]
    store.commit('houses', houses)})
    .catch(err => console.error(err))
  }

  constructor(){
    console.log('house service works')
    this.getHouses()
  }

  bid(houseID) {
    let foundHouse = store.State.houses.find(house => house.id == houseID)
    if(foundHouse) {
        foundHouse.price += 100
        _api.put(houseID, foundHouse)
          .then(res => {
            this.getHouses()})
            .catch(err => console.error(err))
    }
  }

  getHouses(){
    _api.get()
      .then(res => {
        let houses = res.data.data.map(rawHouseData => new House(rawHouseData))
        store.commit('houses', houses)})
        .catch(err => console.error(err))
  }


}

const HOUSESERVICE = new HouseService()
export default HOUSESERVICE