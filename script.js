class Conta {
  constructor(numero, titular, saldo) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
  }

  // Método para depositar
  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$ ${valor} realizado com sucesso!!!`);
    } else {
      console.log("O valor depósitado deve ser maior que zero!!!");
    }
  }

  // Criando o método de consulta de saldo da conta
  consultarSaldo() {
    console.log(
      `Conta: ${this.numero} - Titular: ${this.titular} - Saldo: R$ ${this.saldo}`
    );
  }
}

const conta1 = new Conta(101, "José", 100);
const conta2 = new Conta(102, "Maria", 200);

// console.log(conta1)

conta1.consultarSaldo();
conta2.consultarSaldo();
