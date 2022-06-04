var prova = document.getElementById('prova');
var input = document.getElementById("nomeAluno"); 
var button = document.getElementById("buttonProva");
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

function getProva() {
    prova.innerText = "";
    prova.style = "border: 1px solid black;"
    var nome = input.value;
    console.log(response)

    var dado = response.filter(dado => dado["nome"] == nome);
    


    console.log(dado)

    // var dataProvas = response.materias.forEach(element => {
        
    // });


   
    if(dado) {
        var datas = document.createElement('p');
        datas.textContent = `Você tem provas nos dias: ${dado["proximaProva"]}`;


        prova.appendChild(datas);
        

    } else {
        var par = document.createElement("p");
        par.id = "naoEncontrado";
        par.textContent = `Nenhum aluno foi encontrado com o nome: ${dado["nome"]}`;
        prova.appendChild(par);
    }
}
