//o escutador é o table mas o evento é o campo do pai escolhido, mas o que vamos remover é o pai do td que é o tr
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    //Quando queremos aguardar um tempo, devemos usar a função setTimeout. Será passada como parâmetro uma função anônima com quanto tempo deve ser aguardado:
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});

//metodo antigo
//var pacientes = document.querySelectorAll(".paciente");

//pacientes.forEach(function(paciente) {
//  paciente.addEventListener("dblclick", function() {
//    this.remove();
//});
//});