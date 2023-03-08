interface Pessoa {
  nome: string;
}

class PessoaFisica implements Pessoa {
  nome: string;
  cpf: string = '';

  constructor(nome?: string) {
    this.nome = nome || 'Não definido';
  }
}

class Adulto extends PessoaFisica {
  inss: string = '';
}

class PessoaJuridica implements Pessoa {
  nome: string;
  cnpj: string = '';

  constructor(nome?: string) {
    this.nome = nome || 'Não definido';
  }
}

let pessoa: Pessoa = new PessoaFisica();
console.log(pessoa.nome);

pessoa = new PessoaJuridica();
console.log(pessoa.nome);

const imprimeNome = (pessoa: Pessoa) => {
  console.log(pessoa.nome);
}

imprimeNome(pessoa);
