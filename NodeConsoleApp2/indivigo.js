

document.getElementById("about-front").style.display = "none";
document.getElementById('adrive').style.display = 'none';
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
            document.getElementsByClassName('about-text')[0].innerHTML = 'Задние фонари спортивного купе с LED-технологией обеспечивают яркость и мгновенную реакцию. Их уникальный дизайн подчеркивает спортивный характер автомобиля и гарантирует безопасность на дороге. Ваш купе всегда заметен и узнаваем.';
            document.getElementsByClassName('about-img')[0].src = 'res/indivigo-rearlight.jpg';
            break;
        case 'exhaust':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Выхлоп';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Система выхлопа спортивного купе создает мощный и насыщенный звук, подчеркивающий его динамичный характер. Высококачественные материалы и конструкция обеспечивают оптимальную производительность и минимальные выбросы. Наслаждайтесь мощью на каждом километре.';
            document.getElementsByClassName('about-img')[0].src = 'res/indivigo-exhaust.jpg';
            break;
        case 'brakes':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Тормоза';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Высокопроизводительные тормоза спортивного купе обеспечивают мгновенную остановку и уверенность в любой ситуации. Прочные и надежные, они идеально подходят для активного вождения. Контроль и безопасность всегда на высоте.';
            document.getElementsByClassName('about-img')[0].src = 'res/indivigo-brake.jpg';
            break;
        case 'suspension':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Спортивная подвеска';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '30px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Спортивная подвеска купе обеспечивает отличную управляемость и устойчивость на высоких скоростях. Она точно настроена для агрессивного вождения и поглощает неровности, сохраняя комфорт. Чувствуйте дорогу и наслаждайтесь каждой поездкой.';
            document.getElementsByClassName('about-img')[0].src = 'res/indivigo-suspension.jpg';
            break;
        case 'panoramic':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Панорамная крыша';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Панорамная крыша спортивного купе добавляет ощущение простора и свободы, позволяя наслаждаться видами во время поездки. Стильная и функциональная, она подчеркивает элегантность и современность автомобиля. Вождение с открытым небом над головой — это особое удовольствие.';
            document.getElementsByClassName('about-img')[0].src = 'res/indivigo-panoramic.webp';
            break;
        case 'light':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Передние фары';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Передние фары купе с LED-технологией освещают дорогу с высокой четкостью и дальностью. Их агрессивный дизайн идеально дополняет спортивный облик автомобиля. В любую погоду и в любое время суток вы будете видеть и быть замечены.';
            document.getElementsByClassName('about-img')[0].src = 'res/indivigo-light.jpg';
            break;
        case 'wheel':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Диски';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Легкосплавные диски спортивного купе не только добавляют динамичный стиль, но и улучшают управляемость. Легкие и прочные, они обеспечивают идеальный баланс между скоростью и контролем. Ваш автомобиль всегда выглядит впечатляюще и спортивно.';
            document.getElementsByClassName('about-img')[0].src = 'res/indivigo-wheel.jpg';
            break;
        case 'startstop':
            document.getElementsByClassName('about-window')[1].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[1].innerHTML = 'Кнопка запуска двигателя';
            document.getElementsByClassName('about-headtext')[1].style.fontSize = '30px';
            document.getElementsByClassName('about-text')[1].innerHTML = 'Кнопка запуска двигателя нового внедорожника обеспечивает мгновенное и удобное включение. Без ключа, всего одним нажатием, ваш автомобиль готов к поездке. Это сочетание технологий и комфорта в одном движении.';
            document.getElementsByClassName('about-img')[1].src = 'res/startstop.png';
            break;
        case 'steeringwheel':
            document.getElementsByClassName('about-window')[1].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[1].innerHTML = 'Мультируль';
            document.getElementsByClassName('about-headtext')[1].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[1].innerHTML = 'Мультимедийный руль внедорожника предлагает полный контроль на кончиках ваших пальцев. Управляйте музыкой, звонками и навигацией, не отвлекаясь от дороги. Современный дизайн и эргономика для вашего удобства.';
            document.getElementsByClassName('about-img')[1].src = 'res/steeringwheel.jpg';
            break;
        case 'multimedia':
            document.getElementsByClassName('about-window')[1].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[1].innerHTML = 'Экран мультимедии';
            document.getElementsByClassName('about-headtext')[1].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[1].innerHTML = 'Широкий экран мультимедийной системы нового внедорожника обеспечивает четкость и яркость изображения. Интуитивный интерфейс позволяет легко управлять всеми функциями. Наслаждайтесь современными технологиями и развлечениями в пути.';
            document.getElementsByClassName('about-img')[1].src = 'res/multimedia.jpg';
            break;
        case 'climate':
            document.getElementsByClassName('about-window')[1].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[1].innerHTML = 'Климат';
            document.getElementsByClassName('about-headtext')[1].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[1].innerHTML = 'Климат-контроль внедорожника гарантирует идеальную температуру в салоне в любое время года. Независимые зоны позволяют каждому пассажиру настроить комфортные условия. Ваши поездки станут еще более приятными и комфортными.';
            document.getElementsByClassName('about-img')[1].src = 'res/climate.jpg';
            break;
        default: break;
    }
}

