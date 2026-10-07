function wybierz(plik) {

    const kangur = document.getElementById("kangur");

    kangur.src = plik;
}


function bezRamy() {

    const kangur = document.getElementById("kangur");

    kangur.removeAttribute("src");
}