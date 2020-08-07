var genera = document.getElementById("genera");

genera.addEventListner("click"
  function(){
    var km =document.getElementById("nome").value;
    var km =document.getElementById("km").value;
    var km =document.getElementById("fascia-eta").value;
    // value prende il valore dall'input
  }
);

// SCONTO PER MINORENNI
if (eta<18){
  var prezzoMin = (prezzo - ((prezzo / 100)* 20));
  document.getElementById("prezzo-bit").innerHTML = prezzoMin.toFixed(2) + ", ed e' stato applicato uno sconto del 20%.";
}
// SCONTO PRE ANZIANI
else if (eta>65){
  var prezzoOver = (prezzo - ((prezzo / 100)* 40));
  document.getElementById("prezzo-bit").innerHTML = prezzoOver.toFixed(2) + ", ed e' stato applicato uno sconto del 40%.";
}
// NESSUNO SCONTO
else {
  document.getElementById("prezzo-bit").innerHTML = prezzo.toFixed(2);
}










totale = totale.toFixed(2);
var numCarrozza = Math.floor(Math.random() * 9)+ 1;
var codiceCp = Math.floor(Math.random() * 9999);

// STAMPA I DATI NEL BIGLIETTO
document.getElementById("nome-passaggero").innerHTML = nome;
document.getElementById("offerta").innerHTML = offerta;
document.getElementById("corrozza").innerHTML = carrozza;
document.getElementById("codice-cp").innerHTML = "9" + codice-cp;
document.getElementById("costo").innerHTML = totale + "Euro";

document.getElementById("biglietto-container").classList.add = ("show");



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
