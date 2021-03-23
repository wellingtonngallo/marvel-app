import axios from "axios";

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/'
});

export const DEFAULT_QUERY = {
  ts: '1616510515',
  apikey: '95253317406061977fae8f019b88840f',
  hash: 'fb8a57817ff46389cc2e15a7710c1e79'
}

