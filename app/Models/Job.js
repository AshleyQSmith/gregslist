export default class Job {

  constructor(data){
    this.id = data.id || data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.rate = data.rate
    this.hours = data.hours
    this.description = data.description || "No description provided."
  }

  get Template(){
    return /*html*/`
    <div class="col-3 border border-dark rounded shadow mx-2 my-2">
      <h3>${this.jobTitle}</h3>
      <h5>Employer: ${this.company}</h5>
      <h6>Expected ${this.hours} hours, at $${this.rate}/hr</h6>
      <h6>${this.description}</h6>
      <button type="button" class="btn btn-danger btn-block" onclick="app.jobController.delete('${this.id}')">Delete</button>

      </div>`
  }

}