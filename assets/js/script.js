
// 1200 es en mini segundos

$('p').click (function(){
    $(this).hide(1200)
    $(this).fadeIn(800);
}
)

//signo de peso corresponde a la sintaxis de jquery
//# para indicar el ID
$('#boton').click(function(){
    $('#div').css({
        'width': '500 px'
    })
})