import { createData, getData } from "./manipulateDB.service";

export const createCompany = (data, uid) => createData("/company/", data, uid);

export const getCompanyById = (uid) => getData("/company/", uid);
