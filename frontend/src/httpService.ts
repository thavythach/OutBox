import axios from 'axios';

const httpService = axios.create({
  baseURL: 'http://api.football-data.org',
  timeout: 1000,
  headers: {
    'X-Auth-Token': '6940876e78b64a2796cf2136cd60a124', // your account API Key
  },
});

export default httpService;