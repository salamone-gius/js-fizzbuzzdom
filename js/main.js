                        // - TASK - \\
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

                    // --- SOLUTION --- \\

//stampo in console i numeri da 1 a 100
for (i = 1; i <= 100; i++) {
    //dichiaro le variabili per i multipli e gli assegno un valore
    let fizz = i % 3 === 0; //multiplo di 3
    let buzz = i % 5 === 0; //multiplo di 5
    //imposto le condizioni per sostituire i numeri interessati
    //SE fizz E buzz sono entrambe VERE (numero multiplo sia di 3 che di 5)
    if ((fizz) && (buzz)) {
        //ALLORA stampo in console "FizzBuzz" al posto del numero
        console.log("FizzBuzz");
        //ALTRIMENTI, SE fizz è VERO (numero multiplo di 3)
    } else if (fizz) {
        //ALLORA stampo in console "Fizz" al posto del numero
        console.log("Fizz");
        //ALTRIMENTI, SE buzz è VERO (numero multiplo di 5)
    } else if (buzz) {
        //ALLORA stampo in console "Fizz" al posto del numero
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

