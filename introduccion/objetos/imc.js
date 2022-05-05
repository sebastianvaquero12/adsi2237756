window.onload = iniciar;

function iniciar(){
    var btncalcular=  document.getElementById("btncalcular");
    btncalcular.addEventListener("click", clickbtncalcular);

}

function clickbtncalcular(){
    var txtPeso=  document.getElementById("txtPeso");
    var peso=  txtPeso.value;


    var txtAltura=  document.getElementById("txtAltura");
 var altura=  txtAltura.value;
 
 var imc =peso / (altura * altura);
 alert (" su imc es de: " + Math.round (imc));
    //alert("Click");
}