import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export async function getContacts() {
  try {
    const { data } = await axios.get("/contacts");
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function addContactsRequest(newObject) {
  try {
    const { data } = await axios.post("/contacts", newObject);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteContactsRequest(id) {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.error(error);
  }
}
