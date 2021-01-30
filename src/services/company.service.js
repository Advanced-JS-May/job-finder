import { createData, getData, updateData } from "./manipulateDB.service";

export const createCompany = (data, uid) => createData("/company/", data, uid);

export const getCompanyById = (uid) => getData("/company/", uid);

export const getProfileById = (path, id) => getData(path, id);

export const updateProfileInfo = (id, data) => updateData("company", id, data);