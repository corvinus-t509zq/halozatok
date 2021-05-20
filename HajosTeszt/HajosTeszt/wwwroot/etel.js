var etel = [];
function ButtonClick()
{
document.getElementById("button").addEventListener("click", () => {
    fetch("/api/etel").then(r => r.json()).then(d => Megjelenítés(d))
});
}

window.onload = function start() {
   
    ButtonClick();
    AddNewEtel();
}
function Megjelenítés(d)
{
    etel = d;
    console.log(etel);
    let lista = document.getElementById("lista");
  
    for (var i = 0; i < etel.length; i++) {
        let a = document.createElement("div");
        //a.setAttribute("id", "id");
        //if (lista.contains(id)) console.log("asddsa");
        lista.appendChild(a);
        a.innerText = etel[i].nev;
        
    }
}
function AddNewEtel() {
    document.getElementById("addButton").addEventListener("click", () => {
        let data = {
            Nev: document.getElementById("ujetel").value
        }
        fetch("api/etel", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }
        ).then(x => {
            if (x.ok) {
               // alert("Siker");
                console.log("siker");
            }
            else {
                //alert("Kudarc");
                console.log("kudarc");
            }
        });
    });
}