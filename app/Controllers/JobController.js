import _jobService from '../Services/JobService.js'
import _store from '../store.js'
import store from "../store.js"

function _drawJobs() {
  let template = ''
  let jobs = _store.State.jobs

  jobs.forEach(job => template += job.Template)
  document.getElementById("jobs").innerHTML = template
}

export default class JobController {
  constructor() {
    console.log("job controller works")
    store.subscribe('jobs', _drawJobs)
  }

  create(event) {
    event.preventDefault()
    let formData = event.target
    let newJobObject = {
      company: formData.company.value,
      jobTitle: formData.jobTitle.value,
      hours: formData.hours.value,
      rate: formData.rate.value,
      description: formData.description.value
  }
  _jobService.create(newJobObject)
  formData.reset()
  $('#add-job-modal').modal('toggle')
}


delete(jobId) {
  _jobService.delete(jobId)
}

}