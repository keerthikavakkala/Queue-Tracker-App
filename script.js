let token = localStorage.getItem("token")
  ? parseInt(localStorage.getItem("token"))
  : 0;

let currentServing = localStorage.getItem("currentServing")
  ? parseInt(localStorage.getItem("currentServing"))
  : 0;

document.getElementById("result").innerHTML =
  "Token Number: " + token;

document.getElementById("currentToken").innerHTML =
  "Now Serving: Token " + currentServing;

function joinQueue() {

  let name = document.getElementById("name").value;
  let service = document.getElementById("service").value;

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  token++;

  localStorage.setItem("token", token);

  let li = document.createElement("li");
  li.innerText =
    "Token " + token + " - " + name + " - " + service;

  document.getElementById("queueList").appendChild(li);

  document.getElementById("result").innerHTML =
    "Token Number: " + token;

  document.getElementById("totalCustomers").innerHTML =
    "Total Customers: " + token;

  document.getElementById("name").value = "";
}

function callNext() {

  if (currentServing < token) {

    currentServing++;

    localStorage.setItem(
      "currentServing",
      currentServing
    );

    document.getElementById("currentToken").innerHTML =
      "Now Serving: Token " + currentServing;

  } else {
    alert("No customers in queue");
  }
}
