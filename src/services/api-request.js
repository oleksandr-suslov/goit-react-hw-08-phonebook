import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export async function getContacts() {
  try {
    const { data } = await axios.get("/contacts");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function addContactRequest(newContact) {
  try {
    const { data } = await axios.post("/contacts", newContact);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteContactRequest(id) {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.error(error);
  }
}
