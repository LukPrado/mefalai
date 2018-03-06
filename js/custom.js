$(document).ready(function(){
    setPaddingDynamic();
    setupAutoComplete();
});


function setPaddingDynamic() {
    let verticalPadding = $(window).height()*0.12;
    $('.screenH').css("padding-top", verticalPadding);
}

function setupAutoComplete() {
    var dataComplete = [
      "Padaria 24 horas",
      "Maria Padaria",
      "Alga Autoeletríca",
      "Brait Supermercado",
      "Tatu Supermercado",
      "Cláudia Portero Buffet",
      "Pizzaria Mickelly",
      "Pizzaria Americana",
      "Pizzaria Giorno Benedetto",
      "Sinhá Moça",
      "Churrascaria Rio Grandense",
      "Kyoto Comida Japonesa",
      "GreenVille Japonese Food",
      "La Boca Culinária Argentina",
    ];
    $( "#txtSearch" ).autocomplete({
        minLength: 3,
        source: dataComplete

    });
}