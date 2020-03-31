import Car from "../Models/Car.js"
import _store from '../store.js'
import store from "../store.js"

let _api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/cars',
  timeout: 3000
})


class CarService {
  delete(carId) {
    _api.delete(carId)
      .then(res => {this.getCars()
      })
      .catch(err => console.error(err))
  }
  create(newCarObject) {_api.post('', newCarObject)
  .then(res => {
    let newCar = new Car(res.data.data)
        let cars = [newCar, ...store.State.cars]
        store.commit('cars', cars) })
        .catch(err => console.error(err))
  }
  constructor() {
    console.log("car service works")
    this.getCars()
  }

  bid(carId) {
    let foundCar = store.State.cars.find(car => car.id == carId)
    if (foundCar) {
      foundCar.price += 100
      _api.put(carId, foundCar)
        .then(res => {
          this.getCars()
        })
        .catch(err => console.error(err))
    }
  }

  getCars() {
    _api.get()
      .then(res => {
        let cars = res.data.data.map(rawCarData => new Car(rawCarData))
        store.commit('cars', cars)
        console.log(store.State);
      })
      .catch(err => console.error(err))
  }

}


const CARSERVICE = new CarService()
export default CARSERVICE