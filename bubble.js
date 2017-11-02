
document.addEventListener("DOMContentLoaded", function(event) {
    let button = document.querySelector("button");

    button.addEventListener("click", function(event) {
        let img = document.createElement("img");
        img.src = "http://jonvilma.com/images/bubble-2.jpg" ;
        img.style.height = "50px";
        img.style.top = Math.round(Math.random() * 95 ).toString() + "%";
        img.style.left = Math.round(Math.random() * 99 ).toString() + "%";
        img.style.position = "fixed";

        document.body.appendChild(img);
    })
})