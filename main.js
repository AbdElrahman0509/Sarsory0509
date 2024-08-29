let btn = document.querySelector("button");
let div = document.querySelector(".counter");
let para = document.querySelector("p");
let frm = document.querySelector(".from");


btn.onclick = function () {
    function countdown() {
        div.innerHTML -= 1;
        if (div.innerHTML === "0") {
            clearInterval(cont);
            btn.style.cssText = "display: none;"
            div.style.cssText = "display: none;"
            para.style.cssText = "display: block;"
            frm.style.cssText = "display: block;"
        }
    }
    let cont = setInterval(countdown, 1000);
}




