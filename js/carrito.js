"use strict"
export default carrito;


function carrito() {
    
    let inputproducto = document.querySelector("#producto");
    let inputcantidad = document.querySelector("#cantidad");
    let inputprecio = document.querySelector("#precio");
    const selectElement = document.querySelector('#producto');
    let DESCUENTO = 0.9;

    
    const url = 'https://60c902ba7dafc90017ffbf64.mockapi.io/api/usuario';
    let id = 0;
    getData();
    const list = document.querySelector("#usuarios");
    const filtro = document.querySelector("#filtrar");

    let productos = [{
        "producto": "Delivery",
        "cantidad": 1,
        "precio": 80,
        "subtotal": 80,
    }];

    mostrar();

    selectElement.addEventListener('change', (event) => {
        let precio = 0;
        switch (inputproducto.value) {
            case "EmpanadasCarne":
            case "EmpanadasPollo":
            case "EmpanadasJamonyQueso":
                document.querySelector('#precio').value = 70;

                break;
            case "Coca500cc":
            case "Sprite500cc":
            case "Fanta500cc":
            case "CocaLight500cc":
                document.querySelector('#precio').value = 80;
                break;
            case "Agua":
            case "AndesRubia":
            case "AndesRoja":
            case "QuilmesRubia":
            case "QuilmesNegra":
            case "StellaRubia":
            case "StellaNegra":
            case "Brahma":
                document.querySelector('#precio').value = 100;
                break;
            case "Soda":
                document.querySelector('#precio').value = 120;
                break;
            case "CroquetasPapa":
            case "CroquetasVerdura":
                document.querySelector('#precio').value = 130;
                break;
            case "Coca1.5lts":
            case "Sprite1.5lts":
            case "Fanta1.5lts":
            case "CocaLight1.5lts":
            case "SchweppesPomelo1.5lts":
            case "SchweppesTonica1.5lts":
                document.querySelector('#precio').value = 180;
                break;
            case "EnsaladaChica":
            case "Morcilla":
            case "Chorizo":
                document.querySelector('#precio').value = 200;
                break;
            case "PapasFritasChicas":
            case "PapasHornoChicas":
            case "VerdurasGrilladasChicas":
            case "RusaChica":
            case "PurePapa":
            case "PureCalabaza":
            case "PureMixto":
                document.querySelector('#precio').value = 250;
                break;
            case "EnsaladaMedia":
            case "Ravioli":
            case "Tortellini":
            case "PapasFritasGrandes":
            case "RusaMediana":
            case "SandwichSuprema":
            case "SandwichMilanesaCarneCompleta":
            case "SandwichMilanesaCarneSuper":
            case "SandwichPollo":
                document.querySelector('#precio').value = 300;
                break;

            case "FiletBrotola":
            case "MilanesaCarne":
            case "SupremaPollo":
            case "PapasHornoGrandes":
            case "VerdurasGrilladasGrandes":
            case "TartaJamonyQueso":
            case "TartaAcelga":
            case "TartaAtun":
            case "TartaBrocoliCalabaza":
            case "TartaCapresse":
                document.querySelector('#precio').value = 350;
                break;
            case "Promo1":
                document.querySelector('#precio').value = 350;

                break;
            case "Tortelloni":
            case "Ñoquis":
            case "SandwichSupremaSuper":
            case "SandwichMilanesaCarneSuper":
                document.querySelector('#precio').value = 360;
                break;
            case "Cappelletti":
            case "SandwichLomito":
                document.querySelector('#precio').value = 380;
                break;
            case "EnsaladaGrande":
            case "RusaGrande":
            case "TortillaChica":
                document.querySelector('#precio').value = 400;
                break;
            case "GuisoMondongo":
            case "GuisoLentejas":
            case "ArrozPollo":
            case "Cannelloni":
            case "PizzaJamonyQueso":
            case "PizzaAcelga":
            case "PizzaAtun":
            case "PizzaBrocoliCalabaza":
            case "PizzaCapresse":
                document.querySelector('#precio').value = 450;
                break;
            case "PizzaPancetaHuevo":
            case "TortillaGrande":
            case "1/2Pollo":
                document.querySelector('#precio').value = 500;
                break;
            case "Lasagne":
            case "MilanesaCarneNapolitana":
            case "MilanesaPolloNapolitana":
            case "SandwichVacio":
            case "SandwichColaCuadril":
            case "SandwichBondiola":
                document.querySelector('#precio').value = 600;
                break;
            case "PolloEntero":
                document.querySelector('#precio').value = 950;
                break;
            case "Promo3":
                document.querySelector('#precio').value = 1100;
                break;
            case "LenguaVinagreta":
            case "MatambrePollo":
                document.querySelector('#precio').value = 1700;
                break;
            case "Vacio":
            case "ColitaCuadril":
            case "BondiolaCerdo":
            case "Lechón":
            case "MatambreCarne":
                document.querySelector('#precio').value = 2000;
                break;
        }
    });

    function agregar(evento) {
        evento.preventDefault();
        
        let producto = inputproducto.value;
        let cantidad = inputcantidad.value;
        let precio = parseFloat(parseFloat(inputprecio.value).toFixed(2));
        let subtotal = inputcantidad.value * inputprecio.value;

        let renglon = {
            "producto": producto,
            "cantidad": cantidad,
            "precio": precio,
            "subtotal": subtotal
        }
        if (cantidad > 0) {
            productos.push(renglon);
            inputproducto.value = "";
            inputcantidad.value = "";
            inputprecio.value = "";
            mostrar();
        }

        calcularTotal();
    }

    function promo1(event) {
        event.preventDefault();
        productos.push({
            "producto": "Papas Fritas",
            "cantidad": 1,
            "precio": 100,
            "subtotal": 100
        }, {
            "producto": "Gaseosa 500ml",
            "cantidad": 1,
            "precio": 100,
            "subtotal": 100
        }, {
            "producto": "Sandwich de milanesa",
            "cantidad": 1,
            "precio": 200,
            "subtotal": 200
        });


        mostrar();
        calcularTotal();
    }

    function borrar() {
        let borrar = productos.length;
        if (borrar > 1) {
            for (let i = 1; i < borrar; i++) {
                productos.pop();
            }
            mostrar();
            total.innerHTML = `$80`;
        }
    }

    function mostrar() {
        let tabla = document.querySelector("#tabla");

        tabla.innerHTML = `<thead>
        <tr class="tituloTabla">
        <td class="producto1">Producto</td>
        <td class="columna">Precio</td>
        <td class="columna">Cantidad</td>
        <td class="columna">Subtotal</td>
        </tr>
        </thead><tbody id='cuerpoTabla1'></tbody>`;

        let cuerpoTabla = document.getElementById('cuerpoTabla');

        for (let i = 0; i < productos.length; i++) {
            cuerpoTabla1.innerHTML += `<tr class="renglon">`;
            if (productos[i].producto == 'SandwichMilanesaCarneSuper') {

                tabla.innerHTML += `<tr class="resaltado">
            <td class="producto1"> Super Sandwich -----> ${100-(DESCUENTO.toFixed(1))*100}% DESCUENTO!!</td>
            <td class="columna">$ ${productos[i].precio*DESCUENTO}</td>
            <td class="columna">${productos[i].cantidad}</td>
            <td class="columna"> $ ${productos[i].precio*DESCUENTO*productos[i].cantidad}</td>
            </tr>`;
            } else if (productos[i].producto == 'Promo3') {
                tabla.innerHTML += `<tr class="resaltado">
            <td class="producto1">"Papas Fritas + Spiedo a las brasas"</td>
            <td class="columna">$ ${productos[i].precio}</td>
            <td class="columna">${productos[i].cantidad}</td>
            <td class="columna"> $ ${productos[i].subtotal}</td>
            </tr>`;

            } else {
                tabla.innerHTML += `
                <td class="producto1" >${productos[i].producto} </td>
                <td class="columna"> $ ${productos[i].precio} </td>
                <td class="columna">${productos[i].cantidad}</td>
                <td class="columna"> $ ${productos[i].subtotal}</td>
                `;
            }
        }

    }

    function calcularTotal() {
        total.innerHTML = "";
        let totalprecio = 0;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].producto == 'SandwichMilanesaCarneSuper') {
                productos[i].subtotal = productos[i].precio * DESCUENTO * productos[i].cantidad;
            }
            totalprecio += productos[i].subtotal;
        }
        total.innerHTML += `$${totalprecio}`;
    }

    function borrarCampos() {
        document.querySelector("#validationCustom01").value = "";
        document.querySelector("#validationCustom02").value = "";
        document.querySelector("#validationCustom03").value = "";
        document.querySelector("#txtInput").value = "";
        document.querySelector("#exampleFormControlTextarea1").value = "";
        borrar();
        tabla.innerHTML = `<thead>
        <tr class="tituloTabla">
        <td class="producto1">Producto</td>
        <td class="columna">Precio</td>
        <td class="columna">Cantidad</td>
        <td class="columna">Subtotal</td>
        </tr>
        </thead>
        <tr class="tituloTabla">
        <td class="producto1">Delivery</td>
        <td class="columna">1</td>
        <td class="columna">80</td>
        <td class="columna">80</td>
        </tr>`
    }

    let captchaAleatorio = 0;
    let a = ' ';
    let b = ' ';
    let c = ' ';
    let captcha;

    function refresh_captcha(evento) { 

        let operacion = '-*+';
        c = operacion.charAt(Math.floor(Math.random() * 3));
        a = Math.floor((Math.random() * 9) + 1);
        b = Math.floor((Math.random() * 9) + 1);
        captchaAleatorio = a + c + b;
        document.getElementById("mainCaptcha").innerHTML = captchaAleatorio;
        return captchaAleatorio;
    }

    function verificar(evento) {
        evento.preventDefault();
        switch (c) {
            case '+':
                captcha = a + b
                break;
            case '-':
                captcha = a - b
                break;
            default:
                captcha = a * b
                break;
        }
        let input = document.getElementById("txtInput").value;
        if (input == captcha) {
            console.log(captcha + " = " + input + " captcha correcto");
            document.getElementById("validacion").innerHTML = "Su pedido a sido recibido!";
            personaNueva();
            borrarCampos();
            refresh_captcha();
        } else {
            console.log(captcha + " != " + input + " captcha incorrecto");
            document.getElementById("validacion").innerHTML = "Captcha incorrecto";
            refresh_captcha();
        }
    }

    let btnAgregar = document.querySelector("#btn-agregar");
    btnAgregar.addEventListener("click", agregar);

    let btnBorrar = document.querySelector("#btn-borrar");
    btnBorrar.addEventListener("click", borrar);

    let btnPromo1 = document.querySelector("#btn-Promo1");
    btnPromo1.addEventListener("click", promo1);

    let total = document.querySelector("#total");
    total.innerHTML = `$80`;

    let btnEnviar = document.getElementById("btn-enviar");
    btnEnviar.addEventListener("click", verificar);

    let recargar = document.getElementById("refresh")
    recargar.addEventListener("click", refresh_captcha);

    refresh_captcha();


    


    let usuario = [];

    function personaNueva() {
        let nombre = document.querySelector("#validationCustom01").value;
        let dni = document.querySelector("#validationCustom02").value;
        let domicilio = document.querySelector("#validationCustom03").value;
        let dato = document.querySelector("#exampleFormControlTextarea1").value;
        let total = document.querySelector("#total").textContent;

        let usuario = {
            "nombre": nombre,
            "dni": dni,
            "domicilio": domicilio,
            "descripcion": dato,
            "total": total
        }
        agregarPersona(usuario);
    }

    async function agregarPersona(persona) {
        try {
            let res = await fetch(url, {
                "method": "POST",
                "headers": { "Content-type": "application/json" },
                "body": JSON.stringify(persona)
            });

            if (res.status == 201) {
                console.log("Creado!");
                getData(); 
            }
        } catch (error) {
            console.log(error);
        }
    }

    function variosUsuarios(usuario) {
        for (let i = 0; i < 3; i++) {
            agregarPersona(usuario);
        }
    }

    async function getData() {
        try {
            let res = await fetch(url);
            let datos = await res.json();
            mostrarPersonas(datos);
        } catch (error) {
            console.log(error);
        }
    }

    function mostrarPersonas(usuario) {

        const list = document.querySelector("#usuarios");
        list.innerHTML = `<thead><tr class="tituloTabla"></tr>
         <tr>
         <td >Nombre</td>
         <td >Dni</td>
         <td >Domicilio</td>
         <td >Descripcion</td>
         <td >Total</td>
         <td class="botonesEditar"> <button class="btn btn-dark" id="btn-agregarVarios" type="submit">Usuarios x3</button></td>
         <td class="botonesEditar"> <button class="btn btn-dark" id="btn-mostrarTodos" type="submit">Mostrar Todos</button></td>
         </tr></thead><tbody id='cuerpoTabla2'></tbody>`;

        mostrarUsuarios(usuario);
        document.getElementById("btn-agregarVarios").addEventListener("click", variosUsuarios);

    }

    async function mostrarUsuarios(usuario) {
        let cuerpoTabla2 = document.getElementById('cuerpoTabla2');
        for (let i = 0; i < usuario.length; i++) {
            cuerpoTabla2.innerHTML += `<tr class="renglon" id="${usuario[i].id}">
         <td >${usuario[i].nombre}</td>
         <td >${usuario[i].dni}</td>
         <td >${usuario[i].domicilio}</td>
         <td >${usuario[i].descripcion}</td>
         <td > ${usuario[i].total}</td>
         <td > <button class="btn btn-dark btn-editar"  value="${usuario[i].id}" type="submit">Editar</button></td>
         <td > <button class="btn btn-dark btn-eliminar" value="${usuario[i].id}" type="submit">Borrar</button></td>
         </tr>`;
            id = usuario[i].id;
        }
        
        document.querySelectorAll(".btn-eliminar").forEach(boton => {
            boton.addEventListener("click", function() {
                eliminarPersona(boton.value);
                document.getElementById(boton.value).remove(); 

            });
        });

        document.querySelectorAll(".btn-editar").forEach(boton => {
            boton.addEventListener("click", function() {
                mostrarEditar(boton.parentNode.parentNode);
            });
        });
        document.getElementById("btn-mostrarTodos").addEventListener("click", e => {
            mostrarUsuarios(usuario);
        });

        mostrarFiltro(usuario);
    }

    function mostrarFiltro(usuario) {

        filtro.innerHTML = `<label class="form-label">Buscar domicilio</label>
         <input type="text" class="form-control" id="domicilioEntrega">
         <button class="btn btn-dark" id="btn-filtrar" type="submit">Buscar</button>`;

        document.getElementById("btn-filtrar").addEventListener("click", e => {
            filtrar(usuario);
        });
    }

    function filtrar(usuario) {
        let domicilioEntrega = document.getElementById("domicilioEntrega").value;
        let domicilioEncontrado = [];
        for (let i = 0; i < usuario.length; i++) {
            if (domicilioEntrega == usuario[i].domicilio) {
                domicilioEncontrado.push(usuario[i]);
                mostrarPersonas(domicilioEncontrado);
            }
        }
    }

    async function eliminarPersona(id) {
        try {
            let borrar = await fetch(url + "/" + id, {
                "method": "DELETE",
                "headers": { "Content-type": "application/json" },
                "mode": "cors"
            });
        } catch (error) {
            console.log(error);
        }
    }

    let ultimaFila = "";

    function mostrarEditar(fila) {
        let filaInputs = document.querySelector('.editInput');
        if (filaInputs != null) {
            filaInputs.remove();
            if (ultimaFila != filaInputs) {
                fila.insertAdjacentHTML("afterend", " ");
                let insertNode = "<tr class='editInput'><td><input id='nombreEditar' type='text'></input></td><td><input id='dniEditar' type='number'></input></td><td><input id='domicilioEditar' type='text'></input></td><td><input id='descripcionEditar' type='text'></input></td><td><input id='totalEditar' type='number' ></input></td><td colspan='2'><button class='btn btn-dark btn-guadarCambios' value=" + fila.id + ">Guardar Cambios</button></td></tr>";
                fila.insertAdjacentHTML("afterend", insertNode);
                ultimaFila = fila;
                document.querySelector(".btn-guadarCambios").addEventListener("click", e => {
                    editarPersona(fila.id);
                });
            }
        } else {
            fila.insertAdjacentHTML("afterend", " ");
            let insertNode = "<tr class='editInput'></td><td><input id='nombreEditar' type='text'></input></td><td><input id='dniEditar' type='number'></input></td><td><input id='domicilioEditar' type='text'></input></td><td><input id='descripcionEditar' type='text'></input></td><td><input id='totalEditar' type='number'></input></td><td colspan='2'><button class='btn btn-dark btn-guadarCambios' value=" + fila.id + ">Guardar Cambios</button></td></tr>";
            fila.insertAdjacentHTML("afterend", insertNode);
            ultimaFila = fila;

            document.querySelector(".btn-guadarCambios").addEventListener("click", e => {

                editarPersona(fila.id);
                console.log(fila.id);
            });

        }
    }

    async function editarPersona(id) {
        let nombre = document.querySelector("#nombreEditar").value;
        let dni = document.querySelector("#dniEditar").value;
        let domicilio = document.querySelector("#domicilioEditar").value;
        let descripcion = document.querySelector("#descripcionEditar").value;
        let total = document.querySelector("#totalEditar").value;

        let usuario = {
            "nombre": nombre,
            "dni": dni,
            "domicilio": domicilio,
            "descripcion": descripcion,
            "total": total
        }

        try {
            let res = await fetch(url + "/" + id, {
                "method": "PUT",
                "mode": "cors",
                "headers": { "Content-type": "application/json" },
                "body": JSON.stringify(usuario)
            });

            getData();
        } catch (error) {
            console.log(error);
        }
    }
}