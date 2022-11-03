import axios from 'axios';

const BIGDATA_KEY = 'bdc_039d5fe4d0a542fe9c38f9ad5a068b36';

const instance = axios.create({
  baseURL: 'https://api.bigdatacloud.net/data/reverse-geocode',
  params: {
    key: BIGDATA_KEY,
    localityLanguage: 'en',
  },
});

export const fetchCityName = async (lat, long) => {
  const { data } = await instance(`?latitude=${lat}&longitude=${long}`);
  return data.city || data.locality;
};
