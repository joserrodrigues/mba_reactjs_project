import api from "../Common/api";

const getPersons = () => api.get("/simplePersons/");
const updatePersons = (id, payload) => api.put("/simplePersons/" + id, payload);
const addPersons = (payload) => api.post("/simplePersons/", payload);

const exportedObject = {
  getPersons,
  updatePersons,
  addPersons
};
export default exportedObject;
