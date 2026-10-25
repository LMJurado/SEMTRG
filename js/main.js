const paginasTematicas = [
    {
        ruta: "investigacion-estado-actual.html",
        titulo: "Investigación estado actual institución",
        ilustracion: "investigacion"
    },
    {
        ruta: "diseno-sistema-web.html",
        titulo: "Metodología IWEB",
        ilustracion: "software"
    },
    {
        ruta: "plan-tic.html",
        titulo: "Investigación y formulación plan TIC",
        ilustracion: "estrategia"
    },
    {
        ruta: "programa-educativo.html",
        titulo: "Metodologías de desarrollo e ingeniería de software para el diseño de un programa educativo",
        ilustracion: "educacion"
    },
    {
        ruta: "estrategia-educativa-tic.html",
        titulo: "Investigación estrategia educativa con TIC",
        ilustracion: "tecnologia"
    },
    {
        ruta: "diseno-curricular.html",
        titulo: "Diseño curricular",
        ilustracion: "diseno"
    },
    {
        ruta: "investigacion-iap.html",
        titulo: "Investigación usando IAP",
        ilustracion: "participacion"
    },
    {
        ruta: "problematicas-discapacidad.html",
        titulo: "Problemáticas escolares y/o discapacidad",
        ilustracion: "inclusion"
    },
    {
        ruta: "investigacion-descriptiva.html",
        titulo: "Investigación descriptiva",
        ilustracion: "analisis"
    },
    {
        ruta: "formacion-tic-poblaciones.html",
        titulo: "Formación en TIC para diferentes poblaciones",
        ilustracion: "poblaciones"
    }
];

const metodologiasEspecificas = [
    {
        ruta: "crisp-dm.html",
        titulo: "CRISP-DM (Metodología Estándar para Minería de Datos)",
        ilustracion: "datos"
    },
    {
        ruta: "desarrollo-chatbot.html",
        titulo: "Desarrollo de software e integración de chatbot",
        ilustracion: "chatbot"
    },
    {
        ruta: "entorno-virtual-talento-humano.html",
        titulo: "Entorno virtual de aprendizaje para la gestión del talento humano",
        ilustracion: "aprendizaje"
    }
];

const todasLasMetodologias = [...paginasTematicas, ...metodologiasEspecificas];

const ilustraciones = {
    investigacion: '<circle cx="46" cy="45" r="19"/><path d="m60 59 17 17M36 45h20M46 35v20"/>',
    software: '<rect x="27" y="29" width="42" height="34" rx="5"/><path d="m39 41-7 5 7 5m18-10 7 5-7 5m-7-9-5 18"/>',
    estrategia: '<circle cx="48" cy="47" r="27"/><path d="m58 37-7 18-18 8 8-18 17-8Z"/><circle cx="48" cy="47" r="3"/>',
    educacion: '<path d="M25 36q12-8 23 0 11-8 23 0v31q-12-8-23 0-11-8-23 0V36Z"/><path d="M48 37v30m-15-21h8m-8 8h8m14-8h8m-8 8h8"/>',
    tecnologia: '<circle cx="48" cy="47" r="8"/><circle cx="27" cy="31" r="5"/><circle cx="69" cy="31" r="5"/><circle cx="27" cy="64" r="5"/><circle cx="69" cy="64" r="5"/><path d="m33 35 9 8m12 0 9-8m-30 25 9-9m12 0 9 9"/>',
    diseno: '<rect x="27" y="27" width="42" height="42" rx="4"/><path d="M41 27v42m14-42v42M27 41h42M27 55h42"/>',
    participacion: '<circle cx="48" cy="47" r="10"/><path d="M48 25v8m0 28v8M26 47h8m28 0h8m-37-16 6 6m18 20 6 6m0-32-6 6m-18 20-6 6"/>',
    inclusion: '<circle cx="48" cy="30" r="7"/><path d="M48 38v19m-16-12 16 5 16-5M40 72l8-15 8 15"/>',
    analisis: '<path d="M27 68V30m0 38h43"/><rect x="35" y="50" width="8" height="18" rx="2"/><rect x="49" y="41" width="8" height="27" rx="2"/><rect x="63" y="32" width="8" height="36" rx="2"/>',
    poblaciones: '<circle cx="48" cy="34" r="8"/><circle cx="29" cy="42" r="6"/><circle cx="67" cy="42" r="6"/><path d="M32 68v-6a16 16 0 0 1 32 0v6m-39 0v-5a10 10 0 0 1 8-10m38 15v-5a10 10 0 0 0-8-10"/>',
    datos: '<circle cx="32" cy="35" r="6"/><circle cx="63" cy="31" r="5"/><circle cx="48" cy="60" r="7"/><circle cx="69" cy="65" r="4"/><path d="m38 35 20-3M35 40l9 15m10 1 12-8m-11 12 10 4"/>',
    chatbot: '<path d="M25 31q0-6 6-6h34q6 0 6 6v25q0 6-6 6H43l-12 9v-9h-1q-5 0-5-6V31Z"/><path d="M36 42h24M36 51h16"/>',
    aprendizaje: '<rect x="27" y="28" width="42" height="38" rx="5"/><path d="M36 39h24m-24 9h17m-17 9h11"/><circle cx="65" cy="63" r="10"/>'
};

