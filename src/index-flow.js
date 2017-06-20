// @flow

const {log} = console;

//////////

const String: string = 'Hola Mundo!';
const Number: number = 8;

const receiveNumber = (number: number): number => number;

[Number, String].forEach((el: any): void => log(receiveNumber(parseInt(el, 10))));

//////////

const token: number = 666;
const tokenString: string = '666';

const validateToken = (token: number): void => {
  log(`Tenemos un token válido: ${token}`);
};

[token, tokenString].forEach((el: any): void => validateToken(parseInt(el, 10)));
