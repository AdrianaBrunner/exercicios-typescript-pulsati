// Tipos primitivos: number, string, boolean, null, undefined

let numero: number;
numero = 1;

let texto: string;
texto = '1';

let valor: boolean;
valor = false;

// Tipos complexos: Object, Array, Function
const arr: Array<number> = [1, 2, 3];

const obj: { nome: string; cpf: string } = {
  nome: 'XPTO', cpf: '123.123.123-45'
};

const func = () => {
  console.log('XPTO');
}