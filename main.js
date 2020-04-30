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

function createsidebar() {
    var changediv = document.getElementsByClassName('col-md-12')[0];
    changediv.setAttribute('class', 'col-md-8');
    var getdiv = document.getElementsByTagName('body')[0];
    var creatediv = document.createElement('div');
    var sidebarH = document.createElement('h1');
    sidebarH.textContent = "Sidebar";
    var sidebarT = document.createElement('p');
    sidebarT.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eros ultrices, dapibus lacus ultrices, ultrices tortor. Nam tincidunt blandit neque, at ornare sapien ultricies ut. Integer eget ultricies velit. Cras eu tellus ex. Integer bibendum nisi neque, sed auctor odio blandit sit amet. Aenean augue tellus, tincidunt vel commodo bibendum, rutrum nec augue. Donec pulvinar sem in purus congue sodales. Nam magna urna, maximus ut eros vel, rutrum semper sem. Duis a efficitur mauris. Nunc a aliquam nisi, vel iaculis justo. Donec lacus nulla, sollicitudin vitae lectus vel, tempus vestibulum ipsum. In dignissim consequat pellentesque. Pellentesque eget eleifend velit. Aenean aliquam auctor nibh vitae tristique. Nulla facilisi.";
    creatediv.appendChild(sidebarH);
    creatediv.appendChild(sidebarT);
    creatediv.setAttribute('class', 'col-md-4');
    getdiv.appendChild(creatediv);
    var selector = document.getElementsByClassName('container')[0];
    selector.before(creatediv);
}




