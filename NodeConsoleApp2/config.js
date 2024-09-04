var urlString = window.location.href;
var url = new URL(urlString);
var comb = url.searchParams.get("comb").split(",");

function elemPressed(id) {
    document.getElementById(id).style.display = "flex";
    document.getElementById(id).style.backgroundColor = "#ffffff69";
}
function elemEnabled(id) {
    document.getElementById(id).style.display = "flex";
    document.getElementById(id).style.borderColor = "#000000b4";
    document.getElementById(id + '-txt').style.color = "white";
    if (document.getElementById(id + '-img') != null) {
        document.getElementById(id + '-img').style.opacity = "1";
    }
}
function elemDisabled(id) {
    document.getElementById(id).style.display = "flex";
    document.getElementById(id).style.borderColor = "#0000004a";
    document.getElementById(id + '-txt').style.color = "#ffffff3b";
    if (document.getElementById(id + '-img') != null) {
        document.getElementById(id + '-img').style.opacity = "0.5";
    }
}
function elemHidden(id) {
    document.getElementById(id).style.display = "none";
}

let rules = [
    'terra,15,mt,base',
    'terra,15,mt,medium',
    'terra,15,cvt,medium',
    'terra,15t,cvt,base',
    'terra,15t,cvt,medium',
    'terra,18,mt,base',
    'terra,18,cvt,medium',
    'terra,18,cvt,maximum',
    'terra,18,at,medium',
    'terra,18,at,maximum',
    'terra,20d,mt,base',
    'terra,20d,mt,medium',
    'terra,20d,at,maximum',
    'indivigo,20,mt,classic',
    'indivigo,20,at,classic',
    'indivigo,20,at,maximum',
    'indivigo,20dt,mt,classic',
    'indivigo,20dt,mt,maximum',
    'indivigo,20dt,at,classic',
    'indivigo,20dt,at,maximum',
    'amily,15,mt,base',
    'amily,15,mt,medium',
    'amily,15,cvt,medium',
    'amily,15t,cvt,base',
    'amily,15t,cvt,medium',
    'amily,18,mt,base',
    'amily,18,cvt,medium',
    'amily,18,cvt,maximum',
    'amily,18,at,medium',
    'amily,18,at,maximum',
]

let configCombination = [];

function configBehavior(elemId) {
    configCombination[configCombination.length] = elemId;
    for (rule in rules) {
        let arr = rules[rule].split(',');
        let a = 0;
        
        for (obj in arr) {
            if (arr[obj] in configCombination) { a += 1; }
            if (a == configCombination.length) {
                elemEnabled('elem-' + arr[obj]);
            } else {
                elemDisabled('elem-' + arr[obj]);
                if (obj == 0) {console.log(arr[obj] + '-');
                }
            }
        }
    }
}
