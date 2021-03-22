import axios from "axios";

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/'
});

export const DEFAULT_QUERY = {
  ts: '1616178722',
  apikey: 'b2f5122b38e02562908f22993443b897',
  hash: '25b45fcfae7e07d92e36e72f5080b808'
}

