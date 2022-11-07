export const __prod__ = process.env.NODE_ENV !== 'production';
// это для пакета с firebase functions из папки server-ts-functions
// прикольно что в случае CRA все переменные попадающие в приложение должны начинаться с REACT_APP_
// сами переменные беру из client/.env
export const __emulate__ = Boolean(process.env.REACT_APP_EMULATE);

console.log({ __emulate__ });

export const API_BASE_URL = __emulate__
    ? 'http://127.0.0.1:5001/maximprosv-server-ts/us-central1/functionsApp'
    : 'http://localhost:3005';
export const API_PATH = '/api/v1';
