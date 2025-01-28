let lista = document.getElementById("listaAmigos");
   let listaamigo = [];

   function adicionarAmigo(event){
   let adcamigo = document.getElementById("amigo").value;
   
    if(adcamigo.trim() ==="" || !isNaN(adcamigo) ){
     window.alert("comando invalido! insira um nome");
     document.getElementById("amigo").value= "";
   
   }   
   else{
     
    listaamigo.push(adcamigo);
    
    document.getElementById("amigo").value = "";
    
    let novoItem = document.createElement('li'); 
            novoItem.textContent = adcamigo; 
            lista.appendChild(novoItem);
    }
  } 


document.getElementById("amigo").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});

document.querySelector(".button-add").addEventListener("click", adicionarAmigo);

   function sortearAmigo(){
     let  nomealeatorio  = Math.random() 
     let   nomesorteio = Math.floor(nomealeatorio * listaamigo.length)
     let  nomessecreto = listaamigo[nomesorteio]
     let  resultadofinal = document.getElementById("resultado")
      resultadofinal.innerHTML=`seu amigo secreto é : ${nomessecreto}`
     
   } 

    
