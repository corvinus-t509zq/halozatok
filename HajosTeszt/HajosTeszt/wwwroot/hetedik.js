var kérdés;
var aktuáliskérdés;
var kérdésszám = 1;
let a1;
let a2;
let a3;

window.onload = function abc() {
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => letöltésbefejeződött(data));
}

function letöltésbefejeződött(d) {
    console.log(d)
    
    kérdés = d;
    //console.log(kérdés.questionText);
    kérdésBetöltés(kérdésszám);
}

//function Kérdésmegjelenítés(kérdésszám) {
//    console.log(kérdés);
//    let kérdésid = document.getElementById("kérdés_szöveg")
//    kérdésid.innerText = kérdések[kérdésszám].questionText;
//    let válasz1 = document.getElementById("válasz1")
//    válasz1.innerText = kérdések[kérdésszám].answer1;
//    let válasz2 = document.getElementById("válasz2")
//    válasz2.innerText = kérdések[kérdésszám].answer2;
//    let válasz3 = document.getElementById("válasz3")
//    válasz3.innerText = kérdések[kérdésszám].answer3;
//    let kép = document.getElementById("kép1")
//    //kép.style.backgroundImage = `url(${kérdések[kérdésszám].image})`;
//    //kép.style.backgroundImage = ("/teszt-0050.jpg");
//    a1 = document.getElementById("válasz1")
//    a2 = document.getElementById("válasz2")
//    a3 = document.getElementById("válasz3")

//}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => KérdésMegjelenítés2(data));
}
function KérdésMegjelenítés2(kérdés) {
    console.log(kérdés);
    //console.log(kérdés.questionText);
    aktuáliskérdés = kérdés;
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText;
    document.getElementById("válasz1").innerText = kérdés.answer1;
    document.getElementById("válasz2").innerText = kérdés.answer2;
    document.getElementById("válasz3").innerText = kérdés.answer3;

    //console.log(kérdés.image.length);
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;

    //if (kérdés.image.length != 0) {
    //    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    //    console.log("Van kép");
    //} else {
    //    document.getElementById("kép1").style.visibility = "hidden";
    //}

    a1 = document.getElementById("válasz1")
    a2 = document.getElementById("válasz2")
    a3 = document.getElementById("válasz3")
}
function válasz1onclick() {
    //console.log(aktuáliskérdés.questionText);
    //console.log(aktuáliskérdés.correctAnswer);

    if (aktuáliskérdés.correctAnswer == 1) {

        a1.style.backgroundColor = "green";
    }
    else {
        a1.style.backgroundColor = "red";
    }
}
function válasz2onclick() {

    if (aktuáliskérdés.correctAnswer == 2) {
        a2.style.backgroundColor = "green";
    }
    else {
        a2.style.backgroundColor = "red";
    }
}
function válasz3onclick() {

    if (aktuáliskérdés.correctAnswer == 3) {
        a3.style.backgroundColor = "green";
    }
    else {
        a3.style.backgroundColor = "red";
    }
}


function előre() {
    //console.log(kérdések.) ;
    //if (kérdés.length == (kérdésszám + 1)) {
    //    kérdésszám = 0
    //}
    //else {
    //    kérdésszám++;
    //}

    kérdésszám += 1;
    //console.log(kérdésszám)
    kérdésBetöltés(kérdésszám);
    a1.style.backgroundColor = "cornflowerblue";
    a2.style.backgroundColor = "cornflowerblue";
    a3.style.backgroundColor = "cornflowerblue";
}
function vissza() {
    // console.log(kérdések.length);
    //if (0 == kérdésszám) {
    //    kérdésszám = 2;
    //}
    //else {
    //    kérdésszám--;
    //}

    kérdésszám -= 1;
    //console.log(kérdésszám);
    kérdésBetöltés(kérdésszám);
    a1.style.backgroundColor = "cornflowerblue";
    a2.style.backgroundColor = "cornflowerblue";
    a3.style.backgroundColor = "cornflowerblue";
}