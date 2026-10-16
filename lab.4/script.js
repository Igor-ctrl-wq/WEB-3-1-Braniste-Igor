let fructe = ["Măr", "Pară", "Banana", "Portocală", "Kiwi"];
console.log(fructe);
console.log(fructe[0]);
console.log(fructe[fructe.length - 1]);
console.log(fructe.length);

let orase = ["Chișinău", "Bălți", "Cahul"];
orase.push("Orhei");
orase.unshift("Soroca");
orase.pop();
orase.shift();
console.log(orase);

let produse = ["Pâine", "Lapte", "Ouă"];

function afiseazaProduse() {
  let zona = document.getElementById("listaProduse");
  if (produse.length === 0) {
    zona.innerHTML = "Lista este goală!";
  } else {
    zona.innerHTML = produse.join(" | ");
  }
}

function adaugaLaSfarsit() {
  produse.push(document.getElementById("produsInput").value);
  afiseazaProduse();
}

function adaugaLaInceput() {
  produse.unshift(document.getElementById("produsInput").value);
  afiseazaProduse();
}

function stergePrimul() {
  produse.shift();
  afiseazaProduse();
}

function stergeUltimul() {
  produse.pop();
  afiseazaProduse();
}

afiseazaProduse();

let elevi = [
  { nume: "Popescu Ana", varsta: 17, nota: 9 },
  { nume: "Rusu Mihai", varsta: 18, nota: 8 },
  { nume: "Ciobanu Maria", varsta: 17, nota: 10 }
];

function afiseazaElevi() {
  let catalog = document.getElementById("catalog");
  catalog.innerHTML = "";
  elevi.forEach(function (elev, i) {
    catalog.innerHTML += "<div class='elev'>" + (i + 1) + ". " + elev.nume +
      "<br>Vârsta: " + elev.varsta + "<br>Nota: " + elev.nota + "</div>";
  });
  document.getElementById("numarElevi").innerHTML = "Număr de elevi: " + elevi.length;
}

function adaugaElev() {
  let elevNou = {
    nume: document.getElementById("numeElev").value,
    varsta: document.getElementById("varstaElev").value,
    nota: document.getElementById("notaElev").value
  };
  elevi.push(elevNou);
  afiseazaElevi();
}

function stergeElev() {
  let nume = document.getElementById("numeSters").value;
  let elev = elevi.find(function (e) {
    return e.nume === nume;
  });
  if (elev) {
    elevi.splice(elevi.indexOf(elev), 1);
  }
  afiseazaElevi();
}

function cautaElev() {
  let nume = document.getElementById("numeCautat").value;
  let rezultat = document.getElementById("rezultatCautare");
  let elev = elevi.find(function (e) {
    return e.nume === nume;
  });
  if (elev) {
    rezultat.innerHTML = "Elev găsit!<br>Nume: " + elev.nume +
      "<br>Vârsta: " + elev.varsta + "<br>Nota: " + elev.nota;
  } else {
    rezultat.innerHTML = "Elevul nu a fost găsit!";
  }
}

afiseazaElevi()