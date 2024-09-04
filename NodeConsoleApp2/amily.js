

document.getElementById("about-front").style.display = "none";  
document.getElementById("button-rear").style.backgroundColor = "#ffffffd8";
document.getElementById("b-rear-txt").style.color = "black";

function aboutWindow(feature) {
    
    switch(feature) {
        case 'spoiler':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Выдвигающийся спойлер';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '30px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Выдвигающийся спойлер спортивного купе автоматически подстраивается для максимальной аэродинамики. Он не только улучшает устойчивость на высокой скорости, но и придает автомобилю агрессивный и динамичный вид. Управляйте дорогой с уверенностью и стилем.';
            document.getElementsByClassName('about-img')[0].src = 'res/indivigo-spoiler.jpg';
            break;
        case 'rearlight':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Задние фонари';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Задние фонари седана с LED-технологией обеспечивают яркость и безопасность на дороге. Их стильный дизайн гармонично сочетается с элегантным обликом автомобиля. Вы будете заметны и днем, и ночью.';
            document.getElementsByClassName('about-img')[0].src = 'res/indivigo-rearlight.jpg';
            break;
        case 'trunk':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Багажник';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '30px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Лифтбэк багажник седана сочетает в себе удобство седана и вместительность лифтбека. Он открывается широко, позволяя легко загружать крупные предметы. Это идеальное решение для тех, кто ценит пространство и функциональность.';
            document.getElementsByClassName('about-img')[0].src = 'res/amily-trunk.png';
            break;
        case 'sensor':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Сенсор багажника';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Сенсор открытия багажника седана делает загрузку вещей максимально удобной. Просто проведите ногой под бампером, и багажник откроется автоматически. Больше не нужно искать ключи, когда руки заняты.';
            document.getElementsByClassName('about-img')[0].src = 'res/amily-sensor.png';
            break;
        case 'suspension':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Комфортная подвеска';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '30px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Подвеска седана настроена для максимального комфорта на любых дорогах. Она плавно поглощает неровности, обеспечивая мягкое и приятное вождение. Каждая поездка станет удовольствием, независимо от дорожных условий.';
            document.getElementsByClassName('about-img')[0].src = 'res/indivigo-suspension.jpg';
            break;
        case 'panoramic':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Люк';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Люк на крыше седана добавляет ощущение свободы и простора, позволяя наслаждаться свежим воздухом и солнечным светом. Он легко открывается одним нажатием, добавляя роскошь и стиль вашему вождению. Наслаждайтесь поездками с видом на небо.';
            document.getElementsByClassName('about-img')[0].src = 'res/hatch.jpg';
            break;
        case 'light':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'CosmoVision';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Передние фары седана с технологией умного светового пучка автоматически адаптируются к дорожным условиям. Они обеспечивают идеальное освещение без ослепления встречных водителей. Безопасность и комфорт в каждом повороте.';
            document.getElementsByClassName('about-img')[0].src = 'res/indivigo-light.jpg';
            break;
        case 'wheel':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Диски';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Легкосплавные диски седана подчеркивают его элегантность и современность. Прочные и легкие, они улучшают управляемость и добавляют автомобилю динамичный вид. Ваш седан всегда будет выглядеть стильно и уверенно на дороге.';
            document.getElementsByClassName('about-img')[0].src = 'res/amily-wheel.png';
            break;
        default: break;
    }
}

function changeAbout(side) {
    switch (side) {
        case 'rear':
            document.getElementById("about-front").style.display = "none";
            document.getElementById("about-rear").style.display = "block";
            document.getElementsByClassName('about-window')[0].style.display = 'none';
            document.getElementsByClassName('about-headtext')[0].innerHTML = '';
            document.getElementsByClassName('about-text')[0].innerHTML = '';
            document.getElementsByClassName('about-img')[0].src = '';
            document.getElementById("button-rear").style.backgroundColor = "#ffffffd8";
            document.getElementById("b-rear-txt").style.color = "black";
            document.getElementById("button-front").style.backgroundColor = "#1c1c1c27";
            document.getElementById("b-front-txt").style.color = "white";
            break;
        case 'front':
            document.getElementById("about-rear").style.display = "none";
            document.getElementById("about-front").style.display = "block";
            document.getElementsByClassName('about-window')[0].style.display = 'none';
            document.getElementsByClassName('about-headtext')[0].innerHTML = '';
            document.getElementsByClassName('about-text')[0].innerHTML = '';
            document.getElementsByClassName('about-img')[0].src = '';
            document.getElementById("button-rear").style.backgroundColor = "#1c1c1c27";
            document.getElementById("b-rear-txt").style.color = "white";
            document.getElementById("button-front").style.backgroundColor = "#ffffffd8";
            document.getElementById("b-front-txt").style.color = "black";
            break;
        default:
            break;
    }
}

let configCombination = [];

function resetButtons() {
    buttonEnabled('button-15');
    buttonEnabled('button-15t');
    buttonEnabled('button-18');
    buttonEnabled('button-MT');
    buttonEnabled('button-CVT');
    buttonEnabled('button-AT');
    buttonEnabled('button-base');
    buttonEnabled('button-medium');
    buttonEnabled('button-max');
}

function buttonPressed(name) {
    document.getElementById(name).style.backgroundColor = "white";
    document.getElementById(name).style.borderColor = "white";
    document.getElementById(name + '-txt').style.color = 'black';
}
function buttonDisabled(name) {
    document.getElementById(name).style.backgroundColor = "transparent";
    document.getElementById(name).style.borderColor = "#737373bf";
    document.getElementById(name + '-txt').style.color = '#737373bf';
}

