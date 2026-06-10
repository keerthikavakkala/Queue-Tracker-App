let token = 0;
let currentServing = 0;

function joinQueue() {

    let name = document.getElementById("name").value;
    let service = document.getElementById("service").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    token++;

    let li = document.createElement("li");
    li.innerText = "Token " + token + " - " + name + " - " + service;

    document.getElementById("queueList").appendChild(li);

    document.getElementById("result").innerHTML =
        "Token Number: " + token;
}

function callNext() {

    if (currentServing < token) {
        currentServing++;

        document.getElementById("currentToken").innerHTML =
            "Now Serving: Token " + currentServing;
    }
}