



    function validar(){
        var ano = parseInt(document.getElementById("ano").value);
        resposta = document.getElementById('resposta');
 
        if (ano%400 == 0)
         resposta.innerHTML="É bissexto";
        else
         if(ano%4==0 && ano%100!=0)
          resposta.innerHTML="É bissexto";
         else
          resposta.innerHTML="Não é bissexto";
      }