function buttonEnabled(name) {
    document.getElementById(name).style.backgroundColor = "transparent";
    document.getElementById(name).style.borderColor = "white";
    document.getElementById(name + '-txt').style.color = 'white';
}

function pidor() {
    console.log(configCombination);
    alert(configCombination);
}

function configButtons(button) {
    /*ENGINE*/
    if (button == 'button-15') {
        resetButtons();
        buttonPressed('button-15');
        buttonDisabled('button-AT');
        buttonDisabled('button-max');
        configCombination = [];
        configCombination[0] = '1.5';
    }
    if (button == 'button-15t') {
        resetButtons();
        buttonPressed('button-15t');
        buttonDisabled('button-AT');
        buttonDisabled('button-MT');
        buttonDisabled('button-max');
        configCombination = [];
        configCombination[0] = '1.5t';
    }
    if (button == 'button-18') {
        resetButtons();
        buttonPressed('button-18');
        configCombination = [];
        configCombination[0] = '1.8';
    }

    /*TRANSMISSION*/
    if (button == 'button-MT') {
        if (configCombination[0] == '1.5' || configCombination[0] == '1.8') {
            if (configCombination[0] == '1.5') {
                buttonEnabled('button-base');
                buttonEnabled('button-medium');
                buttonDisabled('button-AT')
            } else {
                buttonEnabled('button-AT');
            }
            buttonEnabled('button-CVT');
            if (configCombination[0] == '1.8') {
                buttonEnabled('button-base');
                buttonDisabled('button-medium');
                buttonDisabled('button-max');
            }
            buttonPressed('button-MT');
            configCombination[1] = 'MT';
            configCombination[2] = '';
        }
    }
    if (button == 'button-CVT') {
        if (configCombination[0] == '1.5' || configCombination[0] == '1.5t' || configCombination[0] == '1.8') {
            if (configCombination[0] == '1.5' || configCombination[0] == '1.5t') {
                buttonDisabled('button-AT');
            } else {
                buttonEnabled('button-AT');
            }
            if (configCombination[0] == '1.5t') {
                buttonDisabled('button-MT');
            } else {
                buttonEnabled('button-MT');
            }
            if (configCombination[0] == '1.5') {
                buttonDisabled('button-base');
                buttonDisabled('button-max');
                buttonEnabled('button-medium');
            }
            if (configCombination[0] == '1.8') {
                buttonDisabled('button-base');
                buttonEnabled('button-medium');
                buttonEnabled('button-max');
            }
            buttonPressed('button-CVT');
            configCombination[1] = 'CVT';
            configCombination[2] = '';
        }
    }
    if (button == 'button-AT') {
        if (configCombination[0] == '1.8') {
            buttonEnabled('button-MT');
            buttonEnabled('button-CVT');
            if (configCombination[0] == '1.8') {
                buttonDisabled('button-base');
                buttonEnabled('button-medium');
                buttonEnabled('button-max');
            }

            buttonPressed('button-AT');
            configCombination[1] = 'AT';
            configCombination[2] = '';
        }
    }

    /*CONFIGURATION*/
    if (button == 'button-base') {
        if (configCombination[0] == '1.5' && configCombination[1] == 'MT' ||
            configCombination[0] == '1.5t' && configCombination[1] == 'CVT' ||
            configCombination[0] == '1.8' && configCombination[1] == 'MT') {
            buttonEnabled('button-medium');
            if (configCombination[0] == '1.5' || configCombination[0] == '1.5t') {
                buttonDisabled('button-max');
            } else {
                buttonEnabled('button-max');
            }
            if (configCombination[0] == '1.8' && configCombination[1] == 'MT') {
                buttonDisabled('button-medium');
                buttonDisabled('button-max');
            }
            buttonPressed('button-base');
            configCombination[2] = 'Base';
        }
    }
    if (button == 'button-medium') {
        if (configCombination[0] == '1.5' && configCombination[1] == 'MT' ||
            configCombination[0] == '1.5' && configCombination[1] == 'CVT' ||
            configCombination[0] == '1.5t' && configCombination[1] == 'CVT' ||
            configCombination[0] == '1.8' && configCombination[1] == 'CVT' ||
            configCombination[0] == '1.8' && configCombination[1] == 'AT') {
            if (configCombination[0] == '1.5' && configCombination[1] == 'CVT' ||
                configCombination[0] == '1.8' && configCombination[1] == 'CVT') {
                buttonDisabled('button-base');
            } else {
                buttonEnabled('button-base');
            }
            if (configCombination[0] == '1.5' || configCombination[0] == '1.5t') {
                buttonDisabled('button-max');
            } else if (configCombination[0] == '1.8') {
                buttonEnabled('button-max');
            }
            if (configCombination[0] == '1.8' && configCombination[1] == 'AT') {
                buttonDisabled('button-base');
            }
            buttonPressed('button-medium');
            configCombination[2] = 'Medium';
        }
    }
    if (button == 'button-max') {
        if (configCombination[0] == '1.8' && configCombination[1] == 'CVT' ||
            configCombination[0] == '1.8' && configCombination[1] == 'AT') {
            if (configCombination[0] == '1.8' && configCombination[1] == 'CVT' ||
                configCombination[0] == '1.8' && configCombination[1] == 'AT') {
                buttonDisabled('button-base');
                buttonEnabled('button-medium');
            }
            buttonPressed('button-max');
            configCombination[2] = 'Maximum';
        }
    }
}

function openConfig() {
    window.open('config.html?comb=amily,' + configCombination.toString());
}