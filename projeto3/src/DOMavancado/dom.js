var anime = {};

lista_de_anime = [];

function ValoresForm(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let episodios = document.getElementById("episodios").value;
    let protagonista = document.getElementById("protagonista").value;
    let estilo = document.getElementById("estilo").value;

    anime = {
        nome,
        episodios,
        protagonista,
        estilo
    };

    lista_de_animes.push(anime);

    console.log("anime cadstrado com sucesso!", anime);


    document.getElementById("nome").value;
    document.getElementById("episodios").value;
    document.getElementById("protagonista").value;
    document.getElementById("estilo").value;
    upgradeTable();
    alert(`Novo anime adicionado ${anime.nome}`)

};

function upgradeTable() {
    var tableBody = document.getElementById("animeTableBody");
    
    tableBody.innerHTML = "";
    
    lista_de_animes.foreach(function (anime){
        var row = document.createElement("tr");
        row.innerHTML = `
            <td> ${anime.nome} </td>
            <td> ${anime.episodios} </td>
            <td> ${anime.protagonista} </td>
            <td> ${anime.estilo} </td>
        `

        tableBody.appendChild(row);

    })
}
