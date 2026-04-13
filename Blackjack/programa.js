div = document.getElementById("rules");

botones = document.getElementById("botones");
div.style.display = "none";
let rand,
  rand2,
  rand3,
  rand4,
  palo,
  palo2,
  palo3,
  palo4,
  crupier,
  rand5,
  palo5,
  puntajePasado,
  resultado;
let imgCarta,
  puntaje,
  cartel,
  mensaje,
  mensaje2,
  imgCartap,
  repartir,
  valor,
  pozo,
  money,
  banca,
  imagenes,
  imagenesP;

money = 1000;
pozo = 0;
let bandera = false
let as = 11;
let doblete = document.getElementById("x2");
banca = document.getElementById("banca");
puntos = document.getElementById("points");
dpuntos = document.getElementById("dpoints");
cartel = document.getElementById("cartel");
let cm = document.getElementById("cm");
mensaje = document.getElementById("mensaje");
mensaje2 = document.getElementById("mensaje2");

dividir = document.getElementById("dividir");
repartir = document.getElementById("deal");
document.getElementById("banca").innerHTML = money + " $";
document.getElementById("hit").style.display = "none";
document.getElementById("stand").style.display = "none";
doblete.style.display = "none";
document.getElementById("dividir").style.display = "none";
let cartaNuevaP = document.getElementById("player");
let cartaNueva = document.getElementById("crupier");
cartaNuevaP.style.display = "flex";
function repar() {
  console.log("Cartas repartidas");
  rand = Math.round(Math.random() * 12 + 1);
  palo = Math.round(Math.random() * 3 + 1);
  rand2 = Math.round(Math.random() * 12 + 1);
  palo2 = Math.round(Math.random() * 3 + 1);
  rand3 = Math.round(Math.random() * 12 + 1);
  palo3 = Math.round(Math.random() * 3 + 1);
  document.getElementById("dcar1").src = "img/cartas/trasera.png";
  rand4 = Math.round(Math.random() * 12 + 1);
  palo4 = Math.round(Math.random() * 3 + 1);
  document.getElementById("continuar").style.display = "flex";
  if (rand == rand2 && palo == palo2) {
    rand = Math.round(Math.random() * 12 + 1);
    palo = Math.round(Math.random() * 3 + 1);

    rand2 = Math.round(Math.random() * 12 + 1);
    palo2 = Math.round(Math.random() * 3 + 1);
  }
  if (rand3 == rand4 && palo3 == palo4) {
    rand3 = Math.round(Math.random() * 12 + 1);
    palo3 = Math.round(Math.random() * 3 + 1);

    rand4 = Math.round(Math.random() * 12 + 1);
    palo4 = Math.round(Math.random() * 3 + 1);
  }
  // Generamos e inyectamos las imágenes de las cartas
  document.getElementById("car1").src = "img/cartas/" + rand + palo + ".png";
  document.getElementById("car2").src = "img/cartas/" + rand2 + palo2 + ".png";
  document.getElementById("dcar2").src = "img/cartas/" + rand4 + palo4 + ".png";
  puntos.style.display = "flex";
  dpuntos.style.display = "flex";
  if (rand4 === 11 || rand4 === 12 || rand4 === 13) rand4 = 10;
  if (rand === 11 || rand === 12 || rand === 13) rand = 10;
  if (rand2 === 11 || rand2 === 12 || rand2 === 13) rand2 = 10;

  //define los ases con la variable as
  if (rand === 1)
    rand = as;

  if (rand2 === 1)
    rand2 = as;

  cartaNuevaP.style.display = "flex";
  puntajePasado = rand2 + rand;
  document.getElementById("points").innerHTML =
    "<p>" + puntajePasado + "</p>" + "<img src='img/logo.png'>";
  document.getElementById("dpoints").innerHTML =
    "<p>" + rand4 + "</p>" + "<img src='img/logo.png'>";

  repartir.style.display = "none";
  document.getElementById("hit").style.display = "flex";
  document.getElementById("stand").style.display = "flex";
  document.getElementById("x2").style.display = "flex";
  document.getElementById("banca").innerHTML = money + " $";
  document.getElementById("banco").style.display = "none";
  
  // Si el jugador saca dos Ases de inicio, uno debe valer 1 en lugar de 11 para no pasarse de 21
  if (rand === as && rand2 === as) {
    rand2 = 1;
  }

  puntaje = rand2 + rand;
  return puntaje;
}
function apostar(valor) {
  if (money >= valor) {
    money = money - valor;
    pozo = +pozo + +valor;
  }
  document.getElementById("enpozo").innerHTML = pozo + " $";
  document.getElementById("banca").innerHTML = money + " $";
}
function allIn() {
  let moneytemp = money + pozo;
  pozo = 0;
  pozo = moneytemp;
  money = 0;
  document.getElementById("enpozo").innerHTML = pozo + " $";
  document.getElementById("banca").innerHTML = money + " $";
  return money, pozo, banca;
}
function limpiar() {
  money = pozo + money;
  pozo = 0;
  document.getElementById("enpozo").innerHTML = pozo + " $";
  document.getElementById("banca").innerHTML = money + " $";
  return money, pozo, banca;
}

