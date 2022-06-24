var aulas = document.getElementById('aulas');
var input = document.getElementById("nomeAluno"); 
var button = document.getElementById("buttonAulas");
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

function getAulas() {
    aulas.innerText = "";
    aulas.style = "border: 1px solid black;"
    var ru = input.value;

    var dado = response.filter(dado => dado["ru"] == ru)[0];

    if(dado) {
        var tabela = document.createElement('table');
        
        createTitulo(tabela);
        createTable(tabela);
    
        dado["materias"].forEach(materia => {
            var linha = document.createElement('tr');
            var datas = document.createElement('td');
            var materias = document.createElement('td');

            var materiaNome = materia["nome"]
            var dia = materia["dias"]
        
            materias.textContent = materiaNome
            datas.textContent = dia

            linha.appendChild(materias)
            linha.appendChild(datas)
            tabela.appendChild(linha);
        }); 
    } else {
        var par = document.createElement("p");
        par.id = "naoEncontrado";
        par.textContent = `Nenhum aluno foi encontrado com o nome: ${dado["nome"]}`;
        aulas.appendChild(par);
    }
}

function createTitulo(tabela) {
    var linha = document.createElement('tr');
    var titulo = document.createElement('th');

    titulo.colSpan = 2;
    titulo.textContent = "Você tem aulas nos seguintes dias: ";
    titulo.className = "titulo";
    
    linha.appendChild(titulo)
    tabela.appendChild(linha);
}

function createTable(tabela) {
    var linha = document.createElement('tr');
    var materia = document.createElement('th');
    var data = document.createElement('th');
    materia.textContent = `Matéria`;
    data.textContent = `Data`;
    linha.appendChild(materia);
    linha.appendChild(data);
    tabela.appendChild(linha);
    aulas.appendChild(tabela);
}


