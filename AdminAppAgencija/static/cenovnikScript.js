window.addEventListener("load", start);

function start() {
  ucitaj();
  dopuni();
  document.getElementById("btn_dodaj").addEventListener("click", dodaj);
  document.getElementById("btn_azuriraj").addEventListener("click", azuriraj);
  document.getElementById("btn_obrisi").addEventListener("click", obrisi);
}

//ucitavanje podataka iz baze
function ucitaj() {
  fetch("http://localhost:7000/admin/cenovnik", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((nnn) => nnn.json())
  .then(data => {
    document.getElementById("lista").innerHTML = "";
    data.forEach((nn) => add(nn));
  });
}

//ucitavamo strane kljuceve
function dopuni() {
  fetch("http://localhost:7000/admin/sezona", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      var combobox = document.getElementById("nova_sezona");
      while (combobox.firstChild) {
        combobox.removeChild(combobox.firstChild);
      }

      for (let i in data) {
        let opt = document.createElement("option");
        opt.value = data[i].id;
        opt.innerHTML = data[i].id;
        combobox.appendChild(opt);
      }
    });

  fetch("http://localhost:7000/admin/aranzman", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      var combobox = document.getElementById("novi_aranzman");
      while (combobox.firstChild) {
        combobox.removeChild(combobox.firstChild);
      }

      for (let i in data) {
        let opt = document.createElement("option");
        opt.value = data[i].id;
        opt.innerHTML = data[i].id;
        combobox.appendChild(opt);
      }
    });
}

//dodavanje novog POST

function dodaj() {
  let id = document.getElementById("novi_id").value;
  let cena = document.getElementById("nova_cena").value;
  let sezonaID = document.getElementById("nova_sezona").value;
  let aranzmanID = document.getElementById("novi_aranzman").value;

  let novi = {
    id: id,
    cena: cena,
    sezonaID: sezonaID,
    aranzmanID: aranzmanID,
  };

  nt = JSON.stringify(novi);

  fetch("http://localhost:7000/admin/cenovnik", {
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
  let cena = document.getElementById("nova_cena").value;
  let sezonaID = document.getElementById("nova_sezona").value;
  let aranzmanID = document.getElementById("novi_aranzman").value;

  let novi = {
    id: id,
    cena: cena,
    sezonaID: sezonaID,
    aranzmanID: aranzmanID,
  };

  fetch("http://localhost:7000/admin/cenovnik/" + id, {
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
  fetch("http://localhost:7000/admin/cenovnik/" + id, {
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
  let td4 = document.createElement("td");

  td1.classList.add("cenovnik-id");
  td2.classList.add("cenovnik-cena");
  td3.classList.add("sezona-sezonaID");
  td4.classList.add("aranzman-aranzmanID");

  let text1 = document.createTextNode(novi.id);
  let text2 = document.createTextNode(novi.cena);
  let text3 = document.createTextNode(novi.sezonaID);
  let text4 = document.createTextNode(novi.aranzmanID);

  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  let tableBody = document.getElementById("lista");
  tableBody.append(tr);
}

function get() {
  fetch("http://localhost:7000/admin/cenovnik", {
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