let interiorCombination = [];
interiorCombination[0] = 'beige';
interiorCombination[1] = 'day';
buttonPressed('interior-beige');
buttonPressed('interior-day');
function interior(config) {
    switch (config) {
        case 'beige':
            interiorCombination[0] = 'beige';
            buttonPressed('interior-beige');
            buttonEnabled('interior-white');
            break;
        case 'white':
            interiorCombination[0] = 'white';
            buttonPressed('interior-white');
            buttonEnabled('interior-beige');
            break;
        case 'day':
            interiorCombination[1] = 'day';
            buttonPressed('interior-day');
            buttonEnabled('interior-night');
            break;
        case 'night':
            interiorCombination[1] = 'night';
            buttonPressed('interior-night');
            buttonEnabled('interior-day');
            break;
        default: break;
    }
    if (interiorCombination[0] == 'beige') {
        if (interiorCombination[1] == 'day') {
            document.getElementById('interior-background').src = 'res/indivigo-interior.png';
        }
        if (interiorCombination[1] == 'night') {
            document.getElementById('interior-background').src = 'res/indivigo-interior-night.png';
        }
    }
    if (interiorCombination[0] == 'white') {
        if (interiorCombination[1] == 'day') {
            document.getElementById('interior-background').src = 'res/indivigo-interior-white.png';
        }
        if (interiorCombination[1] == 'night') {
            document.getElementById('interior-background').src = 'res/indivigo-interior-white-night.png';
        }
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
    buttonEnabled('button-20');
    buttonEnabled('button-20dt');
    buttonEnabled('button-MT');
    buttonEnabled('button-AT');
    buttonEnabled('button-classic');
    buttonEnabled('button-max');
    document.getElementById('adrive').style.display = 'none';
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
    if (button == 'button-20') {
        resetButtons();
        buttonPressed('button-20');
        configCombination = [];
        configCombination[0] = '2.0';
    }
    if (button == 'button-20dt') {
        resetButtons();
        buttonPressed('button-20dt');
        configCombination = [];
        configCombination[0] = '2.0dt';
    }

    /*TRANSMISSION*/
    if (button == 'button-MT' && configCombination[0] != '') {
        buttonPressed('button-MT');
        buttonEnabled('button-AT');
        buttonEnabled('button-classic');
        buttonEnabled('button-max');
        document.getElementById('adrive').style.display = 'none';
        if (configCombination[0] == '2.0') {
            buttonDisabled('button-max');
        } 
        configCombination[1] = 'MT'
        configCombination[2] = '';
    }
    if (button == 'button-AT' && configCombination[0] != '') {
        buttonPressed('button-AT');
        buttonEnabled('button-MT');
        buttonEnabled('button-classic');
        buttonEnabled('button-max');
        document.getElementById('adrive').style.display = 'none';
        configCombination[1] = 'AT';
        configCombination[2] = '';
    }

    /*CONFIGURATION*/
    if (button == 'button-classic') {
        buttonPressed('button-classic');
        document.getElementById('adrive').style.display = 'none';
        if (! (configCombination[0] == '2.0' && configCombination[1] == 'MT')) {
            buttonEnabled('button-max');    
        }
        configCombination[2] = 'classic'
    }
    if (button == 'button-max') {
        if (!(configCombination[0] == '2.0' && configCombination[1] == 'MT')) {
            buttonPressed('button-max');
            buttonEnabled('button-classic');
            if (configCombination[0] == '2.0dt' && configCombination[1] == 'AT') {
                document.getElementById('adrive').style.display = 'flex';
                configCombination[2] = 'max-adrive';
            } else configCombination[2] = 'max';
        }
    }
}

function openConfig() {
    window.open('config.html?comb=indivigo,' + configCombination.toString());
}