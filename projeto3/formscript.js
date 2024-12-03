var objetoPessoa = {};
var listadePessoa = [];

function ValoresForm(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value

    objetoPessoa = {
        nome,
        idade,
        email,
        telefone,
    }

    console.log("Pessoa cadastrada", objetoPessoa);

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    listadePessoa.push(objetoPessoa);

    alert(`Pessoa cadastrada com sucesso, bem vindo ${objetoPessoa.nome}`)

}

function pessoasCadastradas() {
    console.log(`A lista tem ${listadePessoa.length} pessoas`)

    listadePessoa.map((pessoa, positionNaLista) => {
        console.log(`A ${positionNaLista + 1}º pessoas é a: `);

        console.log(listadePessoa[positionNaLista].nome);

        console.log(`Tem ${pessoa.idade} anos`);

        console.log(`e seu contato é: ${pessoa.telefone}`);

    })

}