function okay() {
  cartel.style.display = "none";
  cm.style.display = "none";
  document.getElementById("continuar").style.display = "none";
  document.getElementById("reiniciar").style.display = "none";
  document.getElementById("okay").style.display = "none";
}
function hit() {
  let NcartasP = 3;
  let randNewP = Math.round(Math.random() * 12 + 1);
  let paloNewP = Math.round(Math.random() * 3 + 1);

  let imgCartap = document.createElement("img");
  imgCartap.src = "img/cartas/" + randNewP + paloNewP + ".png";
  imgCartap.classList.add("nuevaCartaP");
  imgCartap.alt = "";
  cartaNuevaP.appendChild(imgCartap);

  if (randNewP === 11 || randNewP === 12 || randNewP === 13) randNewP = 10;

  puntaje += randNewP;
  document.getElementById("points").innerHTML =
    "<p>" + puntaje + "</p>" + "<img src='img/logo.png'>";

  NcartasP++;

  if (bandera == false) {
    if (puntaje > 21) {
      document.getElementById("enpozo").innerHTML = pozo + "$";
      document.getElementById("banca").innerHTML = money + " $";
      if (money <= 0 && pozo <= 0) {
        cartel.style.display = "flex";
        mensaje.innerHTML = "Has perdido todo tu dinero.";
        mensaje2.innerHTML = "No te quedan más fondos.";

        document.getElementById("enpozo").innerHTML = "0 $";
        document.getElementById("banca").innerHTML = money + " $";
      }
      else {
        mostrarResultado("Has perdido", "Te pasaste de 21.", pozo, false);
      }
      console.log("hit hecho.(bandera= " + bandera);
    }
  }
  else {
    money = money + pozo;
    if (crupier > 21) {
      mostrarResultado("Has ganado", "El crupier se pasó de 21.", pozo * 2, true);
    } else if (crupier > puntaje) {
      mostrarResultado("Has perdido", "El crupier se acercó más a 21.", pozo, false);
    } else if (crupier < puntaje) {
      mostrarResultado("Has ganado", "Te acercaste más a 21.", pozo * 2, true);
    } else {
      mostrarResultado("Empate", "Ambos tuvieron el mismo puntaje.", pozo, false);
    }

    console.log("hit hecho.(bandera= " + bandera);
  }


  return puntaje, money;
}
function doblarApuesta() {

  if (money >= pozo) {
    money -= pozo;
    pozo *= 2;
    document.getElementById("enpozo").innerHTML = pozo + " $";
    document.getElementById("banca").innerHTML = money + " $";
    doblete.style.display = "none";
    hit();
    stand();
    let premio = pozo
    return premio;
  } else {
    alert("No tienes suficiente dinero para doblar la apuesta.");
  }

}


function stand() {
  document.getElementById("dcar1").src = "img/cartas/" + rand3 + palo3 + ".png";

  if (rand3 === 11 || rand3 === 12 || rand3 === 13) rand3 = 10;
  if (rand4 === 1) rand4 = 11;

  crupier = rand3 + rand4;
  while (crupier < 17) {
    let randNew = Math.floor(Math.random() * 12) + 1;
    let paloNew = Math.floor(Math.random() * 3) + 1;

    let imgCarta = document.createElement("img");
    imgCarta.src = "img/cartas/" + randNew + paloNew + ".png";
    imgCarta.alt = "";
    imgCarta.classList.add("nuevaCarta");
    cartaNueva.appendChild(imgCarta);

    if (randNew === 11 || randNew === 12 || randNew === 13) randNew = 10;

    crupier += randNew;
  }

  document.getElementById("dpoints").innerHTML = crupier + "<img src='img/logo.png'>";

  console.log("player: " + puntaje);
  console.log("crupier: " + crupier);
  if (puntaje > 21) {
    mostrarResultado("Has perdido", "Te pasaste de 21.", pozo, false);
  } else if (crupier > 21) {
    mostrarResultado("Has ganado", "El crupier se pasó de 21.", pozo * 2, true);
  } else if (crupier > puntaje) {
    mostrarResultado("Has perdido", "El crupier se acercó más a 21.", pozo, false);
  } else if (crupier < puntaje) {
    mostrarResultado("Has ganado", "Te acercaste más a 21.", pozo * 2, true);
  } else {
    mostrarResultado("Empate", "Ambos tuvieron el mismo puntaje.", pozo, true);
  }



  document.getElementById("enpozo").innerHTML = pozo + " $";
  document.getElementById("banca").innerHTML = money + " $";

  console.log("stand hecho.(bandera= " + bandera);
}

