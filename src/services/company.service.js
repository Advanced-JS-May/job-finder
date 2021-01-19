import { createData, getData } from "./manipulateDB.service";

export const createCompany = (data, uid) => createData("/company/", data, uid);
