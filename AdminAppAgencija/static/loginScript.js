window.addEventListener("load", start);
function start() {
  document.getElementById("btn_login").addEventListener("click", () => {
    let imelog = document.getElementById("ime").value;
    let prezimelog = document.getElementById("prezime").value;
    let lozinkalog = document.getElementById("lozinka").value;

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ime: imelog,
        sifra: lozinkalog,
      }),
    })
      .then((nnn) => nnn.json())
      .then((data) => {
        if (!data.message) {
          localStorage.setItem("token", data.token);
          localStorage.token = data.token;
          document.cookie = `token=${data.token};SameSiite=Lax`;
          window.location.href = "http://localhost:8000/admin";
        }
      });
  });
}
