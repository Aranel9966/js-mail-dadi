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
let printEl = document.getElementById('print')

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

        }

    }
    // controllo stampa

    

    if(access == 1 ){
        printEl.innerText=('Accesso riuscito')
        
    }else{
        printEl.innerText=('Accesso NON riuscito')

    }

})










// esiste il metodo .includes() per trovare subito l'occorrenza di un elemento all'interno di un array