function mostrarResultado(titulo, descripcion, premio, ganado) {

  cartel.style.display = "flex";
  let cm = document.getElementById("cm");

  cm.style.backgroundImage = "url('img/ganar.png')";
  setTimeout(() => {
    cm.style.opacity = 1;
  }, 50);

  let etiqueta = ganado ? "h2" : "h3";
  if (ganado) {
    money += premio;
  }

  if (money <= 0) {
    cartel.style.display = "flex";
    mensaje.innerHTML = "Has perdido todo tu dinero.";
    mensaje2.innerHTML = "No te quedan más fondos.";
    document.getElementById("continuar").style.display = "none";
  }
  else {
    mensaje.innerHTML = `${titulo} <${etiqueta}>${premio}</${etiqueta}>$.`;
    mensaje2.innerHTML = descripcion;
  }
  pozo = 0
  document.getElementById("enpozo").innerHTML = pozo + "$";
  document.getElementById("banca").innerHTML = money + " $";
}

function reglas() {
  const cartel = document.getElementById("cartel");
  const padre = document.getElementById("padre");
  const rules = document.getElementById("rules");

  if (rules.style.display === "flex") {
    rules.style.display = "none";
    cartel.style.display = "none";
    padre.style.display = "block";
  } else {
    rules.style.display = "flex";
    cartel.style.display = "none";
    padre.style.display = "none";
  }
}



document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    document.getElementById("toggle-dark-mode").innerHTML = '<i class="bi bi-brightness-high"></i>';
  } else {
    document.getElementById("toggle-dark-mode").innerHTML = '<i class="bi bi-moon"></i>';
  }
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
    document.getElementById("toggle-dark-mode").innerHTML = '<i class="bi bi-brightness-high"></i>';
  } else {
    localStorage.setItem("dark-mode", "disabled");
    document.getElementById("toggle-dark-mode").innerHTML = '<i class="bi bi-moon"></i>';
  }
}

function continuar() {
  cartel.style.display = "none";
  repartir.style.display = "flex";
  cm.style.opacity = 0;
  document.getElementById("hit").style.display = "none";
  document.getElementById("stand").style.display = "none";
  document.getElementById("x2").style.display = "none";
  document.getElementById("dividir").style.display = "none";
  document.getElementById("dcar1").src = "";
  document.getElementById("car1").src = "";
  document.getElementById("car2").src = "";
  document.getElementById("dcar2").src = "";
  document.getElementById("points").innerHTML = "";
  document.getElementById("dpoints").innerHTML = "";
  document.getElementById("banco").style.display = "flex";
  cartaNuevaP.style.display = "none";
  mensaje.innerHTML = "";
  mensaje2.innerHTML = "";
  bandera = false;

  const imagenesP = cartaNuevaP.getElementsByTagName("img");
  const imagenes = document.querySelectorAll(".nuevaCartaP");
  imagenes.forEach((imagenesP) => {
    imagenesP.remove();
  });
  const imagenes2 = document.querySelectorAll(".nuevaCarta");
  imagenes2.forEach((imagen2) => {
    imagen2.remove();
  });

  pozo = 0;
  document.getElementById("enpozo").innerHTML = pozo + " $";
  document.getElementById("banca").innerHTML = money + " $";
}

function reiniciar() {
  money = 1000;
  pozo = 0;
  bandera = false;
  document.getElementById("enpozo").innerHTML = pozo + " $";
  document.getElementById("banca").innerHTML = money + " $";
  cartel.style.display = "none";
  cm.style.opacity = 0;
  document.getElementById("hit").style.display = "none";
  document.getElementById("stand").style.display = "none";
  document.getElementById("x2").style.display = "none";
  document.getElementById("dividir").style.display = "none";
  document.getElementById("dcar1").src = "";
  document.getElementById("car1").src = "";
  document.getElementById("car2").src = "";
  document.getElementById("dcar2").src = "";
  document.getElementById("points").innerHTML = "";
  document.getElementById("dpoints").innerHTML = "";
  document.getElementById("banco").style.display = "flex";
  repartir.style.display = "flex";
  cartaNuevaP.style.display = "none";
  mensaje.innerHTML = "";
  mensaje2.innerHTML = "";
  const imagenesP = cartaNuevaP.getElementsByTagName("img");
  const imagenes = document.querySelectorAll(".nuevaCartaP");
  imagenes.forEach((imagenesP) => {
    imagenesP.remove();
  });
  const imagenes2 = document.querySelectorAll(".nuevaCarta");
  imagenes2.forEach((imagen2) => {
    imagen2.remove();
  });
}