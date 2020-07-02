var contAnimar = 1;
var timerAnimar;
function AnimarBateria(){
  timerAnimar = setInterval(Animar, 1000);
}
function Animar() {
  if (contAnimar < 5) {
    contAnimar++;
    document.getElementById("bateria").className = "bateria" + contAnimar;
  }
  else clearTimeout(timerAnimar);
}
