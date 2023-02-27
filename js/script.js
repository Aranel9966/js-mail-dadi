// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

/*
-array di email
-chiedere l'email all'utente
* crea un ciclo per controllare l'email
?se l'email dell'utente corrisponde all'email nell'array apri 
:? altrimenti nega l'accesso
-stampa un messaggio appropriato
*/


// creo un array di email
let emails = ['pino@ciao.it','gino@ciao.it','pippo@ciao.it','topolino@ciao.it','paperino@ciao.it'];

// richiamo i rispettivi id in delle variabili
let userEmailEl = document.getElementById('userEmail');
let submitEl = document.getElementById('submit');
let printEl = document.getElementById('print');

// creo un evento per prendere il valore dentro l'input al premere del bottone
submitEl.addEventListener('click', function(){
    let access ='';
    //ciclo di controllo email
    for(i = 0 ; i < emails.length ; i++ ){

        // console.log(emails[i])
        // console.log(userEmailEl.value)


        if(userEmailEl.value == emails[i]){
            access = 1;
            console.log('accesso riuscito')

        }else{
            console.log('accesso NON riuscito')

        };

    };
    // controllo stampa

    

    if(access == 1 ){
        printEl.innerText=('Accesso riuscito')
        
    }else{
        printEl.innerText=('Accesso NON riuscito')

    }

});


// esercizio 2

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

/*
-array di img
-genera due numeri random da 1 a 6 ,1 pc 1 utente 
-asseconda del numero uscito prendere l'imagine nell'array
?se pc > di utente pc vince
:? altrimenti utente vince
*/




let diceEl = document.getElementById('dice');
let userEl = document.getElementById('user');
let pcEl = document.getElementById('pc');
let resultEl = document.getElementById('result');
// array di img
let imagesDice = ['https://icon2.cleanpng.com/20180219/yqw/kisspng-dice-game-kismet-four-sided-die-clip-art-dice-1-5a8b07402121c9.4645618215190608001357.jpg',
'https://icon2.cleanpng.com/20180218/fhq/kisspng-rectangle-technology-images-of-dice-5a8a316c3b76f2.9059496615190060602436.jpg',
'https://cdn.pixabay.com/photo/2014/04/03/10/24/three-310336_960_720.png',
'https://icon2.cleanpng.com/20180315/kse/kisspng-dice-four-sided-die-game-clip-art-dice-faces-5aaad16f126d76.5950550615211441750755.jpg',
'https://cdn.pixabay.com/photo/2014/04/03/10/24/five-310334_960_720.png',
'http://www.clker.com/cliparts/l/6/4/3/K/H/dice-6.svg',
];

// console.log(imagesDice)
let imgUserEl = document.getElementById('imgUser');
let imgPcEl = document.getElementById('imgPc');

// dichiaro un evento
diceEl.addEventListener('click', function(){

    // creo due numeri random
    let randomNumberUser = Math.floor(Math.random() * 6 + 1);
    let randomNumberPc = Math.floor(Math.random() * 6 + 1);

    // controllo per risultato partita
    if(randomNumberUser < randomNumberPc){
        console.log('pc vince ');
        resultEl.innerHTML=('pc vince');

    }else if(randomNumberUser == randomNumberPc){
        console.log('pareggio');
        resultEl.innerHTML=('pareggio');

    }else{
        console.log('utente vince ');
        resultEl.innerHTML=('Hai vinto ');

    };
    // stampo i risultati
    userEl.innerHTML=('il tuo numero ' + randomNumberUser);
    pcEl.innerHTML=('il numero del pc ' + randomNumberPc);

    // ciclo per img
    for(i = 0 ; i < imagesDice.length ; i++){

        imgUserEl.src=imagesDice[randomNumberUser-1];
        imgUserEl.style.display='block';
        imgPcEl.src=imagesDice[randomNumberPc-1];
        imgPcEl.style.display='block';

        
        
    };

});












// esiste il metodo .includes() per trovare subito l'occorrenza di un elemento all'interno di un array