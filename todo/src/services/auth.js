import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL ||  'http://localhost:5000'

export const signUpUser = async ( body) => {
  const response = await axios.post(baseUrl + `/api/auth/register`, body  )
  return response?.data
}

export const signInUser = async ( body ) => {
  const response = await axios.post(baseUrl + `/api/auth/login`, body )
  return response?.data
}