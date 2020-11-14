import { database } from "../libraries/firebase";

export default  function createJob (job) {
    return database.ref('jobs/' + job.id).set(job);
  }