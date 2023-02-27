// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

/*
-array di email
-chiedere l'email all'utente
?se l'email dell'utente corrisponde all'email nell'array apri 
:? altrimenti nega l'accesso
-stampa un messaggio appropriato
*/


// creo un array di email
let emails = ['pino@ciao.it','gino@ciao.it','pippo@ciao.it','topolino@ciao.it','paperino@ciao.it'];

// richiamo i rispettivi id in delle variabili
let userEmailEl = document.getElementById('userEmail');
let submitEl = document.getElementById('submit');

// creo un evento per prendere il valore dentro l'input al premere del bottone
submitEl.addEventListener('click', function(){
    console.log(userEmailEl.value)

})