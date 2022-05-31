var boleto = document.getElementById('boleto');
var input = document.getElementById("ra"); 
var button = document.getElementById("button");
var requestURL = 'https://maxel-uds.github.io/JSON-Trabalho-TES/boletoAtividadeExtra.json';
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

function getContas() {
    var ru = input.value;

    response.filter(aluno => aluno["ru"] == ru)
        .flatMap(aluno => {
            var registro = document.createElement('p');
            registro.textContent = `Registro Acadêmico: ${aluno["ru"]}`
            boleto.appendChild(registro);

            var nome = document.createElement('p');
            nome.textContent = `Nome do Aluno: ${aluno["nome"]}`
            boleto.appendChild(nome);

            var rg = document.createElement('p');
            rg.textContent = `Documento: ${aluno["RG"]}`
            boleto.appendChild(rg);

            var tabela = document.createElement('table');
            createTable(tabela);

            aluno["atividadeExtra"].forEach(atividade => {
                var nomeAtv = atividade["nome"];
                var precoAtv = `R$ ${atividade["preco"]}`;
                var cargaAtv = `${atividade["cargaHoraria"]} H`;

                var linha = document.createElement('tr');
                var atividade = document.createElement('td');
                var preco = document.createElement('td');
                var carga = document.createElement('td');
                
                atividade.textContent = nomeAtv;
                preco.textContent = precoAtv;
                carga.textContent = cargaAtv;

                linha.appendChild(atividade);
                linha.appendChild(preco);
                linha.appendChild(carga);
                tabela.appendChild(linha);
            });

            calcularBoleto(aluno["atividadeExtra"]);
        });
}

function createTable(tabela) {
    var linha = document.createElement('tr');
    var atividade = document.createElement('th');
    var preco = document.createElement('th');
    var carga = document.createElement('th');
    atividade.textContent = `Atividade`;
    preco.textContent = `Preço`;
    carga.textContent = `Carga Horária`;
    linha.appendChild(atividade);
    linha.appendChild(preco);
    linha.appendChild(carga);
    tabela.appendChild(linha);
    boleto.appendChild(tabela);
}

function calcularBoleto(atividades) {
    var total = document.createElement("p")
    var soma = 0;

    atividades.forEach(atividade => {
        soma += (atividade["preco"] * atividade["cargaHoraria"]);
    });

    total.textContent = `Valor total: R$ ${soma}`
    boleto.appendChild(total); 
}