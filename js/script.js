// Esercizio di oggi: **Griglia Campo Minato**
// nome repo: **`js-campominato-grid`**
// **Consegna**
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// **Bonus**
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// **Consigli del giorno:**  :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.


// Macroaree;
// 1 Creare la struttura html / css
// 2 Creare la griglia dinamicamente
// 3 Numerare i quadratini
// 4 Gestire il click del quadratino



// Facciamo apparire i quadratini dinamicamente con js

const container = document.querySelector('.container');
const squareForRow = 10;

//creo una funzione per far partire tutto e far stampare i quadratini e per poter calcolare gli squares totali

init(squareForRow);

function init(numElements) {
  const totalSquares = numElements * numElements;
  for(let i = 0; i < totalSquares; i++) {
    //funzione per creare quadratini
    createSquare(i)
  }
  
}

//creo una funzione per creare quadratini
function createSquare(idSquare) {
  //creo il quadratino
  //gli do un valore
  //lo appendo al container
  const square = document.createElement('div');
  square.className = 'square';
  square.innerText = idSquare + 1;
  square.addEventListener('click', clickSquare);
  container.append(square);
}

function clickSquare() {
  console.log(this.innerText);
  this.classList.add('azure');
}