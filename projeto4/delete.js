const urlDelete ="https://mynds-crud-tutorial-c030d-default-rtdb.firebaseio.com/pessoas/"

function deleteData(id) {
    fetch(urlDelete + id + ".json", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            PegarDados();
        })
        .catch(error => console.error('Error:', error))
}