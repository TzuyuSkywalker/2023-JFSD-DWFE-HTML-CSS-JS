class Trabajo{
    lugar;
    puesto;
    carrera;
    lapso;

    constructor(lugar, puesto, carrera, lapso){
        this.lugar = lugar;
        this.puesto = puesto;
        this.carrera = carrera;
        this.lapso = lapso;
    }

    mostrarTrabajo(){
        let trabajos = document.getElementById("trabajos");
        let laburo = document.createElement("div");
        let lugar = document.createElement("p");
        let puesto = document.createElement("p");
        let carrera = document.createElement("p");
        let lapso = document.createElement("p");
        lugar.innerHTML = "<b>Lugar:</b>" + this.lugar;
        puesto.innerHTML = "<b>Puesto:</b>" + this.puesto;
        carrera.innerHTML = "<b>Carrera:</b>" + this.carrera;
        lapso.innerHTML = "<b>Lapso:</b>" + this.lapso;
        laburo.appendChild(lugar);
        laburo.appendChild(puesto);
        laburo.appendChild(carrera);
        laburo.appendChild(lapso);   
        laburo.style.padding = "1em";
        laburo.style.border = "1px solid black";
        laburo.style.margin = "3em";
        trabajos.appendChild(laburo);
    }
}

let trabajos = [];
trabajos[0] = new Trabajo(
    "JYP Entertainment", 
    "Miembro del grupo TWICE",
    "Bailarina y cantante profesional",
    "20 de octubre del 2015 - Actualidad"
);

function dinamico(){
    trabajos.forEach(trabajo => {
        trabajo.mostrarTrabajo();
    });
}

function expandirContraer() {
    let educacion = document.getElementById("educacion");
    educacion.style.display == "block" ?
    educacion.style.display = "none" :
    educacion.style.display = "block";
}

function aumentarFoto(identificador){
    let foto = document.getElementById(identificador);
    foto.style.width = "28.76em";
    foto.style.float = "inline-end";
}

function disminuirFoto(identificador){
    let foto = document.getElementById(identificador);
    foto.style.width = "14.38em";
    foto.style.float = "right";
}
