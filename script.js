
// UP Court Case Status Website

document.addEventListener("DOMContentLoaded", function () {

    console.log("UP Court Case Status Website Loaded Successfully!");

    const links = document.querySelectorAll(".links a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Opening: " + link.textContent.trim());
        });
    });

});

