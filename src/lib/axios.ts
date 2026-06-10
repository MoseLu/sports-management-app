import axios, { type AxiosInstance } from 'axios';

// Replaces the legacy src/boot/axios.ts Quasar boot file. The instance
// is the single axios client used by the application; its baseURL can
// be overridden at build time via the `VITE_API_BASE` env variable.
export const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE ?? 'https://api.example.com',
});

export default api;
