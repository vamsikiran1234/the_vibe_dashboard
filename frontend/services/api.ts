import axios from 'axios';

/**
 * Axios instance with base configuration
 * Configured with base URL, timeout, and default headers
 */
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request interceptor
 * Can be used to add authentication tokens or modify requests
 */
api.interceptors.request.use(
  (config) => {
    // Add auth tokens here if needed in the future
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor
 * Handles errors globally and passes through successful responses
 */
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Error handling is done at component level for better UX
    return Promise.reject(error);
  }
);

export default api;