function crearPortada(pagina) {
    return `<div class="portada-metodologia-revela" aria-hidden="true">
        <svg class="portada-metodologia" viewBox="0 0 96 96" focusable="false">
            <circle class="ilustracion-orbita" cx="48" cy="48" r="37"/>
            <circle class="ilustracion-fondo" cx="68" cy="29" r="11"/>
            <g class="ilustracion-lineas">${ilustraciones[pagina.ilustracion]}</g>
        </svg>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
    const estaEnPaginas = window.location.pathname.includes("/pages/");
    const rutaBase = estaEnPaginas ? "../" : "./";
    const paginaActual = window.location.pathname.split("/").pop();
    const raiz = document.querySelector("[data-site-nav]");

    const contenidoPagina = document.querySelector("#contenido");
    if (estaEnPaginas && contenidoPagina) {
        contenidoPagina.classList.add("metodologia-page");
        const titulo = contenidoPagina.querySelector("h1");
        const primeraSeccion = Array.from(contenidoPagina.children)
            .find((elemento) => elemento.tagName === "SECTION");

        if (titulo) {
            const migas = document.createElement("nav");
            migas.className = "migas-pan";
            migas.setAttribute("aria-label", "Ruta de navegación");
            migas.innerHTML = `<a href="${rutaBase}index.html">Inicio</a><span aria-hidden="true">/</span><span aria-current="page"></span>`;
            migas.querySelector('[aria-current="page"]').textContent = titulo.textContent;
            contenidoPagina.prepend(migas);
        }

        if (primeraSeccion) {
            const elementosIntroduccion = Array.from(contenidoPagina.children)
                .slice(0, Array.from(contenidoPagina.children).indexOf(primeraSeccion))
                .filter((elemento) => !elemento.classList.contains("migas-pan"));
            const introduccion = document.createElement("div");
            introduccion.className = "metodologia-hero";
            contenidoPagina.insertBefore(introduccion, primeraSeccion);
            elementosIntroduccion.forEach((elemento) => introduccion.append(elemento));
        }

        contenidoPagina.querySelectorAll(":scope > section").forEach((seccion, indice) => {
            seccion.classList.add("metodologia-seccion", "reveal");
            seccion.style.setProperty("--section-index", indice);
        });

        const indiceActual = todasLasMetodologias.findIndex((pagina) => pagina.ruta === paginaActual);
        const navegacionPagina = document.createElement("nav");
        navegacionPagina.className = "navegacion-paginas reveal";
        navegacionPagina.setAttribute("aria-label", "Navegación entre metodologías");

        const anterior = todasLasMetodologias[(indiceActual - 1 + todasLasMetodologias.length) % todasLasMetodologias.length];
        const siguiente = todasLasMetodologias[(indiceActual + 1) % todasLasMetodologias.length];
        navegacionPagina.innerHTML = `
            <a class="enlace-pagina enlace-anterior" href="${rutaBase}pages/${anterior.ruta}">
                <span>← Anterior</span><strong></strong>
            </a>
            <a class="enlace-pagina enlace-indice" href="${rutaBase}index.html">Todas las metodologías</a>
            <a class="enlace-pagina enlace-siguiente" href="${rutaBase}pages/${siguiente.ruta}">
                <span>Siguiente →</span><strong></strong>
            </a>`;
        navegacionPagina.querySelector(".enlace-anterior strong").textContent = anterior.titulo;
        navegacionPagina.querySelector(".enlace-siguiente strong").textContent = siguiente.titulo;
        contenidoPagina.append(navegacionPagina);
    }

    if (raiz) {
        const enlacesTematicos = todasLasMetodologias.map((pagina) => {
            const ruta = `${rutaBase}pages/${pagina.ruta}`;
            const actual = paginaActual === pagina.ruta;
            return `<li><a class="dropdown-item${actual ? " active" : ""}" href="${ruta}"${actual ? ' aria-current="page"' : ""}>${pagina.titulo}</a></li>`;
        }).join("");
        const inicioActual = !estaEnPaginas && (paginaActual === "" || paginaActual === "index.html");

        raiz.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark sitio-navbar" aria-label="Navegación principal">
                <div class="container">
                    <a class="navbar-brand fw-bold" href="${rutaBase}index.html">SEMTRG</a>
                    <button class="navbar-toggler" type="button" aria-controls="navbarContenido" aria-expanded="false" aria-label="Abrir menú">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarContenido">
                        <ul class="navbar-nav ms-auto align-items-lg-center">
                            <li class="nav-item"><a class="nav-link${inicioActual ? " active" : ""}" href="${rutaBase}index.html"${inicioActual ? ' aria-current="page"' : ""}>Inicio</a></li>
                            <li class="nav-item dropdown">
                                <button class="nav-link dropdown-toggle" type="button" aria-expanded="false" aria-controls="menuTematicas">Páginas temáticas</button>
                                <ul class="dropdown-menu dropdown-menu-end" id="menuTematicas">${enlacesTematicos}</ul>
                            </li>
                            <li class="nav-item ms-lg-2">
                                <button class="btn btn-tema" type="button" data-theme-toggle aria-pressed="false" aria-label="Activar modo oscuro" title="Activar modo oscuro">
                                    <span data-theme-icon aria-hidden="true">☾</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>`;
    }

    const botonTema = document.querySelector("[data-theme-toggle]");
    if (botonTema) {
        const temaGuardado = window.localStorage.getItem("semtrg-theme");
        const temaInicial = temaGuardado === "dark" || temaGuardado === "light"
            ? temaGuardado
            : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

        const actualizarTema = (tema) => {
            document.documentElement.dataset.theme = tema;
            botonTema.setAttribute("aria-pressed", String(tema === "dark"));
            botonTema.setAttribute(
                "aria-label",
                tema === "dark" ? "Activar modo claro" : "Activar modo oscuro"
            );
            botonTema.title = tema === "dark" ? "Activar modo claro" : "Activar modo oscuro";
            botonTema.querySelector("[data-theme-icon]").textContent = tema === "dark" ? "☀" : "☾";
        };

        actualizarTema(temaInicial);
        botonTema.addEventListener("click", () => {
            const nuevoTema = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
            actualizarTema(nuevoTema);
            window.localStorage.setItem("semtrg-theme", nuevoTema);
        });
    }

    const listaPaginas = document.querySelector("[data-topic-list]");
    if (listaPaginas) {
        listaPaginas.innerHTML = paginasTematicas.map((pagina, indice) => `
            <div class="col-12 col-md-6 col-lg-4 reveal">
                <article class="tarjeta-metodologia p-4">
                    ${crearPortada(pagina)}
                    <span class="indice-tarjeta" aria-hidden="true">${String(indice + 1).padStart(2, "0")}</span>
                    <h3 class="card-title h5">${pagina.titulo}</h3>
                    <a class="btn btn-principal mt-2" href="${rutaBase}pages/${pagina.ruta}">Abrir página</a>
                </article>
            </div>`).join("");
    }

    const listaEspecificas = document.querySelector("[data-specific-list]");
    if (listaEspecificas) {
        listaEspecificas.innerHTML = metodologiasEspecificas.map((metodologia, indice) => `
            <div class="col-12 col-md-6 col-lg-4 reveal">
                <article class="tarjeta-metodologia tarjeta-especifica p-4">
                    ${crearPortada(metodologia)}
                    <span class="indice-tarjeta" aria-hidden="true">${String(indice + 1).padStart(2, "0")}</span>
                    <h3 class="card-title h5">${metodologia.titulo}</h3>
                    <a class="btn btn-principal mt-2" href="${rutaBase}pages/${metodologia.ruta}">Ver metodología</a>
                </article>
            </div>`).join("");
    }

    document.querySelectorAll(".portada-metodologia-revela").forEach((portada) => {
        const tarjeta = portada.closest(".tarjeta-metodologia");
        const ilustracion = portada.querySelector(".ilustracion-lineas");
        if (!tarjeta || !ilustracion) {
            return;
        }

        const desplegarIlustracion = (desplegar) => {
            ilustracion.style.opacity = desplegar ? "1" : "";
            ilustracion.style.transform = desplegar ? "translateY(-2px) scale(1.04)" : "";
        };

        tarjeta.addEventListener("pointerenter", () => desplegarIlustracion(true));
        tarjeta.addEventListener("pointerleave", () => {
            if (!tarjeta.matches(":focus-within")) {
                desplegarIlustracion(false);
            }
        });
        tarjeta.addEventListener("focusin", () => desplegarIlustracion(true));
        tarjeta.addEventListener("focusout", () => {
            if (!tarjeta.matches(":hover")) {
                desplegarIlustracion(false);
            }
        });
    });

    document.querySelectorAll("[data-year]").forEach((elemento) => {
        elemento.textContent = new Date().getFullYear();
    });

    const elementosAnimados = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver(
            (entradas, observer) => {
                entradas.forEach((entrada) => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("visible", "animate__animated", "animate__fadeInUp");
                        observer.unobserve(entrada.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        elementosAnimados.forEach((elemento) => observador.observe(elemento));
    } else {
        elementosAnimados.forEach((elemento) => {
            elemento.classList.add("visible", "animate__animated", "animate__fadeInUp");
        });
    }

    const botonMenu = document.querySelector(".navbar-toggler");
    const menu = document.querySelector("#navbarContenido");
    const botonTematicas = document.querySelector("#navbarContenido .dropdown-toggle");
    const menuTematicas = document.querySelector("#menuTematicas");

    if (botonMenu && menu) {
        botonMenu.addEventListener("click", () => {
            const estaAbierto = botonMenu.getAttribute("aria-expanded") === "true";
            botonMenu.setAttribute("aria-expanded", String(!estaAbierto));
            botonMenu.setAttribute("aria-label", estaAbierto ? "Abrir menú" : "Cerrar menú");
            menu.classList.toggle("show", !estaAbierto);
        });

        menu.querySelectorAll("a.nav-link, .dropdown-item").forEach((enlace) => {
            enlace.addEventListener("click", () => {
                menu.classList.remove("show");
                botonMenu.setAttribute("aria-expanded", "false");
                botonMenu.setAttribute("aria-label", "Abrir menú");
                menuTematicas?.classList.remove("show");
                botonTematicas?.setAttribute("aria-expanded", "false");
            });
        });
    }

    if (botonTematicas && menuTematicas) {
        botonTematicas.addEventListener("click", () => {
            const estaAbierto = botonTematicas.getAttribute("aria-expanded") === "true";
            botonTematicas.setAttribute("aria-expanded", String(!estaAbierto));
            menuTematicas.classList.toggle("show", !estaAbierto);
        });

        document.addEventListener("keydown", (evento) => {
            if (evento.key === "Escape") {
                menuTematicas.classList.remove("show");
                botonTematicas.setAttribute("aria-expanded", "false");
                botonTematicas.focus();
            }
        });
    }
});
