function faktoriális(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * faktoriális(n - 1)
    }
}
window.onload = function () {
    //szorzótábla
    let hova = document.getElementById("containerDiv");
    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        sor.classList.add("sor");
        hova.appendChild(sor);

        for (var o = 0; o < 10; o++) {
            let element = document.createElement("div");
            element.classList.add("elem");

            sor.appendChild(element);
            element.innerText = (s + 1) * (o + 1);
        }
    }
    //1. feladat
    let container = document.getElementById("feladat1");
    for (var i = 0; i < 10; i++) {
        let div = document.createElement("div");
        container.appendChild(div);
        div.innerText = (i + 1);
        div.classList.add("elemek"); //class név hozzáadása
        div.setAttribute('id', 'divid'); //id név hozzáadása
        let rgb = 255 - ((i + 1) * 15);
        div.style.backgroundColor = `rgb(${rgb},${rgb},${rgb})`;
    }

    //2.feladat pascal
    let p = document.getElementById("pascal");
    for (var sor = 0; sor < 10; sor++) {
        let pascaldiv = document.createElement("div");
        pascaldiv.classList.add("pascalsor");
        p.appendChild(pascaldiv);
        for (var oszlop = 1; oszlop <= sor; oszlop++) {
            let pascalelem = document.createElement("div");
            pascaldiv.appendChild(pascalelem);
            pascalelem.classList.add("pascalelemclass");
            pascalelem.innerHTML = `${faktoriális(sor-1) / (faktoriális(oszlop-1) * faktoriális(sor-oszlop))}`;

            //pascalelem.innerHTML = `${sor-1}: ${oszlop-1}`;

        }


    }


}



//functio pascal(){
//    for (var sor = 0; sor < 10; sor++) {


//        for (var oszlop = 0; oszlop < sor; oszlop++) {

//        }
//    }
//}