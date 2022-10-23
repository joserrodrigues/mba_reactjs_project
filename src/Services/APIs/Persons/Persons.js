import api from "../Common/api";

const getPersons = () => api.get("/simplePersons/");
const updatePersons = (id, payload) => api.put("/simplePersons/" + id, payload);

const exportedObject = {
  getPersons,
  updatePersons
};
export default exportedObject;
