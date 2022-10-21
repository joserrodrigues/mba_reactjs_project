import api from "../Common/api";

const getPersons = () => api.get("/persons/getPersons");
// const getPersons = (payload) =>
//   api.post("/persons/getPersons", payload, { headers: { "Content-Type": "application/json" } });

const exportedObject = {
  getPersons,
};
export default exportedObject;
