
document.querySelector("#form").addEventListener("submit",submitFun);

function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password = document.querySelector("#password").value;

    if(username == "ghous" &&  password == "ahmed") {
        window.location.href = "student.html";
    } else {
       let error = document.getElementById("error");
        error.classList.add('d-block')
        error.classList.remove('d-none')
        error.innerHTML = "Invalid username or password";
        // document.querySelector("#form").reset();
    }
}