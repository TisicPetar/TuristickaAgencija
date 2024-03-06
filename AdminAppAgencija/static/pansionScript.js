window.addEventListener("load", start);

function start() {
  ucitaj();
  //dopuni();
  document.getElementById("btn_dodaj").addEventListener("click", dodaj);
  document.getElementById("btn_azuriraj").addEventListener("click", azuriraj);
  document.getElementById("btn_obrisi").addEventListener("click", obrisi);
}

//ucitavanje podataka iz baze
function ucitaj() {
  fetch("http://localhost:7000/admin/pansion", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((nnn) => nnn.json())
    .then((data) => {
      document.getElementById("lista").innerHTML = "";
      data.forEach((nn) => add(nn));
    });
}

//dodavanje novog POST
function dodaj() {
  let id = document.getElementById("novi_id").value;
  let naziv = document.getElementById("novi_naziv").value;
  let opis = document.getElementById("nova_opis").value;

  let novi = {
    id: id,
    naziv: naziv,
    opis: opis,
  };

  nt = JSON.stringify(novi);

  fetch("http://localhost:7000/admin/pansion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //     'authorization': 'Bearer ' + token
    },
    body: nt,
  })
    .then((novi) => novi.json())
    .then((novi) => {
      if (novi.message) alert(novi.message);
      else add(novi);
    });
}

function azuriraj() {
  let id = document.getElementById("novi_id").value;
  let naziv = document.getElementById("novi_naziv").value;
  let opis = document.getElementById("nova_opis").value;

  let novi = {
    id: id,
    naziv: naziv,
    opis: opis,
  };

  fetch("http://localhost:7000/admin/pansion/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(novi),
  })
    .then((nnn) => nnn.json())
    .then((nnn) => {
      if (nnn.message) alert(nnn.message);
      else get();
    });
}

function obrisi() {
  let id = document.getElementById("novi_id").value;
  console.log(id);
  fetch("http://localhost:7000/admin/pansion/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      //'Authorization': 'Bearer ' + token
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message) alert(res.message);
      else get();
    });
}

function add(novi) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");

  td1.classList.add("pansion-id");
  td2.classList.add("pansion-Naziv");
  td3.classList.add("pansion-Opis");

  let text1 = document.createTextNode(novi.id);
  let text2 = document.createTextNode(novi.naziv);
  let text3 = document.createTextNode(novi.opis);

  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  let tableBody = document.getElementById("lista");
  tableBody.append(tr);
}

function get() {
  fetch("http://localhost:7000/admin/pansion", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //'Authorization': 'Bearer ' + token
    },
  })
    .then((aaa) => aaa.json())
    .then((aaa) => {
      document.getElementById("lista").innerHTML = "";
      aaa.forEach((aaa) => add(aaa));
    });
}
