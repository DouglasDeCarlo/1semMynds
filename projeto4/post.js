function sendData() {
    console.log(editMode);
    if (editMode) {
        const id = document.getElementById("submit").getAttribute("data-id")
        editData(id)
        return
    }

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    const data = {
        name: name,
        email: email,
    }

    fetch("https://mynds-crud-tutorial-c030d-default-rtdb.firebaseio.com/pessoas.json", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(resposta => resposta.json())
        .then(data => {
            console.log(data)
            pegarDados()
        })
        .catch(erro => console.error(erro))
}


