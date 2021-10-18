import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = "";
  },
};

export async function getContacts() {
  try {
    const { data } = await axios.get("/contacts");
    console.log("getContacts", data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addContactRequest(newContact) {
  try {
    const { data } = await axios.post("/contacts", newContact);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteContactRequest(id) {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    throw error;
  }
}

export async function registerNewUser(userData) {
  try {
    const { data } = await axios.post("/users/signup", userData);
    token.set(data.token);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function loginUser(userData) {
  try {
    const { data } = await axios.post("/users/login", userData);
    token.set(data.token);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function logOutUser() {
  try {
    const { data } = await axios.post("/users/logout");
    token.unset();
    // console.log("registerNewUser", userData);
    return data;
  } catch (error) {
    throw error;
  }
}

export const getCurrentUser = async (persistedToken) => {
  token.set(persistedToken);
  try {
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {
    throw error;
  }
};
