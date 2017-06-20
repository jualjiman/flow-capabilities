const {log} = console;

//////////

const String = 'Hola Mundo!';
const Number = 8;

const receiveNumber = number => number;

[Number, String].forEach(el => log(receiveNumber(el)));

//////////

const token = 666;
const tokenString = '666';

const validateNumber = number => {
  if ('number' !== typeof number) {
    return new Error('Number not valid');
  }
};

const validateToken = token => {
  try {
    const error = validateNumber(token);
    if (error) throw error;
    log(`Tenemos un token válido: ${token}`);
  }
  catch (e) {
    log(`Algo salió terriblemente mal: ${e}`);
  }
};

[token, tokenString].forEach(el => validateToken(el));
