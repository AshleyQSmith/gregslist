import Job from "../Models/Job.js"
import _store from '../store.js'
import store from "../store.js"

let _api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/jobs',
  timeout: 3000
})

class JobService {
  delete(jobId){
    _api.delete(jobId)
    .then(res => {this.getJobs()})
    .catch(err => console.error(err))
  }

  create(newJobObject) {_api.post('', newJobObject)
    .then(res => {
      let newJob = new Job(res.data.data)
        let jobs = [newJob, ...store.State.jobs]
        store.commit('jobs', jobs)})
        .catch(err => console.error(err))
  }

  constructor(){
    console.log('job service works')
    this.getJobs()
  }

  getJobs(){
    _api.get()
      .then(res => {
        let jobs = res.data.data.map(rawJobData => new Job(rawJobData))
        store.commit('jobs', jobs)})
        .catch(err => console.error(err))
    }
}

const JOBSERVICE = new JobService()
export default JOBSERVICE