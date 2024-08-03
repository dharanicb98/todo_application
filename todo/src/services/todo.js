import axios from 'axios';


const baseUrl = process.env.REACT_APP_BASE_URL ||  'http://localhost:5000'

const getToken = () => {
  return localStorage.getItem('token');
};

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear the token from localStorage
      localStorage.removeItem('token');
      // Redirect to the sign-in page using window.location
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

export const getTodos = async () => {
    const response = await axiosInstance.get(`/api/todos`);
    return response?.data;
};

export const createTodo = async (body) => {
  const response = await axiosInstance.post(`/api/todos`, body);
  return response?.data;
};

export const updateTodo = async (id, body) => {
  const response = await axiosInstance.put(`/api/todos/${id}`, body);
  return response?.data;
};

export const deleteTodo = async (id) => {
  const response = await axiosInstance.delete(`/api/todos/${id}`);
  return response?.data;
};