
document.getElementsByClassName("slide-image")[0].style.display = "block";
document.getElementsByClassName("offer-image")[0].style.display = "block";
let timer = setInterval(function () {
    changeSlide(1, 'slide-image', 0);
    changeSlide(1, 'offer-image', 0);
}, 3000);

function changeSlide(n, name, r) {
    if (r == 1) {
        clearTimeout(timer);
        timer = setInterval(function () {
            changeSlide(1, 'slide-image', 0);
            changeSlide(1, 'offer-image', 0);
        }, 3000);
    }
    let currId;
    let slide = document.getElementsByClassName(name);
    for (let i = 0; i <= slide.length - 1; i++) {
        if (slide[i].style.display == 'block') {
            currId = i;
        }
    }
    let oldId = currId;
    currId += n;
    if (currId > slide.length - 1) { currId = 0; }
    if (currId < 0) { currId = slide.length - 1; }
    slide[oldId].style.display = "none";
    slide[currId].style.display = "block";    
}
