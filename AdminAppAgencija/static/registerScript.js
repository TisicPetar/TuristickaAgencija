window.addEventListener("load", start);

function start() {
  document.getElementById("btn_register").addEventListener("click", () => {
    let imelog = document.getElementById("ime").value;
    let prezimelog = document.getElementById("prezime").value;
    let lozinkalog = document.getElementById("lozinka").value;
    let emaillog = document.getElementById("email").value;

    /**saljemo podatake za kreiranje novog korisnika */
    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        ime:imelog,
        prezime:prezimelog,
        sifra:lozinkalog,
        email:emaillog
      })
    })
      .then( res => res.json() )
        .then( el => {
          document.cookie = `token=${el.token};SameSite=Lax`;
          window.location.href = 'http://localhost:8000/login';
        });

    document.getElementById("ime").value = "";
    document.getElementById("prezime").value = "";
    document.getElementById("lozinka").value = "";
    document.getElementById("email").value = "";
  });
}