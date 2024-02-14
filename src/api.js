import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchPeople = async () => {
  try {
    const response = await apiService.get("/people");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPerson = async (personData) => {
  try {
    const response = await apiService.post("/people", personData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchFamilies = async () => {
  try {
    const response = await apiService.get("/families");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createFamily = async (familyData) => {
  try {
    const response = await apiService.post("/families", familyData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
