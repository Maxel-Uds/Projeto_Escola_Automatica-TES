var resposta = document.getElementById('notas');
var aluno = document.getElementById('idAluno');
var nota =  document.getElementById('notaProva');
var materia = document.getElementById('idMateria');
var button = document.getElementById('button');
var requestURL = 'https://mts10.github.io/Json-Trabalho/json.json';
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

function getNotas() {
    resposta.innerText = "";
    resposta.style = "border: 1px solid black;";

    var ru = aluno.value;

    var dado = response.filter(dado => dado['ru'] == ru)[0];

    
    var nome = document.createElement('p');
    nome.textContent = dado['nome'];
    resposta.appendChild(nome);




}