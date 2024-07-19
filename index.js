
document.querySelector("#form").addEventListener("submit",submitFun);

function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password = document.querySelector("#password").value;

    if(username == "ghous" &&  password == "ahmed") {
        window.location.href = "student.html";
    } else {
        alert("Invalid username or Password");
        document.querySelector("#form").reset();
    }
}