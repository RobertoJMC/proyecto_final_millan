let saldo=0;
let usuario;
let password;
let opcion=0;
let condicion;
let aux=0;
let listaContactos=[];
let listaContactosAux=[];
let botonVolverMenu;

let botonRegistra = document.querySelector(".botonRegistrar")
botonRegistra.addEventListener("click",mostrarFormulario)

function mostrarFormulario()
{   
    let regis = sessionStorage.getItem("registrado")
    if (regis != 1)
    {
        let formulario = document.querySelector(".formRegistrar")
        formulario.classList.remove("formRegistrar")
        formulario.className = "formRegistrar2"
    }

}


let botonRegistraUsuario = document.querySelector("#registraUsuario")
botonRegistraUsuario.addEventListener("click",registrarUsuario)


function registrarUsuario()
{
    let regis = sessionStorage.getItem("registrado")
    if (regis != 1)
    {
        usuario = document.getElementById("usuarioreg").value
        let pass1 = document.getElementById("passwordreg1").value
        let pass2 = document.getElementById("passwordreg2").value
        if (pass1==pass2 && usuario!=" " && pass1!=" " && pass2!=" ")
        {
            password = pass2
            sessionStorage.setItem("user",usuario)
            sessionStorage.setItem("passw",password)
            alert("Usuario registrado")
            sessionStorage.setItem("registrado",'1')
            sessionStorage.setItem("aux",0)
        }
        else
        {
            alert("Datos incorrectos")
        }
    }

}


let botonIngresa = document.querySelector(".botonIngresar")
botonIngresa.addEventListener("click",mostrarFormulario2)

function mostrarFormulario2()
{
    let valid = sessionStorage.getItem("validado")
    if (valid != 1)
    {
        let formulario = document.querySelector(".formIngresar")
        formulario.classList.remove("formIngresar")
        formulario.className = "formIngresar2"
    }

}


let botonIngresaUsuario = document.querySelector("#ingresaUsuario")
botonIngresaUsuario.addEventListener("click",validarUsuario)

function validarUsuario()
{
    let valid = sessionStorage.getItem("validado")
    if (valid != 1)
    {
        let nomb = document.getElementById("usuarioing").value
        let pass = document.getElementById("passwording").value
        usuario = sessionStorage.getItem("user")
        password = sessionStorage.getItem("passw")
        if (nomb==usuario && pass==password)
        {
            alert("Bienvenido a My banking")
            sessionStorage.setItem("cond",1)
            sessionStorage.setItem("validado",'1')
            sessionStorage.getItem("aux")
        }
        else
        {
            alert("Nombre de usuario o contraseña incorrecta")
            alert("Si no posee una cuenta, debe registrarse primero")
            sessionStorage.setItem("cond",0)
        }       
    }  
}

function mostrarMenu()
{
    let formulario = document.querySelector(".menu")
    formulario.classList.remove("menu")
    formulario.className = "menu2"
    let carru = document.querySelector(".carrusel")
    carru.classList.remove("carrusel")
    carru.className = "carrusel2"
    let saldin = Number(sessionStorage.getItem("saldillo"))
    document.getElementById("saldoaFavor").value = saldin
    
}

function cerrarMenu()
{
    let a = sessionStorage.getItem("cond")
    if (a==1)
    {
        let formulario = document.querySelector(".menu2")
        formulario.classList.remove("menu2")
        formulario.className = "menu"
        let carru = document.querySelector(".carrusel2")
        carru.classList.remove("carrusel2")
        carru.className = "carrusel"
        sessionStorage.setItem("validado",'0')
    }
}

function ingresarDinero()
{
    let formulario = document.querySelector(".menu2")
    formulario.classList.remove("menu2")
    formulario.className = "menu"
    let form = document.querySelector(".menuIngresarDinero")
    form.classList.remove("menuIngresarDinero")
    form.className = "menuIngresarDinero2"
}

