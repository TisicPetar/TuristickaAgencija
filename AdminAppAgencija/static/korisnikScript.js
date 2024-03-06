window.addEventListener("load", () => {
  const cookies = document.cookie.split("=");
  const token = cookies[cookies.length - 1];

  fetch("http://localhost:7000/admin/korisnik", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
    },
  })
    .then((nnn) => nnn.json())
    .then((data) => {
      document.getElementById("lista").innerHTML = "";
      data.forEach((nn) => add(nn));
    });
  document.getElementById("btn_dodaj").addEventListener("click", dodaj);
  document.getElementById("btn_azuriraj").addEventListener("click", azuriraj);
  document.getElementById("btn_obrisi").addEventListener("click", obrisi);
});

//dodavanje novog POST
function dodaj() {
  const cookies = document.cookie.split("=");
  const token = cookies[cookies.length - 1];

  let id = document.getElementById("novi_id").value;
  let ime = document.getElementById("novo_ime").value;
  let prezime = document.getElementById("novo_prezime").value;
  let email = document.getElementById("novi_email").value;
  let sifra = document.getElementById("nova_sifra").value;

  let novi = {
    id: id,
    ime: ime,
    prezime: prezime,
    email: email,
    sifra: sifra,
    moderator: false,
    admin: false,
  };

  console.log(novi);

  nt = JSON.stringify(novi);

  fetch("http://localhost:7000/admin/korisnik", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
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
  const cookies = document.cookie.split("=");
  const token = cookies[cookies.length - 1];

  let id = document.getElementById("novi_id").value;
  let ime = document.getElementById("novo_ime").value;
  let prezime = document.getElementById("novo_prezime").value;
  let email = document.getElementById("novi_email").value;
  let sifra = document.getElementById("nova_sifra").value;

  let novi = {
    id: id,
    ime: ime,
    prezime: prezime,
    email: email,
    sifra: sifra,
  };

  fetch("http://localhost:7000/admin/korisnik/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
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
  const cookies = document.cookie.split("=");
  const token = cookies[cookies.length - 1];

  let id = document.getElementById("novi_id").value;
  console.log(id);
  fetch("http://localhost:7000/admin/korisnik/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
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
  let td7 = document.createElement("td");
  let td8 = document.createElement("td");

  td1.classList.add("korisnik-id");
  td2.classList.add("korisnik-ime");
  td3.classList.add("korisnik-prezime");
  td4.classList.add("korisnik-email");
  td5.classList.add("korisnik-sifra");
  td7.classList.add("korisnik-admin");
  td8.classList.add("korisnik-moderator");

  let text1 = document.createTextNode(novi.id);
  let text2 = document.createTextNode(novi.ime);
  let text3 = document.createTextNode(novi.prezime);
  let text4 = document.createTextNode(novi.email);
  let text5 = document.createTextNode(novi.sifra);
  let text7 = document.createTextNode(novi.admin);
  let text8 = document.createTextNode(novi.moderator);

  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);
  td5.appendChild(text5);
  td7.appendChild(text7);
  td8.appendChild(text8);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td7);
  tr.appendChild(td8);

  let tableBody = document.getElementById("lista");
  tableBody.append(tr);
}

function get() {
  const cookies = document.cookie.split("=");
  const token = cookies[cookies.length - 1];

  fetch("http://localhost:7000/admin/korisnik", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //"Authorization": `Bearer ${token}`,
    },
  })
    .then((aaa) => aaa.json())
    .then((aaa) => {
      document.getElementById("lista").innerHTML = "";
      aaa.forEach((aaa) => add(aaa));
    });
}
