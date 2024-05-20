var acum = ""; //declara uma variavel aqui que tem valor NULL (diferente de 0)
function pegavalor(x){ //aqui criamos uma funcao que nos permite pegar o valor
  //window.alert(x.value);
  if (x.value == "C") {
    acum = "";
    document.getElementById('resultado').innerHTML = "0";
  }
  else
    acum = acum + x.value; //acum=acumular o valor
  
  if (acum != "")
    document.getElementById('resultado').innerHTML = acum;
}
//#endregion()
function apagar() 
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1); // resultado -1
    acum = document.getElementById('resultado').innerHTML; //declara que o valor é a string que precisa tirar
}       

function calcular(){
  var resultado = document.getElementById('resultado').innerHTML;
  if(resultado)
      {
       document.getElementById('resultado').innerHTML = eval(resultado); 
      }
  else
      {
       document.getElementById('resultado').innerHTML = "0"
      }
}