const paginasTematicas = [
    {
        ruta: "investigacion-estado-actual.html",
        titulo: "Investigación estado actual institución"
    },
    {
        ruta: "diseno-sistema-web.html",
        titulo: "Diseño de un sistema web"
    },
    {
        ruta: "plan-tic.html",
        titulo: "Investigación y formulación plan TIC"
    },
    {
        ruta: "programa-educativo.html",
        titulo: "Diseño de un programa educativo"
    },
    {
        ruta: "estrategia-educativa-tic.html",
        titulo: "Investigación estrategia educativa con TIC"
    },
    {
        ruta: "diseno-curricular.html",
        titulo: "Diseño curricular"
    },
    {
        ruta: "investigacion-iap.html",
        titulo: "Investigación usando IAP"
    },
    {
        ruta: "problematicas-discapacidad.html",
        titulo: "Problemáticas escolares y/o discapacidad"
    },
    {
        ruta: "investigacion-descriptiva.html",
        titulo: "Investigación descriptiva"
    },
    {
        ruta: "formacion-tic-poblaciones.html",
        titulo: "Formación en TIC para diferentes poblaciones"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const estaEnPaginas = window.location.pathname.includes("/pages/");
    const rutaBase = estaEnPaginas ? "../" : "./";
    const paginaActual = window.location.pathname.split("/").pop();
    const raiz = document.querySelector("[data-site-nav]");

    if (raiz) {
        const enlacesTematicos = paginasTematicas.map((pagina) => {
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
                        </ul>
                    </div>
                </div>
            </nav>`;
    }

    const listaPaginas = document.querySelector("[data-topic-list]");
    if (listaPaginas) {
        listaPaginas.innerHTML = paginasTematicas.map((pagina) => `
            <div class="col-12 col-md-6 col-lg-4 reveal">
                <article class="tarjeta-metodologia p-4">
                    <h3 class="card-title h5">${pagina.titulo}</h3>
                    <a class="btn btn-principal mt-2" href="${rutaBase}pages/${pagina.ruta}">Abrir página</a>
                </article>
            </div>`).join("");
    }

    // Actualizar automáticamente el año del pie de página
    document.querySelectorAll("[data-year]").forEach((elemento) => {
        elemento.textContent = new Date().getFullYear();
    });

    // Animar elementos cuando aparecen en pantalla
    const elementosAnimados = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver(
            (entradas, observer) => {
                entradas.forEach((entrada) => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add(
                            "animate__animated",
                            "animate__fadeInUp"
                        );

                        observer.unobserve(entrada.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        elementosAnimados.forEach((elemento) => {
            observador.observe(elemento);
        });
    } else {
        // Compatibilidad con navegadores sin IntersectionObserver
        elementosAnimados.forEach((elemento) => {
            elemento.classList.add(
                "animate__animated",
                "animate__fadeInUp"
            );
        });
    }

    // Controlar el menú móvil y el desplegable sin Bootstrap JS
    const botonMenu = document.querySelector(".navbar-toggler");
    const menu = document.querySelector("#navbarContenido");
    const botonTematicas = document.querySelector("#navbarContenido .dropdown-toggle");
    const menuTematicas = document.querySelector("#menuTematicas");

    if (botonMenu && menu) {
        botonMenu.addEventListener("click", () => {
            const estaAbierto =
                botonMenu.getAttribute("aria-expanded") === "true";

            botonMenu.setAttribute("aria-expanded", String(!estaAbierto));
            botonMenu.setAttribute("aria-label", estaAbierto ? "Abrir menú" : "Cerrar menú");
            menu.classList.toggle("show", !estaAbierto);
        });

        // Cerrar el menú al seleccionar un enlace
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
