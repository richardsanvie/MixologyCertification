document.addEventListener('DOMContentLoaded', function () {
    var linkButton = document.getElementById('linkButton');

    linkButton.addEventListener('click', function () {
        window.location.href = 'https://www.linkedin.com/in/richardsanvie/';
    });
});

AOS.init();

// var i = setInterval(function () {

//     clearInterval(i);
//     document.getElementById("loading").style.display = "none";
//     document.getElementById("conteudo").style.display = "inline";

// }, 4000);