function acreditarDinero()
{
    let monto = Number(document.getElementById("montoIngresado").value)
    let saldin = Number(sessionStorage.getItem("saldillo"))
    saldin+=monto
    sessionStorage.setItem("saldillo",saldin)
    alert("Se ha acreditado " + monto + " en su cuenta")
}

function transferirContactoNuevo()
{
    let formular = document.querySelector(".menu2")
    formular.classList.remove("menu2")
    formular.className = "menu"
    let form = document.querySelector(".transferirContactoNuevo")
    form.classList.remove("transferirContactoNuevo")
    form.className = "transferirContactoNuevo2"  
}

function acreditarTransferencia()
{
    let monto = Number(document.getElementById("montoTransferirContacto").value)
    let saldin = Number(sessionStorage.getItem("saldillo"))
    let nombre = document.getElementById("nombreContacto").value
    saldin-=monto
    sessionStorage.setItem("saldillo",saldin)
    alert("Se ha transferido " + monto + " a " + nombre)    
}

function muestraFormularioContactoNuevo()
{
    let formular = document.querySelector(".menu2")
    formular.classList.remove("menu2")
    formular.className = "menu"
    let form = document.querySelector(".agregarContactoNuevo")
    form.classList.remove("agregarContactoNuevo")
    form.className = "agregarContactoNuevo2"      
}


function Contactos (nombre,dni,numeroCuenta,telefono)
{
    this.nombre = nombre;
    this.dni = dni;
    this.numeroCuenta = numeroCuenta;
    this.telefono = telefono
}


function guardaContatoNuevo()
{
    let contac = document.getElementById("nombreContactoNuevo").value
    let iden = document.getElementById("dniContactoNuevo").value
    let cuenta = document.getElementById("numeroCuentaContactoNuevo").value
    let tel = document.getElementById("numeroTelefonoContactoNuevo").value
    let contador = Number(sessionStorage.getItem("aux"))
    if (contador!=0)
    {
        listaContactosAux = sessionStorage.getItem("arreglo")
        listaContactos = JSON.parse(listaContactosAux)
        listaContactos.push(new Contactos(contac,iden,cuenta,tel))
        sessionStorage.setItem("arreglo",JSON.stringify(listaContactos))
        contador+=1
        sessionStorage.setItem("aux",contador)
    }
    else
    {
        listaContactos.push(new Contactos(contac,iden,cuenta,tel))
        sessionStorage.setItem("arreglo",JSON.stringify(listaContactos))
        contador+=1
        sessionStorage.setItem("aux",contador)
    }
    alert("Usuario registrado")
}

function volverMenu()
{
    let formulario = document.querySelector(".menu")
    formulario.classList.remove("menu")
    formulario.className = "menu2"
    let bandera = sessionStorage.getItem("flag")
    let seccion = document.getElementById("listaContactos")
    seccion.innerHTML = " "

}

function verContactos()
{

    let contador = Number(sessionStorage.getItem("aux"))
    let formular = document.querySelector(".menu2")
    formular.classList.remove("menu2")
    formular.className = "menu"
    if (contador!=0)
    {
        listaContactosAux = sessionStorage.getItem('arreglo')
        listaContactos = JSON.parse(listaContactosAux)
        let seccion = document.getElementById("listaContactos")
        let titulo = document.createElement("div")
        titulo.classList.add("tituloLista")
        titulo.innerHTML = `<h3> Lista de contactos </h3>
                            <hr/>`
        seccion.appendChild(titulo)
        for (let i=0; i<contador ; i++)
        {
            let contenedor = document.createElement("div")
            contenedor.classList.add("lista")
            contenedor.innerHTML += `<h4> Contacto : ${i+1} </h4>
                                    <p>Nombre: ${listaContactos[i].nombre} </p>
                                    <p>DNI: ${listaContactos[i].dni} </p>
                                    <p>N° Cuenta: ${listaContactos[i].numeroCuenta} </p>
                                    <p>Telefono: ${listaContactos[i].telefono} </p>
                                    <hr/>                                   
                                                                        `;
            seccion.appendChild(contenedor)

        }
        let boton = document.createElement("div")
        boton.classList.add("botonLista")
        boton.innerHTML = `<input type="button" value="Volver a menu" id="vuelveMenu" class="boton">`
        seccion.appendChild(boton)

        let bandera = sessionStorage.getItem("flag")
        botonVolverMenu = document.querySelector("#vuelveMenu")
        botonVolverMenu.addEventListener("click",volverMenu)
        sessionStorage.setItem("flag",1)
    }
    else
    {
        alert("No posees contactos en tu lista")
    }

}


