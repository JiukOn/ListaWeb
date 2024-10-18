// Exercício 1: Função Anônima
function exercicio1() {
    let nomeCompleto = function(nome, sobrenome) {
      return `${nome} ${sobrenome}`;
    }
    let resultado = nomeCompleto("Fabio", "Colombini");
    document.getElementById("ex1-result").innerText = `Resultado: ${resultado}`;
  }
  
  // Exercício 2: Arrow Function para calcular área do retângulo
  function exercicio2() {
    const calculaAreaRetangulo = (base, altura) => base * altura;
    let resultado = calculaAreaRetangulo(5, 10);  // Exemplo: base = 5, altura = 10
    document.getElementById("ex2-result").innerText = `Área do Retângulo: ${resultado}`;
  }
  
  // Exercício 3: Somar todos os elementos de um array
  function exercicio3() {
    let numeros = [10, 20, 30, 40, 50];
    let soma = numeros.reduce((total, numero) => total + numero, 0);
    document.getElementById("ex3-result").innerText = `Soma dos Números: ${soma}`;
  }
  
  // Exercício 4: Retornar números ímpares de um array
  function exercicio4() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let impares = numeros.filter(numero => numero % 2 !== 0);
    document.getElementById("ex4-result").innerText = `Números Ímpares: ${impares.join(", ")}`;
  }
  
  // Exercício 5: Manipular array de cidades
  function exercicio5() {
    let cidades = ["Sorocaba", "Piedade", "Votorantim"];
    cidades.unshift("São Paulo"); // Adiciona cidade no início
    cidades.pop(); // Remove última cidade
    document.getElementById("ex5-result").innerText = `Cidades Atualizadas: ${cidades.join(", ")}`;
  }
  
  // Exercício 6: Objeto aluno com método mostrarInformacoes
  function exercicio6() {
    let aluno = {
      nome: "João Pedro",
      idade: 20,
      curso: "Engenharia de Computação",
      matricula: "248172ff",
      mostrarInformacoes: function() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Matrícula: ${this.matricula}`;
      }
    }
    document.getElementById("ex6-result").innerText = aluno.mostrarInformacoes();
  }
  
  // Exercício 7: Função para encontrar o maior número em um array
  function exercicio7() {
    function encontraMaiorNumero(array) {
      return Math.max(...array);
    }
    let numeros = [10, 5, 22, 33, 12];
    let maior = encontraMaiorNumero(numeros);
    document.getElementById("ex7-result").innerText = `Maior Número: ${maior}`;
  }
  
  // Exercício 8: Objeto produto com método calcularTotal
  function exercicio8() {
    let produto = {
      nome: "Notebook",
      preco: 2345.6,
      quantidade: 7,
      calcularTotal: function() {
        return this.preco * this.quantidade;
      }
    }
    let total = produto.calcularTotal();
    document.getElementById("ex8-result").innerText = `Total do Produto: R$${total}`;
  }
  
  // Exercício 9: Exibir propriedades de um objeto endereço
  function exercicio9() {
    let endereco = {
      rua: "Rua das Flores",
      numero: 123,
      bairro: "Centro",
      cidade: "Sorocaba"
    };
    let resultado = "";
    for (let prop in endereco) {
      resultado += `${prop}: ${endereco[prop]}, `;
    }
    document.getElementById("ex9-result").innerText = resultado.slice(0, -2);
  }
  
  // Exercício 10: Filtrar alunos com idade maior que 18
  function exercicio10() {
    let alunos = [
      { nome: "Ana", idade: 19 },
      { nome: "Lucas", idade: 17 },
      { nome: "Marcos", idade: 20 },
      { nome: "Beatriz", idade: 16 }
    ];
    let alunosMaiores = alunos.filter(aluno => aluno.idade > 18);
    let nomesMaiores = alunosMaiores.map(aluno => aluno.nome);
    document.getElementById("ex10-result").innerText = `Alunos maiores de 18: ${nomesMaiores.join(", ")}`;
  }
  