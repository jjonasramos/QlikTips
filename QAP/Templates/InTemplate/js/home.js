toggleSideBar();

function toggleSideBar() {
    document.getElementById("menuLateral").classList.toggle('active');

    // HABILITAR ICONE E OCULTAS AS INFORMACOES DE CADA CONTEXTO
    var menuLateralFechado = document.getElementsByClassName("imagem")[0].style.visibility;

    if(menuLateralFechado == "hidden") {
        $(".info").each(function(index, element) {
            element.style.visibility = "hidden";
        });

        $(".imagem").each(function(index, element) {
            element.style.visibility = "visible";
        });

    } else {
        $(".info").each(function(index, element) {
            element.style.visibility = "visible";
        });

        $(".imagem").each(function(index, element) {
            element.style.visibility = "hidden";
        });
    }    
}

function toggleRightBar() {
    document.getElementById("menuFiltros").classList.toggle('active');
}
