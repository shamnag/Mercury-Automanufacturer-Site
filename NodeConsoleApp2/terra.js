

document.getElementsByClassName("slide-image")[0].style.display = "block";
document.getElementById("about-front").style.display = "none";
document.getElementById("about-backseats").style.display = "none";
document.getElementById("button-rear").style.backgroundColor = "#ffffffd8";
document.getElementById("b-rear-txt").style.color = "black";
document.getElementById("button-frontseats").style.backgroundColor = "#ffffffd8";
document.getElementById("b-fseat-txt").style.color = "black";

autoScroll();

function changeSlide(n, name) {
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

function autoScroll() {
    changeSlide(1, 'slide-image')
    setTimeout(autoScroll, 5000);
}

function aboutWindow(feature) {
    
    switch(feature) {
        case 'trunk':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Багажник';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Новый внедорожник предлагает просторный багажник, идеально подходящий для семейных путешествий. Гибкая система трансформации сидений увеличивает объем для крупногабаритных предметов. Ваши вещи всегда в порядке и под защитой.';
            document.getElementsByClassName('about-img')[0].src = 'res/suv-trunk.jpg';
            break;
        case 'rearlight':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Задние фонари';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Современные задние фонари с LED-технологией обеспечивают яркость и безопасность. Они гарантируют четкую видимость и мгновенную реакцию на торможение. Ваш автомобиль выделяется стильным освещением.';
            document.getElementsByClassName('about-img')[0].src = 'res/rearlight.png';
            break;
        case 'exhaust':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Выхлоп';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Экологичная система выхлопа снижает выбросы и шум, обеспечивая комфорт. Глушитель минимизирует шум, подчеркивая мощный и чистый звук двигателя. Наслаждайтесь спортивным характером автомобиля.';
            document.getElementsByClassName('about-img')[0].src = 'res/exhaust.png';
            break;
        case 'suspension':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Подвеска';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Подвеска внедорожника обеспечивает плавный ход и уверенное управление на любых дорогах. Амортизаторы и стабилизаторы поглощают неровности, делая поездку комфортной. Вы всегда будете чувствовать себя уверенно и безопасно.';
            document.getElementsByClassName('about-img')[0].src = 'res/suspension.webp';
            break;
        case 'sidestep':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Выдвигающаяся подножка';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '30px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Новый внедорожник оснащен удобной выдвигающейся подножкой, облегчающей посадку и высадку. Она автоматически выдвигается при открытии двери и убирается при закрытии. Комфорт и стиль на каждом шагу.';
            document.getElementsByClassName('about-img')[0].src = 'res/sidestep.jpeg';
            break;
        case 'hatch':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Панорамная крыша';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Панорамная крыша нового внедорожника дарит невероятные виды и ощущение свободы. Большая площадь остекления позволяет наслаждаться природой и солнечным светом. Ваши поездки станут еще более приятными и запоминающимися.';
            document.getElementsByClassName('about-img')[0].src = 'res/hatch.jpg';
            break;
        case 'wheel':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Диски';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Стильные легкосплавные диски нового внедорожника подчеркивают его мощный и динамичный облик. Прочные и легкие, они обеспечивают отличную управляемость и безопасность. Ваш автомобиль всегда будет выглядеть эффектно.';
            document.getElementsByClassName('about-img')[0].src = 'res/wheel.webp';
            break;
        case 'engine':
            document.getElementsByClassName('about-window')[0].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[0].innerHTML = 'Двигатель';
            document.getElementsByClassName('about-headtext')[0].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[0].innerHTML = 'Мощный двигатель нового внедорожника сочетает в себе высокую производительность и экономичность. Современные технологии обеспечивают отличную динамику и низкий уровень выбросов. Наслаждайтесь мощью и эффективностью на каждой поездке.';
            document.getElementsByClassName('about-img')[0].src = 'res/enginebay.jpg';
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
        case 'seats':
            document.getElementsByClassName('about-window')[1].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[1].innerHTML = 'Качество сидений';
            document.getElementsByClassName('about-headtext')[1].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[1].innerHTML = 'Сиденья нового внедорожника изготовлены из высококачественных материалов, обеспечивая максимальный комфорт. Эргономичный дизайн поддерживает правильную осанку и снижает усталость. Каждая поездка станет удовольствием.';
            document.getElementsByClassName('about-img')[1].src = 'res/seatmaterial.webp';
            break;
        case 'fold':
            document.getElementsByClassName('about-window')[1].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[1].innerHTML = 'Складывающийся ряд';
            document.getElementsByClassName('about-headtext')[1].style.fontSize = '35px';
            document.getElementsByClassName('about-text')[1].innerHTML = 'Задний ряд сидений легко складывается, увеличивая багажное пространство. Это удобно для перевозки крупных предметов и семейных путешествий. Максимальная гибкость и функциональность для вашего удобства.';
            document.getElementsByClassName('about-img')[1].src = 'res/backseatfold.jpeg';
            break;
        case 'armrest':
            document.getElementsByClassName('about-window')[1].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[1].innerHTML = 'Задний подлокотник';
            document.getElementsByClassName('about-headtext')[1].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[1].innerHTML = 'Задний подлокотник с подстаканниками и разъемами для зарядки добавляет комфорта для пассажиров второго ряда. Он обеспечивает удобство во время долгих поездок. Все для вашего комфорта и удовольствия.';
            document.getElementsByClassName('about-img')[1].src = 'res/armrest.webp';
            break;
        case 'seatheat':
            document.getElementsByClassName('about-window')[1].style.display = 'flex';
            document.getElementsByClassName('about-headtext')[1].innerHTML = 'Подогрев сидений';
            document.getElementsByClassName('about-headtext')[1].style.fontSize = '40px';
            document.getElementsByClassName('about-text')[1].innerHTML = 'Подогрев задних сидений создает уют и комфорт в холодное время года. Независимая регулировка позволяет каждому пассажиру выбрать свою комфортную температуру. Наслаждайтесь теплом и заботой в каждой поездке.';
            document.getElementsByClassName('about-img')[1].src = 'res/backseatheat.jpg';
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
        case 'frontseats':
            document.getElementById('about-backseats').style.display = "none";
            document.getElementById('about-frontseats').style.display = "block";
            document.getElementsByClassName('about-window')[1].style.display = 'none';
            document.getElementsByClassName('about-headtext')[1].innerHTML = '';
            document.getElementsByClassName('about-text')[1].innerHTML = '';
            document.getElementsByClassName('about-img')[1].src = '';
            document.getElementById("button-frontseats").style.backgroundColor = "#ffffffd8";
            document.getElementById("b-fseat-txt").style.color = "black";
            document.getElementById("button-backseats").style.backgroundColor = "#1c1c1c27";
            document.getElementById("b-bseat-txt").style.color = "white";
            break;
        case 'backseats':
            document.getElementById('about-backseats').style.display = "block";
            document.getElementById('about-frontseats').style.display = "none";
            document.getElementsByClassName('about-window')[1].style.display = 'none';
            document.getElementsByClassName('about-headtext')[1].innerHTML = '';
            document.getElementsByClassName('about-text')[1].innerHTML = '';
            document.getElementsByClassName('about-img')[1].src = '';
            document.getElementById("button-frontseats").style.backgroundColor = "#1c1c1c27";
            document.getElementById("b-fseat-txt").style.color = "white";
            document.getElementById("button-backseats").style.backgroundColor = "#ffffffd8";
            document.getElementById("b-bseat-txt").style.color = "black";
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
    buttonEnabled('button-20d');
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
    if (button == 'button-20d') {
        resetButtons();
        buttonPressed('button-20d');
        buttonDisabled('button-CVT');
        configCombination = [];
        configCombination[0] = '2.0d';
    }

    /*TRANSMISSION*/
    if (button == 'button-MT') {
        if (configCombination[0] == '1.5' || configCombination[0] == '1.8' || configCombination[0] == '2.0d') {
            if (configCombination[0] == '1.5') {
                buttonEnabled('button-base');
                buttonEnabled('button-medium');
                buttonDisabled('button-AT')
            } else {
                buttonEnabled('button-AT');
            }
            if (configCombination[0] == '2.0d') {
                buttonDisabled('button-CVT');
                buttonDisabled('button-max');
                buttonEnabled('button-base');
                buttonEnabled('button-medium');
            } else {
                buttonEnabled('button-CVT');
            }
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
        if (configCombination[0] == '1.8' || configCombination[0] == '2.0d') {
            buttonEnabled('button-MT');
            if (configCombination[0] == '2.0d') {
                buttonDisabled('button-CVT');
                buttonDisabled('button-base');
                buttonDisabled('button-medium');
                buttonEnabled('button-max');
            } else {
                buttonEnabled('button-CVT');
            }
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
            configCombination[0] == '1.8' && configCombination[1] == 'MT' ||
            configCombination[0] == '2.0d' && configCombination[1] == 'MT')
        {
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
            if (configCombination[0] == '2.0d' && configCombination[1] == 'MT') {
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
            configCombination[0] == '1.8' && configCombination[1] == 'AT' ||
            configCombination[0] == '2.0d' && configCombination[1] == 'MT')
        {
            if (configCombination[0] == '1.5' && configCombination[1] == 'CVT' ||
                configCombination[0] == '1.8' && configCombination[1] == 'CVT') {
                buttonDisabled('button-base');
            } else {
                buttonEnabled('button-base');
            }                     
            if (configCombination[0] == '1.5' || configCombination[0] == '1.5t') {
                buttonDisabled('button-max');
            } else if (configCombination[0] == '1.8' || configCombination[0] == '2.0d') {
                buttonEnabled('button-max');
            }
            if (configCombination[0] == '1.8' && configCombination[1] == 'AT') {
                buttonDisabled('button-base');
            }
            if (configCombination[0] == '2.0d' && configCombination[1] == 'MT') {
                buttonDisabled('button-max');
            }
            buttonPressed('button-medium');
            configCombination[2] = 'Medium';
        }
    }
    if (button == 'button-max') {
        if (configCombination[0] == '1.8' && configCombination[1] == 'CVT' ||
            configCombination[0] == '1.8' && configCombination[1] == 'AT' ||
            configCombination[0] == '2.0d' && configCombination[1] == 'AT')
        {
            if (configCombination[0] == '1.8' && configCombination[1] == 'CVT' ||
                configCombination[0] == '1.8' && configCombination[1] == 'AT')
            {
                buttonDisabled('button-base');
                buttonEnabled('button-medium');
            }
            buttonPressed('button-max');
            configCombination[2] = 'Maximum';
        }
    }
}

function openConfig() {
    window.open('config.html?comb=terra,' + configCombination.toString());
}