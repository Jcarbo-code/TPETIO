"use strict"
import carrito from './carrito.js';

document.addEventListener("DOMContentLoaded", iniciarPagina);

let main = document.querySelector(".principal");
let links = document.querySelectorAll(".link");

function iniciarPagina() {
    cargarInicio();
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            cargarPagina("html/" + link.id + ".html");
        });
    });
}

async function cargarInicio() {

    let inicio = await fetch("html/inicio.html");
    let texto = await inicio.text();
    main.innerHTML = texto;
}

async function cargarPagina(link) {
    let cargar = await fetch(link);
    let texto = await cargar.text();
    main.innerHTML = texto;

    if (link == "html/compra.html") {
        carrito();
    }

}