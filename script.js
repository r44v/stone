// alert("Hello Anne!");

function runme() {
    var eggImg = document.getElementById("eggImg");
    var cat1Img = document.getElementById("cat1Img");

    var urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get('day');

    if (myParam == "2") {
        eggImg.style.display = 'none';
        cat1Img.style.display = 'inline';
    }
}


window.addEventListener("load", (event) => {
    runme();
});