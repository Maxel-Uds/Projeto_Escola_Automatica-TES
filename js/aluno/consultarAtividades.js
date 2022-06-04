var atividade = document.getElementById('atividade');
var input = document.getElementById("nomeAluno"); 
var button = document.getElementById("buttonAtividade");
var requestURL = 'https://maxel-uds.github.io/JSON-Trabalho-TES/alunoAcademico.json';
var request = new XMLHttpRequest();
var response;

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    response = request.response;
}

button.addEventListener("click", function(e) {  
    e.preventDefault();
});

function getAtividades() {
    atividade.innerText = "";
    atividade.style = "border: 1px solid black;"
    var nome = input.value;

    console.log(nome)

    var dado = response.filter(dado => dado["nome"] == nome)[0];

    if(dado) {
        var atividades = document.createElement('p');
        atividades.textContent = `Você está matriculado nas seguintes atividades: ${dado["atividadeExtra"]}`;
        atividade.appendChild(atividades);

        
    } else {
        var par = document.createElement("p");
        par.id = "naoEncontrado";
        par.textContent = `Nenhum aluno foi encontrado com o nome: ${dado["nome"]}`;
        atividade.appendChild(par);
    }
}
