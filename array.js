var compras = [];

function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;
    if (nomeUser) {
        compras.push(nomeUser);
        criarLista();
        document.getElementById('nomeUser').value = '';
    }
}

function criarLista() {

    let nomeUser = document.getElementById("nomeUser").value;

    if (nomeUser) {

        compras.push(nomeUser);

        console.log(compras);
    }
}
//  FUNÇÃO PARA CRIAR LISTA DE USUÁRIOS
function criarLista() {
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>produto</th></tr>";

    for (let i = 0; i <= (compras.length - 1); i++) {
        tabela += "<tr><td>" + compras[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>mudar produto</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>comprado</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
//funcao para editar nome

function editar(i){
    document.getElementById('nomeUser').value = compras[(i-1)];
    compras.splice(compras[(i-1)],1);
}

//funcao de excluir nome
function excluir(i){
    compras.splice((i-1),1);
    document.getElementById('tabela').deleteRow(i);
}