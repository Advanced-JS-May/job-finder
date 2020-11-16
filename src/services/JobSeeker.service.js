import { createData, getData } from './manipulateDB.service';

export const createJobSeeker = (data, uid) =>
  createData('/job-seeker/', data, uid);

export const getJobSeeker = (uid) => getData('/job-seeker/', uid);
