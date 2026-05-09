import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

export const getActivities = () => axios.get(`${BASE_URL}/activities/`);
export const addActivity = (data) => axios.post(`${BASE_URL}/activities/`,data);
export const getSummary = () => axios.get(`${BASE_URL}/summary/`);
export const deleteActivity = (id) => axios.delete(`${BASE_URL}/activities/${id}/`);