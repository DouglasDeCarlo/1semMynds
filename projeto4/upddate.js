var editMode = document.getElementById("submit").innerHTML === "Edit Aqui!";

function EnviandoDadosAtuais(id, nameItem, emailItem) {
    document.getElementById('email').value = emailItem
    document.getElementById('name').value = nameItem

    document.getElementById('submit').setAttribute("data-id", id)
    document.getElementById('submit').innerHTML = "Edit aqui!";
    editMode = document.getElementById("submit").innerHTML === "Edit Aqui";
}

const urlEdit ="https://mynds-crud-tutorial-c030d-default-rtdb.firebaseio.com/pessoas/"

async function editData(id) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('emai').value;
    const data = {
        name: name,
        email: email,
    }
    response = await fetch(urlEdit + id + '.json', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

    }).then(res => {
        PegarDados();
        document.getElementById("submit").removeAttribute("data-id");
        document.getElementById("email").value = '';
        document.getElementById("name").value = '';
        document.getElementById("submit").innerHTML("data-id")
        editmode = document.getElementById("submit").innerHTML === "Edit aqui";
    }).catch(error => console.log("erro ao editar", error))
}

