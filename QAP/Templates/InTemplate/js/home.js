toggleSideBar();

function toggleSideBar() {
    var menuLateralFechado = document.getElementById("menuLateral")
    menuLateralFechado.classList.toggle('active');

    if(!menuLateralFechado.classList.contains('active')) {
        $(".info").each(function(index, element) {
            element.style.display = "none";
        });

        $(".pagina").each(function(index, element) {
            element.style.display = "none";
        });
    } else {
        $(".info").each(function(index, element) {
            element.style.display = "inline";
        });

        $(".pagina").each(function(index, element) {
            element.style.display = "inline";
        });
    }    
}

function toggleRightBar() {
    document.getElementById("menuFiltros").classList.toggle('active');
}