import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log("error while addUser API", error.message);
  }
};

export const getUsers = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    return response.data;
  } catch (error) {
    console.log("error while calling getUsers api", error.message);
  }
};

export const updateUserProfile = async (formData) => {
  try {
    const response = await axios.put(`${url}/editusers`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while calling updateUserProfile API:", error.message);
    throw error;
  }
};

export const updateUserLevel = async (email, score) => {
  try {
    const response = await axios.put(`${url}/updateLevel`, { email, score });
    return response.data;
  } catch (error) {
    console.error("Error while calling updateUserLevel API:", error.message);
    throw error;
  }
};

export const updateUserRecent = async (data) => {
  try {
    const res = await axios.put(`${url}/updateRecent`, data);
    return res.data;
  } catch (error) {
    console.error("Error while calling updateUserRecent API:", error.message);
  }
};
