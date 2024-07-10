//RESULTADOS
var entrada = document.getElementById("entrada_texto");
const salida = document.getElementById("salida_texto");
//MARCOS respuestas
var mar_SR = document.getElementById('contenido_SinResultado');
var mar_CR = document.getElementById('contenido_Resultado');


var resultado = "";

function encriptar(){
    var cadena = entrada.value;
    resultado="";

    for(var i = 0;i<cadena.length;i++)
    {
        resultado = resultado+llave(cadena[i])
    }
    salida.innerHTML = resultado;
    verificar_resultado();

}


function desencriptar(){
    var cadena = entrada.value;
    resultado="";
    for(var i = 0 ; i<cadena.length; i++ ){
        resultado = resultado+cadena[i]
        console.log('letra del cadena poscicion'+i)
        if(llave(cadena[i]).length > 1){
            console.log('adelantamos');
            i= i +(llave(cadena[i]).length-1);
        }
    }
    salida.innerHTML = resultado;
    verificar_resultado();
}



function llave(vocal){
    switch(vocal){
        case "e":
            return "enter";
        case "i":
            return "imes";
        case "a":
            return "ai";
        case "o":
            return "ober";
        case "u":
            return "ufat";
        default:
            return vocal;
    }
}

function verificar_resultado(){
    if(resultado == ""){
        mar_CR.style.display="none"
        mar_SR.style.display = "inline"
    }else{
        mar_SR.style.display="none"
        mar_CR.style.display = "inline"
    }
        
}

function copiarResultado(){

    navigator.clipboard.writeText(resultado);

    alert("Texto Copiado")
}



