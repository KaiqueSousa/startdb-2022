class Forca {

  vidas = 6;
  estado = "aguardando chute";
  letrasChutadas = [];
  palavra = [];
  letra = /([a-z])/;

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.palavra = Array(this.palavraSecreta.length).fill('_');
  }

  chutar(letra) {

    if (this.verificarCaracter(letra)) {
      if (!this.palavraSecreta.includes(letra)) {
        this.vidas--;
      } else {
        for (let i = 0; i < this.palavraSecreta.length; i++) {
          if (this.palavraSecreta[i] === letra) {
            this.palavra[i] = letra;
          }
        }
      }
      return;
    }

  }

  verificarCaracter(letra) {
    letra = letra.toLowerCase();

    if (!this.letra.test(letra)) {
      console.log("\nDigite uma letra válida!\n");
      return;
    } else {
      return this.verificarLetra(letra);
    }
  }

  verificarLetra(letra) {
    if ((letra.length > 1) || (this.letrasChutadas.includes(letra))) {
      console.log("\nA letra já foi chutada ou você digitou mais de uma letra!\n");
      return;
    } else {
      this.letrasChutadas.push(letra);
      return true;
    }
  }

  buscarEstado() {

    if (this.vidas === 0) {
      this.estado = "perdeu";
    } else if (this.palavra.join('') === this.palavraSecreta) {
      this.estado = "ganhou";
    } else {
      this.estado = "aguardando chute";
    }

    return this.estado;

  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {

    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }


}

module.exports = Forca;
