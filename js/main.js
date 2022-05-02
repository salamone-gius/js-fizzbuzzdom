                        // - TASK - \\
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

                    // --- SOLUTION --- \\

let container = document.querySelector("div.container");
let box = document.createElement("div");
                
//stampo in console i numeri da 1 a 100
for (i = 1; i <= 100; i++) {
    //dichiaro le variabili per i multipli e gli assegno un valore
    let fizz = i % 3 === 0; //multiplo di 3
    let buzz = i % 5 === 0; //multiplo di 5
    //imposto le condizioni per sostituire i numeri interessati
    //SE fizz E buzz sono entrambe VERE (numero multiplo sia di 3 che di 5)
    if ((fizz) && (buzz)) {
        //ALLORA stampo in console "FizzBuzz" al posto del numero;
        console.log("FizzBuzz");
        //creo un div,
        let box = document.createElement("div");
        //gli aggiungo le classi CSS,
        box.classList.add("box", "pink");
        //lo attacco al container,
        container.append(box);
        //stampo all'interno;
        box.innerHTML = "FizzBuzz";
        //ALTRIMENTI, SE fizz è VERO (numero multiplo di 3)
    } else if (fizz) {
        //ALLORA stampo in console "Fizz" al posto del numero
        console.log("Fizz");
        //creo un div,
        let box = document.createElement("div");
        //gli aggiungo le classi CSS,
        box.classList.add("box", "green");
        //lo attacco al container,
        container.append(box);
        //stampo all'interno;
        box.innerHTML = "Fizz";
        //ALTRIMENTI, SE buzz è VERO (numero multiplo di 5)
    } else if (buzz) {
        //ALLORA stampo in console "Buzz" al posto del numero
        console.log("Buzz");
        //creo un div,
        let box = document.createElement("div");
        //gli aggiungo le classi CSS,
        box.classList.add("box", "yellow");
        //lo attacco al container,
        container.append(box);
        //stampo all'interno;
        box.innerHTML = "Buzz";
        //ALTRIMENTI
    } else {
        //stampo il numero in console
        console.log(i);
        //creo un div,
        let box = document.createElement("div");
        //gli aggiungo le classi CSS,
        box.classList.add("box", "blue");
        //lo attacco al container,
        container.append(box);
        //stampo all'interno;
        box.innerHTML = i;
    }
}

