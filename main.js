function changetitleindex() {
    document.title = "Webprogramming (LIX018P05) - Index";
}

function changetitlesecond() {
    document.title = "Webprogramming (LIX018P05) - Second";
}

function addarticle() {
    var par = document.createElement("p");
    par.setAttribute('id', 'scheme');
    par.innerHTML = ("Welcome!");
    var art = document.createElement("article");
    var header = document.createElement("h1");
    header.innerHTML = ("Article 2");
    art.appendChild(header);
    art.appendChild(par);
    var placepara = document.getElementsByClassName("col-md-12")[0];
    placepara.appendChild(art);
}

function changelink() {
    var finddiv = document.getElementById('links');
    var link = finddiv.getElementsByTagName('a')[2];
    link.setAttribute('href', 'https://www.google.com/');

}

function addlink() {
    var newLi = document.createElement("li");
    var newA = document.createElement("a");
    var menu = document.getElementById('links').getElementsByTagName('ul')[0];
    menu.appendChild(newLi);
    newLi.appendChild(newA);
    newA.innerHTML = "Link 5";
    newA.setAttribute('href', '');
    newA.setAttribute('target', 'blank');

}

function changecolor() {
    var finddiv = document.getElementsByClassName('nav-item');
    for (var item of finddiv) {
        item.setAttribute("style", "background-color: #f10000;");
    }

}

function createscheme() {
    var scheme = {
        1 : "Week 1 : No lecture",
        2 : "Week 2 : Assignment 1",
        3 : "Week 3 : No lecture",
        4 : "Week 4 : Assignment 2",
        5 : "Week 5 : -",
        6: "Week 6 : Assignment 3",
        7 : "Week 7 : Final Project"}
    document.getElementById('scheme').innerHTML = scheme["1"] + " " + scheme['2'] + " " + scheme['3'] + " " + scheme['4'] + " " + scheme['5'] + " " + scheme['6'] + " " + scheme['7'];

}
