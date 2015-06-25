$(document).ready(function () {
  /*
   * FUNCION PARA GENERAR ALERTA BONITA
   */
  var alerta = function (mensaje) {
    $.blockUI({message: '<p id="mensajeAlert" >' + mensaje + ' </p> <br><button type="button" id="cerrar">Aceptar</button>',
      css: {
        cursor: 'pointer',
        border: 'none',
        padding: '15px',
        backgroundColor: '#fff',
        '-webkit-border-radius': '10px',
        '-moz-border-radius': '10px',
        opacity: .8,
        color: '#fff'
      }});
    $("#cerrar").click(function () {
      $.unblockUI();
    });
  };
  $("#Registro").submit(function () {
    if($("#Registro").valid()){
      $.ajax({
        url: "guardaRegistro.php",
        method: 'post',
        data: $("#Registro").serialize()
      }).success(function (data) {
        if(data==="registroOk"){
          alert("Registro guardado con éxito");
        }else{
          alert("Error al guardar el registro");
        }
      });
    }
  });

});