function verProcesoTransferencia()
{
    let contador = Number(sessionStorage.getItem("aux"))
    let formular = document.querySelector(".menu2")
    formular.classList.remove("menu2")
    formular.className = "menu"
    if (contador!=0)
    {
        listaContactosAux = sessionStorage.getItem('arreglo')
        listaContactos = JSON.parse(listaContactosAux)
        let seccion = document.getElementById("listaContactos")
        let titulo = document.createElement("div")
        titulo.classList.add("tituloLista")
        titulo.innerHTML = `<h3> Lista de contactos </h3>
                            <hr/>`
        seccion.appendChild(titulo)
        for (let i=0; i<contador ; i++)
        {
            let contenedor = document.createElement("div")
            contenedor.classList.add("lista")
            contenedor.innerHTML += `<h4> Contacto : ${i+1} </h4>
                                    <p>Nombre: ${listaContactos[i].nombre} </p>
                                    <p>DNI: ${listaContactos[i].dni} </p>
                                    <p>N° Cuenta: ${listaContactos[i].numeroCuenta} </p>
                                    <p>Telefono: ${listaContactos[i].telefono} </p>
                                    <hr/>                                   
                                                                        `;
            seccion.appendChild(contenedor)

        }
        let boton = document.createElement("div")
        boton.classList.add("botonLista")
        boton.innerHTML = `<input type="button" value="Volver a menu" id="vuelveMenu" class="boton">`
        seccion.appendChild(boton)

        let bandera = sessionStorage.getItem("flag")
        botonVolverMenu = document.querySelector("#vuelveMenu")
        botonVolverMenu.addEventListener("click",volverMenu)
        sessionStorage.setItem("flag",1)
    }
}

aux = sessionStorage.getItem("cond")
if (aux==1)
{
    mostrarMenu();

}
else
{
    cerrarMenu();
}

let botonCerrarSesion = document.querySelector("#cierraSesion")
botonCerrarSesion.addEventListener("click", cerrarMenu)

let botonIngresarDinero = document.querySelector("#ingresaDinero")
botonIngresarDinero.addEventListener("click", ingresarDinero)

let botonAcreditaDinero = document.querySelector("#acreditaMonto")
botonAcreditaDinero.addEventListener("click", acreditarDinero)

let botonTransfiereDinero = document.querySelector("#transfiereContactoNuevo")
botonTransfiereDinero.addEventListener("click", transferirContactoNuevo)

let botonTransferenciaContactoNuevo = document.querySelector("#transferenciaContactoNuevo")
botonTransferenciaContactoNuevo.addEventListener("click", acreditarTransferencia)

let botonAgregaContactoNuevo = document.querySelector("#agregaContactoNuevo")
botonAgregaContactoNuevo.addEventListener("click", muestraFormularioContactoNuevo)

let botonAgregarContactoNuevo = document.querySelector("#agregarContactoNuevo")
botonAgregarContactoNuevo.addEventListener("click", guardaContatoNuevo)

let botonVisualizaContactos = document.querySelector("#visualizaContactos")
botonVisualizaContactos.addEventListener("click", verContactos)

let botonTransfiereContactoLista = document.querySelector("#transfiereContactoLista")
botonTransfiereContactoLista.addEventListener("click", verProcesoTransferencia)