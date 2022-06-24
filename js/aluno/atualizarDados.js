var atualizar = document.getElementById('atualizar');
var input = document.getElementById("ru"); 
var email = document.getElementById("email"); 
var nome = document.getElementById("nome"); 
var button = document.getElementById("buttonAtualizarDados");
var requestURL = 'https://maxel-uds.github.io/JSON-Trabalho-TES/alunoMatricula.json';
var request = new XMLHttpRequest();
var response;

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    response = request.response;
    console.log(response)
}

button.addEventListener("click", function(e) {  
    e.preventDefault();
});

function getAtualizarDados() {
    atualizar.innerText = "";
    atualizar.style = "border: 1px solid black;"
    var ru = input.value;

    var dado = response.filter(dado => dado["ru"] == ru)[0];

    if(dado) {
            var tabela = document.createElement('table');
            
            createTitulo(tabela);
            createTable(tabela);
        
            var nomeAluno = dado["nome"];
            var emailAluno = dado["email"];

            console.log(emailAluno)

            var linha = document.createElement('tr');
            var nomeLinha = document.createElement('td');
            var emailLinha = document.createElement('td');
  
            nomeLinha.textContent = nomeAluno;
            emailLinha.textContent = emailAluno;

            linha.appendChild(nomeLinha);
            linha.appendChild(emailLinha);
            tabela.appendChild(linha);
        
            atualizar.appendChild(tabela); 

    } else {
        var par = document.createElement("p");
        par.id = "naoEncontrado";
        par.textContent = `Nenhum aluno foi encontrado com o RA: ${dado["ru"]}`;
        atualizar.appendChild(par);
    }
}

function createTitulo(tabela) {
    var linha = document.createElement('tr');
    var titulo = document.createElement('th');

    titulo.colSpan = 2;
    titulo.textContent = "Dados Atualizados com Sucesso!";
    titulo.className = "titulo";
    
    linha.appendChild(titulo)
    tabela.appendChild(linha);
}

function createTable(tabela) {
    var linha = document.createElement('tr');
    var nome = document.createElement('th');
    var email = document.createElement('th');
    nome.textContent = `Novo Nome`;
    email.textContent = `Novo email`;
    linha.appendChild(nome);
    linha.appendChild(email);
    tabela.appendChild(linha);
    atualizar.appendChild(tabela);
}




