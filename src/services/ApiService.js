import { create } from 'apisauce';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

import 'moment/locale/pt-br';
moment.locale('pt-BR');

import config from '../config/config';

import * as loginService from './LoginServices';

const api = create({
  baseURL: config.serviceUrl,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Access-Control-Allow-Origin": "*",
  }
});

api.addResponseTransform(res => {
  if (!res.ok) throw res;
});

api.addAsyncRequestTransform(request => async () => {
  const access_token = await AsyncStorage.getItem('@ENM:access_token');
  const expiresIn = await AsyncStorage.getItem('@ENM:expires_in');
  const now = moment().valueOf();

  if (moment(Number(expiresIn)).diff() < 10) {
    loginService.refreshToken();
  }

  if (access_token) {
    request.headers['Authorization'] = `Bearer ${access_token}`;
  } else {
    throw Error('Erro ao acessar o token.');
  }
});

export default api;
