import axios from 'axios';

const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

const instance = axios.create({
  baseURL: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchAllJobs = async () => {
  const { data } = await instance();
  return data;
};
