$(document).ready(function(){

    $("a").click(function(){
        var smooth = this.hash

        $("html, body").animate(
            {
                scrollTop: $(smooth).offset().top - 70,
            },
            2000
        )
    })

    $(window).scroll(function() {
        if ($(document).scrollTop() > 300) { 
        $(".navbar").css("background-color", "#000000");
        } else {
        $(".navbar").css("background-color", "transparent");
        }
     });

     $("#enviarFormulario").click(function () {
        alert("El Formulario fue enviado correctamente...");
      });

    $('[data-toggle="tooltip"]').tooltip();
})



