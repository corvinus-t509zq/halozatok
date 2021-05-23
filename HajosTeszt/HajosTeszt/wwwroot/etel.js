var etel = [];
var addclickcount = 0;
var darab = 0;
var listázásjó = new Boolean(false);
function ButtonClick()
{
document.getElementById("button").addEventListener("click", () => {
    fetch("/api/etel").then(r => r.json()).then(d => Megjelenítés(d))
});
}

window.onload = function start() {
   
    ButtonClick();
    AddNewEtel();
    Törlés();
  
}

function Megjelenítés(d) {
    etel = d;
    console.log(etel);
    let lista = document.getElementById("lista");


    if (darab == lista.childElementCount && darab == 0) {
        console.log("most jó, megegyezik a kaják száma a megjelenített elemek számával");
        listázásjó = true;
        console.log(darab);
    } else {
        listázásjó = false;
    }

    if (listázásjó) { 
    for (var i = 0; i < etel.length; i++) {
        let a = document.createElement("div");
        lista.appendChild(a);
        a.innerText = etel[i].nev + " ("+ etel[i].sk +")";
        if (count() < lista.childElementCount) {
            console.log("baj van");
            break;
        }
    }
}

  

}

function count() {

    fetch("api/etel/count").then(r => r.json()).then(d => darab = d);
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
    ButtonClick();
}

function Törlés() {

    document.getElementById("töröl").addEventListener("click", () => {
        let szam = document.getElementById("törlendőszámú").value;
        fetch(`api/etel/${szam}`,
            { method: 'DELETE' })
            .then(r => r.json())
            .then(d => console.log(d))


    });
    ButtonClick();
}