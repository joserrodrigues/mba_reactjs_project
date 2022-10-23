import api from "../Common/api";

const getPersons = () => api.get("/simplePersons/");
const updatePersons = (id, payload) => api.put("/simplePersons/" + id, payload);
const addPersons = (payload) => api.post("/simplePersons/", payload);
const deletePersons = (id) => api.delete("/simplePersons/" + id);

const exportedObject = {
  getPersons,
  updatePersons,
  addPersons,
  deletePersons
};
export default exportedObject;
