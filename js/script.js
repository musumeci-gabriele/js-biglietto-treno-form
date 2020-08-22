// GENERA TICKET
var btmGenera = document.getElementById("genera");

btmGenera.addEventListner("click",
  function(){
    // RECUPOERO DATI INSERITI DALL'UTENTE
    var nome = document.getElementById("nome").value;
    var km = document.getElementById("km").value;
    var eta = document.getElementById("fascia-eta").value;
    // value prende il valore dall'input

    // CALCOLO DEL PREZZO DEL BIT
    var prezzoKm = 0.21;

    // PREZZO TOTALE BIT STANDARD
    var totale = km * prezzoKm;
    var topoOfferta = "Biglietto Standard";

    // SCONTO PER MINORENNI 20%
    if (fasciaEta =='minorenne'){
      totale = totale - ((totale * 20) / 100);
      tipoOfferta = "Sconto Minorenne";
    }
    // SCONTO PER OVER 65
    else if (fasciaEta == 'over65'){
      totale = totale - ((totale * 40) / 100);
      tipoOfferta = "Sconto Silver";
    }

    // ARROTONDAMENTO A DUE CIFRE DECIMALI
    totale = totale.toFixed(2);

    // GENERO I NUMERI RANDOM PER LA CARROZZA E I CODICI CP
    var numCarrozza = Math.floor(Math.random() * 9)+ 1;
    var codiceCp = Math.floor(Math.random() * 9999);
    
    // STAMPA I DATI NEL BIGLIETTO
    document.getElementById("nome-passeggero").innerHTML = nome;
    document.getElementById("offerta").innerHTML = tipoOfferta;
    document.getElementById("corrozza").innerHTML = carrozza;
    document.getElementById("codice-cp").innerHTML = "9" + codice-cp;
    document.getElementById("costo").innerHTML = totale + "Euro";
    document.getElementById("biglietto-container").classList.add = ("show");




  }
);










// RESET BOTTONE ANNULLA
var annulla = document.getElementById("annulla");
annulla.addEventListner("click",
  function(){
    documet.getElementById("biglietto-container").classList.remove("show")

    // RESETTARE I CAMPI input
    documet.getElementById("nome").value = "";
    documet.getElementById("km").value = "";
    documet.getElementById("fascia-eta").value = "";
  }
)
