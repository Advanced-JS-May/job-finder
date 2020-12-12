import { createData, getData } from './manipulateDB.service';

export const createJobSeeker = (data, uid) =>
  createData('/job-seeker/', data, uid);

export const getJobSeekerById = (uid) => getData('/job-seeker/', uid);
