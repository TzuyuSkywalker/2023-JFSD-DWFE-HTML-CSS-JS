class Educacion {
  institucion;
  titulo;
  fecha;

  constructor(institucion, titulo, fecha) {
    this.institucion = institucion;
    this.titulo = titulo;
    this.fecha = fecha;
  }

  mostrarEducacion() {
    let educacionContainer = document.getElementById("educacion");
    let educacionItem = document.createElement("div");
    let institucion = document.createElement("h3");
    let titulo = document.createElement("p");
    let fecha = document.createElement("p");
    institucion.textContent = this.institucion;
    titulo.textContent = "Título: " + this.titulo;
    fecha.textContent = "Fecha: " + this.fecha;
    educacionItem.appendChild(institucion);
    educacionItem.appendChild(titulo);
    educacionItem.appendChild(fecha);
    educacionItem.classList.add("experiencia-item");
    educacionContainer.appendChild(educacionItem);
  }
}

let educaciones = [];
educaciones[0] = new Educacion(
  "Hanlim Multi Art School Seoul - Overseas Chinese High School",
  "Secundario Completo",
  "2013-2019"
);

educaciones[1] = new Educacion(
  "Starlight Dance Academy",
  "Licenciatura en Artes Escénicas con Especialización en Danza",
  "2017-2018"
);

educaciones[2] = new Educacion(
  "Melody Arts Academy",
  "Certificado en Artes Escénicas y Técnica Vocal",
  "2019-2023"
);
function mostrarEducaciones() {
  educaciones.forEach((educacion) => {
    educacion.mostrarEducacion();
  });
}

class Trabajo {
  lugar;
  puesto;
  carrera;
  lapso;

  constructor(lugar, puesto, carrera, lapso) {
    this.lugar = lugar;
    this.puesto = puesto;
    this.carrera = carrera;
    this.lapso = lapso;
  }

  mostrarTrabajo() {
    let experienciaLaboral = document.getElementById("experienciaLaboral");
    let laburo = document.createElement("div");
    let lugar = document.createElement("h3");
    let puesto = document.createElement("p");
    let carrera = document.createElement("p");
    let lapso = document.createElement("p");
    lugar.textContent = this.lugar;
    puesto.textContent = "Puesto: " + this.puesto;
    carrera.textContent = "Carrera: " + this.carrera;
    lapso.textContent = "Lapso: " + this.lapso;
    laburo.appendChild(lugar);
    laburo.appendChild(puesto);
    laburo.appendChild(carrera);
    laburo.appendChild(lapso);
    laburo.classList.add("experiencia-item");
    experienciaLaboral.appendChild(laburo);
  }
}

let trabajos = [];

trabajos[0] = new Trabajo(
  "JYP Entertainment",
  "Miembro del grupo TWICE",
  "Como miembro del grupo TWICE, soy una bailarina y cantante profesional, debuté el 20 de octubre del 2015 y hemos tenido una exitosa trayectoria en el mundo del entretenimiento hasta la actualidad.",
  "Octubre 2015 - Actualidad"
);

trabajos[1] = new Trabajo(
  "Starlight Entertainment",
  "Artista Visual y Vocal",
  "En Starlight Entertainment, fui reconocida como una estrella en ascenso gracias a mi impresionante apariencia y talento vocal. Participé en sesiones de fotos, vídeos musicales y eventos promocionales, destacando mi atractivo visual y capacidad para cautivar a la audiencia con mi voz encantadora.",
  "Enero 2019 - Junio 2022"
);

trabajos[2] = new Trabajo(
  "Rhythm Dance Company",
  "Bailarina Principal",
  "En Rhythm Dance Company, me destacé como bailarina principal, mostrando mi gracia y habilidades técnicas, lo que me convirtió en una fuerza dominante en el mundo de la danza. Participé en numerosas actuaciones y competiciones, ganándome el respeto y la admiración de mis compañeros bailarines.",
  "Septiembre 2017 - Diciembre 2019"
);

