import { getData } from "./manipulateDB.service";

export const getJobById = (jobId) => getData("/jobs/", jobId);
