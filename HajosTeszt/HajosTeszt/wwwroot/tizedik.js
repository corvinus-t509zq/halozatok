var kérdés;
var aktuáliskérdés;
var kérdésszám = 1;
let a1;
let a2;
let a3;

var hotList = [];
var quesetionsInHostList = 3;
var displayedQuestion;
var numberOfQuestions;
var nextQuestion = 1;
var timeoutHandler;

window.onload = function abc() {
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => letöltésbefejeződött(data));
   
}

function letöltésbefejeződött(d) {
    console.log(d)
    console.log("asdasd");
    kérdés = d;
    //console.log(kérdés.questionText);
    //kérdésBetöltés(kérdésszám);
    init();
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

function init() {
    for (var i = 0; i < quesetionsInHostList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }
    for (var i = 0; i < quesetionsInHostList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}
function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
            if (!result.ok) {
                console.error(`Hibás letöltés: ${response.status}`)
            }
            else {
                return result.json()
            }
        })
        .then(q => {
            hotList[destination].question = q;
            hotList[destination].goodAnswers = 0;
            console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
            if (displayedQuestion == undefined && destination == 0) { 
                displayedQuestion = 0;
                KérdésMegjelenítés2();
            }
        }
            );
}


function KérdésMegjelenítés2() {
    let kérdés = hotList[displayedQuestion].question;
    
    aktuáliskérdés = kérdés;
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText;
    document.getElementById("válasz1").innerText = kérdés.answer1;
    document.getElementById("válasz2").innerText = kérdés.answer2;
    document.getElementById("válasz3").innerText = kérdés.answer3;

    if (kérdés.image) {
       //document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
        document.getElementById("kép1").src = kérdés.image;
        document.getElementById("kép1").style.display = "block";
    } else {
        document.getElementById("kép1").style.display = "none";
    }
    

 

    a1 = document.getElementById("válasz1")
    a2 = document.getElementById("válasz2")
    a3 = document.getElementById("válasz3")
}

function válasz1onclick() {
    //console.log(aktuáliskérdés.questionText);
    //console.log(aktuáliskérdés.correctAnswer);
    document.getElementById(`válasz3`).style.pointerEvents = "none";
    document.getElementById(`válasz1`).style.pointerEvents = "none";
    document.getElementById(`válasz2`).style.pointerEvents = "none";
    if (aktuáliskérdés.correctAnswer == 1) {

        a1.style.backgroundColor = "green";
        timeoutHandler = setTimeout(előre, 3000);
        hotList[displayedQuestion].goodAnswers++;
        if (hotList[displayedQuestion].goodAnswers == 3) {
            kérdésBetöltés(nextQuestion, displayedQuestion)
            nextQuestion++;
        }
    }
    else {
        a1.style.backgroundColor = "red";
        timeoutHandler = setTimeout(előre, 3000);
        hotList[displayedQuestion].goodAnswers = 0;
    }
}
function válasz2onclick() {
    document.getElementById(`válasz3`).style.pointerEvents = "none";
    document.getElementById(`válasz1`).style.pointerEvents = "none";
    document.getElementById(`válasz2`).style.pointerEvents = "none";
    if (aktuáliskérdés.correctAnswer == 2) {
        a2.style.backgroundColor = "green";
        timeoutHandler = setTimeout(előre, 3000);
        hotList[displayedQuestion].goodAnswers++;
        if (hotList[displayedQuestion].goodAnswers == 3) {
            kérdésBetöltés(nextQuestion, displayedQuestion)
            nextQuestion++;
        }
    }
    else {
        a2.style.backgroundColor = "red";
        timeoutHandler = setTimeout(előre, 3000);
        hotList[displayedQuestion].goodAnswers = 0;
    }
}
function válasz3onclick() {
    document.getElementById(`válasz3`).style.pointerEvents = "none";
    document.getElementById(`válasz1`).style.pointerEvents = "none";
    document.getElementById(`válasz2`).style.pointerEvents = "none";
    if (aktuáliskérdés.correctAnswer == 3) {
        a3.style.backgroundColor = "green";
        timeoutHandler = setTimeout(előre, 3000);
        hotList[displayedQuestion].goodAnswers++;
        if (hotList[displayedQuestion].goodAnswers == 3) {
            kérdésBetöltés(nextQuestion, displayedQuestion)
            nextQuestion++;
        }
    }
    else {
        a3.style.backgroundColor = "red";
        timeoutHandler = setTimeout(előre, 3000);
        hotList[displayedQuestion].goodAnswers = 0;
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

   // kérdésszám += 1;
    clearTimeout(timeoutHandler);
    displayedQuestion++;
    if (displayedQuestion == quesetionsInHostList) {
        displayedQuestion = 0;
    }
    KérdésMegjelenítés2();
    //console.log(kérdésszám)
   // kérdésBetöltés(kérdésszám);
    a1.style.backgroundColor = "cornflowerblue";
    a2.style.backgroundColor = "cornflowerblue";
    a3.style.backgroundColor = "cornflowerblue";
    document.getElementById(`válasz3`).style.pointerEvents = "auto";
    document.getElementById(`válasz1`).style.pointerEvents = "auto";
    document.getElementById(`válasz2`).style.pointerEvents = "auto";
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
    document.getElementById(`válasz3`).style.pointerEvents = "auto";
    document.getElementById(`válasz1`).style.pointerEvents = "auto";
    document.getElementById(`válasz2`).style.pointerEvents = "auto";
}