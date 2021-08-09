var tabela = document.querySelector("table");

//o escutador é o table mas o evento é o campo do pai escolhido, mas o que vamos remover é o pai do td que é o tr
tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.remove();
});

//metodo antigo
//var pacientes = document.querySelectorAll(".paciente");

//pacientes.forEach(function(paciente) {
//  paciente.addEventListener("dblclick", function() {
//    this.remove();
//});
//});