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
  fetch("http://localhost:7000/admin/aranzman", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'authorization': 'Bearer ' + token
    },
  })
    .then((nnn) => nnn.json())
    .then((data) => {
      document.getElementById("lista").innerHTML = "";
      data.forEach((nn) => add(nn));
    });
}

//ucitavamo strane kljuceve
function dopuni() {
  fetch("http://localhost:7000/admin/hotel", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      var combobox = document.getElementById("novi_hotel");
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

    fetch("http://localhost:7000/admin/pansion", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      var combobox = document.getElementById("novi_pansion");
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

    fetch("http://localhost:7000/admin/trajanje", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      var combobox = document.getElementById("novo_trajanje");
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
  let naziv = document.getElementById("novi_naziv").value;
  let kolicina = document.getElementById("nova_kolicina").value;
  let hotelID = document.getElementById("novi_hotel").value;
  let pansionlID = document.getElementById("novi_pansion").value;
  let trajanjeID = document.getElementById("novo_trajanje").value;
  
  let novi = {
    id: id,
    naziv: naziv,
    kolicina: kolicina,
    hotelID: hotelID,
    pansionlID: pansionlID,
    trajanjeID: trajanjeID,
  };

  nt = JSON.stringify(novi);

  fetch("http://localhost:7000/admin/aranzman", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
          // 'authorization': 'Bearer ' + token
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
    let kolicina = document.getElementById("nova_kolicina").value;
    let hotelID = document.getElementById("novi_hotel").value;
    let pansionID = document.getElementById("novi_pansion").value;
    let trajanjeID = document.getElementById("novo_trajanje").value;
    
    let novi = {
      id: id,
      naziv: naziv,
      kolicina: kolicina,
      hotelID: hotelID,
      pansionID: pansionID,
      trajanjeID: trajanjeID,
    };

  fetch("http://localhost:7000/admin/aranzman/" + id, {
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
  fetch("http://localhost:7000/admin/aranzman/" + id, {
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
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");

  td1.classList.add("aranzman-id");
  td2.classList.add("aranzman-naziv");
  td3.classList.add("aranzman-kolicina");
  td4.classList.add("hotel-hotelID")
  td5.classList.add("pansion-pansionID");
  td6.classList.add("trajanje-trajanjeID");

  let text1 = document.createTextNode(novi.id);
  let text2 = document.createTextNode(novi.naziv);
  let text3 = document.createTextNode(novi.kolicina);
  let text4 = document.createTextNode(novi.hotelID);
  let text5 = document.createTextNode(novi.pansionID);
  let text6 = document.createTextNode(novi.trajanjeID);

  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);
  td5.appendChild(text5);
  td6.appendChild(text6);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);

  let tableBody = document.getElementById("lista");
  tableBody.append(tr);
}

function get() {
  fetch("http://localhost:7000/admin/aranzman", {
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