trabajos[3] = new Trabajo(
  "Vocal Harmony Records",
  "Cantante Solista",
  "En Vocal Harmony Records, tuve la oportunidad de ser cantante solista, centrando la atención en mi poderosa voz y habilidades expresivas. Participé en la grabación de álbumes en solitario y colaboraciones con otros artistas, mostrando mi versatilidad y ganándome una base de fanáticos apasionados.",
  "Marzo 2020 - Diciembre 2021"
);

trabajos[4] = new Trabajo(
  "DreamStar Entertainment",
  "Trainee en Entrenamiento de Actuación",
  "En DreamStar Entertainment, enfoqué mi desarrollo artístico en la actuación para futuros proyectos en cine y televisión. Participé en clases de actuación, talleres y ensayos para perfeccionar mi talento y prepararme para mi debut como actriz.",
  "Julio 2022 - Junio 2023"
);

trabajos[5] = new Trabajo(
  "Star Performance Academy",
  "Asistente de Coreografía",
  "En Star Performance Academy, compartí mi conocimiento y experiencia como bailarina profesional trabajando como asistente de coreografía. Ayudé en la creación y enseñanza de coreografías para estudiantes de danza, brindándoles mi guía para mejorar sus habilidades de baile.",
  "Abril 2016 - Diciembre 2017"
);

trabajos[6] = new Trabajo(
  "Rising Star Entertainment",
  "Trainee en Desarrollo Artístico",
  "En Rising Star Entertainment, me enfoqué en mi desarrollo artístico integral. Participé en un programa de entrenamiento intensivo que incluyó clases de canto, baile, actuación, imagen personal y otras áreas, preparándome para un exitoso debut como artista completo en el mundo del entretenimiento.",
  "Enero 2014 - Febrero 2015"
);

function dinamico() {
  trabajos.forEach((trabajo) => {
    trabajo.mostrarTrabajo();
  });

  mostrarEducaciones();
}

function aumentarFoto() {
  let foto = document.getElementById("fotoPerfil");
  foto.style.transform = "scale(1.1)";
}

function disminuirFoto() {
  let foto = document.getElementById("fotoPerfil");
  foto.style.transform = "scale(1)";
}

function toggleEducacion() {
  let educacion = document.getElementById("educacion");
  educacion.classList.toggle("active");
}

function toggleExperienciaLaboral() {
  let experienciaLaboral = document.getElementById("experienciaLaboral");
  experienciaLaboral.classList.toggle("active");
}

class Demo {
  titulo;
  url;

  constructor(titulo, url) {
    this.titulo = titulo;
    this.url = url;
  }

  mostrarDemo() {
    let demoContainer = document.getElementById("demo");
    let demoItem = document.createElement("div");
    let titulo = document.createElement("h3");
    let video = document.createElement("iframe");
    titulo.textContent = this.titulo;
    video.setAttribute("src", this.url);
    video.setAttribute("frameborder", "0");
    video.setAttribute("allowfullscreen", "true");
    demoItem.appendChild(titulo);
    demoItem.appendChild(video);
    demoItem.classList.add("experiencia-item");
    demoContainer.appendChild(demoItem);
  }
}

let demos = [];

demos[0] = new Demo(
  "Live Presentation",
  "https://www.youtube.com/embed/9I6TbQ5wwdQ"
);

demos[1] = new Demo(
  "Studio Recording",
  "https://www.youtube.com/embed/gj2HaB4ClxU"
);

function mostrarDemos() {
  demos.forEach((demo) => {
    demo.mostrarDemo();
  });
}

function toggleDemo() {
  let demoContainer = document.getElementById("demo");
  demoContainer.classList.toggle("active");
}

function dinamico() {
  trabajos.forEach((trabajo) => {
    trabajo.mostrarTrabajo();
  });

  mostrarEducaciones();
  mostrarDemos();
}
