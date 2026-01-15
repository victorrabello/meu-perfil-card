// Desafio 1: Soma de Dois Números

// function soma(a, b) {
//   return a + b;
// }
// console.log(soma(2, 3)); // Deve retornar 5

// Desafio 2: Verificação de Número Par

// function ehPar(num) {
//   // if (num % 2 === 0) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   Forma direta de se utilzar o IF
//   return num % 2 === 0 ? true : false;
// }
// console.log(ehPar(4)); // Deve retornar true
// console.log(ehPar(7)); // Deve retornar false

// Desafio 3: Maior Número em um Array

// function maiorNumero(arr) {
//   j = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (j < arr[i]) {
//       j = arr[i];
//     }
//   }
//   return j;
// }
// console.log(maiorNumero([1, 5, 3, 9, 2])); // Deve retornar 9

// Desafio 4: Contagem de Vogais

// function contarVogais(str) {
//   // Define um array com as vogais
//   const vogais = ['a', 'e', 'i', 'o', 'u'];
//   // Converte a string para minúsculas para facilitar a comparação
//   str = str.toLowerCase();
//   // Inicializa um contador para as vogais
//   let contador = 0;

//   // Percorre cada caractere da string
//   // for (let char of str) {
//   //   // Verifica se o caractere é uma vogal
//   //   if (vogais.includes(char)) {
//   //     contador++; // Incrementa o contador se for uma vogal
//   //   }
//   // }

//   // Como eu faria antes de lembrar do for ... of
//   const separados = str.split('');

//   for (i = 0; i < separados.length; i++) {
//     if (vogais.includes(separados[i])) {
//       contador++;
//     }
//   }

//   return contador; // Retorna o total de vogais encontradas
// }

// console.log(contarVogais('hello')); // Deve retornar 2
// console.log(contarVogais('javascript')); // Deve retornar 3

// Desafio 5: Inversão de String

// function inverterString(str) {
//   // let strInvertido = '';

//   // for (i = str.length; i > 0; i--) {
//   //   strInvertido += str[i - 1];
//   // }

//   // return strInvertido;

//   // Utilizando array para inversão de string
//   // return str.split('').reverse().join('');
// }
// console.log(inverterString('hello')); // Deve retornar "olleh"
// console.log(inverterString('victor')); // Deve retornar "olleh"

// Desafio 6: Fatorial de um Número

// function fatorial(num) {
//   let aux = 1;

//   for (i = 2; i <= num; i++) {
//     aux *= i;
//   }

//   return aux;
// }
// console.log(fatorial(5)); // Deve retornar 120

// Desafio 7: Verificação de Palíndromo

// function ehPalindromo(str) {
//   // Sua implementação aqui
// }
// console.log(ehPalindromo("arara")); // Deve retornar true
// console.log(ehPalindromo("javascript")); // Deve retornar false

// function quicksort(array) {
//   if (array.length < 2) {
//     return array;
//   }

//   let pivo = array[0];

//   let menores = [];
//   let maiores = [];

//   for (let i = 1; i < array.length; i++) {
//     array[i] < pivo ? menores.push(array[i]) : maiores.push(array[i]);
//   }

//   return quicksort(menores).concat(pivo, quicksort(maiores));
// }

// console.log(quicksort([3, 5, 2, 1, 4]));

const tema = localStorage.getItem('tema');
const btnFollow = document.getElementById('btn-follow');
const followerElement = document.getElementById('follower-count');
const themeToggle = document.getElementById('theme-toggle');

let isFollowing = false;
let count = 999; // Valor inicial numérico

if (tema === 'escuro') {
  document.body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

btnFollow.addEventListener('click', (e) => {
  if (!isFollowing) {
    isFollowing = true;
    btnFollow.classList.add('following');
    btnFollow.textContent = 'Seguindo';
    count++;
    window.alert('Obrigado por seguir!');
  } else {
    isFollowing = false;
    btnFollow.classList.remove('following');
    btnFollow.textContent = 'Seguir';
    count--;
  }

  followerElement.textContent =
    count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;
});

themeToggle.addEventListener('click', (e) => {
  const isDark = document.body.classList.toggle('dark-mode');

  if (isDark) {
    localStorage.setItem('tema', 'escuro');
    themeToggle.textContent = '☀️';
  } else {
    localStorage.removeItem('tema');
    themeToggle.textContent = '🌙';
  }
});
