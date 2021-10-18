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

// import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset(token) {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// const getContacts = () => {
//   return axios.get('/contacts').then(({ data }) => data);
// };

// const addContact = contact => {
//   return axios.post('/contacts', contact).then(({ data }) => data);
// };

// const deleteContact = id => {
//   return axios.delete(`/contacts/${id}`);
// };

// const editContact = ({ id, name, number }) => {
//   return axios
//     .patch(`/contacts/${id}`, { name, number })
//     .then(({ data }) => data);
// };

// const registerNewUser = async credentials => {
//   return axios.post('/users/signup', credentials).then(({ data }) => {
//     token.set(data.token);
//     return data;
//   });
// };

// const loginUser = credentials => {
//   return axios.post('/users/login', credentials).then(({ data }) => {
//     token.set(data.token);
//     return data;
//   });
// };

// const getCurrentUser = persistToken => {
//   token.set(persistToken);
//   return axios.get('/users/current').then(({ data }) => {
//     return data;
//   });
// };

// const logOutUser = () => {
//   axios.post('/users/logout');
//   token.unset();
// };

// const phoneBookApi = {
//   getContacts,
//   addContact,
//   deleteContact,
//   editContact,
//   registerNewUser,
//   loginUser,
//   getCurrentUser,
//   logOutUser,
// };
// export default phoneBookApi;
