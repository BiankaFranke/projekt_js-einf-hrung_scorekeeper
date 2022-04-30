// ==============Testen==============
console.log('it works');

// ==============Deklarien==============
let CounterAnzeigeHome = document.querySelector('.CounterAnzeigeHome');
let CounterAnzeigeAway = document.querySelector('.CounterAnzeigeAway');
let Home= 0;
let Away = 0;
let CounterNameHome = document.querySelector('.CounterNameHome');
let CounterNameAway = document.querySelector('.CounterNameAway');

// ==============Home Funktionen==============

function Home1() {
    Home += 1;    // Home = Home + 1; 
    CounterAnzeigeHome.innerHTML = Home;
};

function Home2() {
    Home += 2;  // Home = Home + 2; 
    CounterAnzeigeHome.innerHTML = Home;
};

function Home3() {
    Home += 3; // Home = Home + 3; 
    CounterAnzeigeHome.innerHTML = Home;
};

// ==============Awway Funktionen==============

function Away1() {
    Away += 1;    // Away = Away + 1; 
    CounterAnzeigeAway.innerHTML = Away;
};

function Away2() {
    Away += 2;     // Away = Away + 2; 
    CounterAnzeigeAway.innerHTML = Away;
};

function Away3() {
    Away += 3;     // Away = Away + 3; 
    CounterAnzeigeAway.innerHTML = Away;
};

// ==============Reset Funktionen==============

function reset() {
    Home = 0;
    Away = 0;
    CounterAnzeigeHome.innerHTML = Home;
    CounterAnzeigeAway.innerHTML = Away;
};

// ==============Team-Name Funktionen EXTRAS==============

function teamName() { 
    window.location.href="#teamNameHome";
};

function submit() {
    let x = document.getElementById("NameHome").value;
    document.getElementById("AnzeigeNameHome").innerHTML = x;
    CounterNameHome.innerHTML = x;
    let y = document.getElementById("NameAway").value;
    document.getElementById("AnzeigeNameAway").innerHTML = y;
    CounterNameAway.innerHTML = y;
}