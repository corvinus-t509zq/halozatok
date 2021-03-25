var kérdések;
var kérdésszám = 1;
let a1;
let a2;
let a3;
window.onload = function letöltés() {
    fetch('/questions.json')
        .then(r => r.json())
        .then(d => letöltésbefejeződött(d))

   
}

function letöltésbefejeződött(d) {
    //console.log("Sikeres letőltés")
    console.log(d)
    kérdések = d;
   // console.log(kérdések)
   
    Kérdésmegjelenítés(kérdésszám);
}

 function Kérdésmegjelenítés(kérdésszám) {
    let kérdésid = document.getElementById("kérdés_szöveg")
     kérdésid.innerText = kérdések[kérdésszám].questionText;

     let válasz1 = document.getElementById("válasz1")
     válasz1.innerText = kérdések[kérdésszám].answer1;

     let válasz2 = document.getElementById("válasz2")
     válasz2.innerText = kérdések[kérdésszám].answer2;
     
     let válasz3 = document.getElementById("válasz3")
     válasz3.innerText = kérdések[kérdésszám].answer3;
   
     let kép = document.getElementById("kép1")
     //kép.style.backgroundImage = `url(${kérdések[kérdésszám].image})`;
     //kép.style.backgroundImage = ("/teszt-0050.jpg");
     
      a1 = document.getElementById("válasz1")
      a2 = document.getElementById("válasz2")
      a3 = document.getElementById("válasz3")
    
}

function válasz1onclick(){
    //console.log("válasz1")
    if (kérdések[kérdésszám].correctAnswer == 1) {
        a1.style.backgroundColor = "green";
    }
    else {
        a1.style.backgroundColor = "red";
    }
}
function válasz2onclick(){
    //console.log("válasz2")
    if (kérdések[kérdésszám].correctAnswer == 2) {
        a2.style.backgroundColor = "green";
    }
    else {
        a2.style.backgroundColor = "red";
    }
}
function válasz3onclick(){
    //console.log("válasz3")
    if (kérdések[kérdésszám].correctAnswer == 3) {
        a3.style.backgroundColor = "green";
    }
    else {
        a3.style.backgroundColor = "red";
    }
}


function előre() {

    if (kérdések.length==(kérdésszám+1)) {
        kérdésszám = 0
    }
    else {
       kérdésszám++;
    }
    //console.log(kérdésszám)

    Kérdésmegjelenítés(kérdésszám);
    a1.style.backgroundColor = "cornflowerblue";
    a2.style.backgroundColor = "cornflowerblue";
    a3.style.backgroundColor = "cornflowerblue";
}
function vissza() {
    
    if (0 == kérdésszám) {
        kérdésszám = 2;
    }
    else {
        kérdésszám--;
    }
   //console.log(kérdésszám)
    Kérdésmegjelenítés(kérdésszám);
    a1.style.backgroundColor = "cornflowerblue";
    a2.style.backgroundColor = "cornflowerblue";
    a3.style.backgroundColor = "cornflowerblue";
}