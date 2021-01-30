import { database } from "../libraries/firebase";

export default  function createJob (job) {
    return database.ref('jobs/' + job.jobId).set(job);
  }
