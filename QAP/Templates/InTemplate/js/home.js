toggleSideBar();

function toggleSideBar() {
    document.getElementById("menuLateral").classList.toggle('active');

    // HABILITAR ICONE E OCULTAS AS INFORMACOES DE CADA CONTEXTO
    var menuLateralFechado = document.getElementsByClassName("imagem")[0].style.display;

    if(menuLateralFechado == "none") {
        $(".info").each(function(index, element) {
            element.style.display = "none";
        });

        $(".imagem").each(function(index, element) {
            element.style.display = "block";
        });

    } else {
        $(".info").each(function(index, element) {
            element.style.display = "block";
        });

        $(".imagem").each(function(index, element) {
            element.style.display = "none";
        });
    }    
}

function toggleRightBar() {
    document.getElementById("menuFiltros").classList.toggle('active');
}