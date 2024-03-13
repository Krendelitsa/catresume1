let button1 = document.querySelector("#button1");

button1.onclick = function () {
    let C = document.querySelector("#C")
    C.style.display = 'block';
    let P = document.querySelector("#P")
    P.style.display = 'none';
    let L = document.querySelector("#L")
    L.style.display = 'none';
    let main_info = document.querySelector("#main_info")
    main_info.style.display = 'none';
};

let button2 = document.querySelector("#button2");

button2.onclick = function () {
    let P = document.querySelector("#P")
    P.style.display = 'Block';
    let C = document.querySelector("#C")
    C.style.display = 'none';
    let L = document.querySelector("#L")
    L.style.display = 'none';
    let main_info = document.querySelector("#main_info")
    main_info.style.display = 'none';
};

let button3 = document.querySelector("#button3");

button3.onclick = function () {
    let L = document.querySelector("#L")
    L.style.display = 'block';
    let C = document.querySelector("#C")
    C.style.display = 'none';
    let P = document.querySelector("#P")
    P.style.display = 'none';
    let main_info = document.querySelector("#main_info")
    main_info.style.display = 'none';
};