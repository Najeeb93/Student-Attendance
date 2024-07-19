
document = document.getElementById("form1").addEventListener("submit", submitFun1);

let studentDataArr = JSON.parse(localStorage.getItem("studentData")) || [];
function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;
    let city = document.querySelector("#city").value;
    let rollNo = document.querySelector("#rollNo").value;

    let studentObj = {
        name: name,
        number: number,
        city: city,
        rollNo: rollNo
    }

    studentDataArr.push(studentObj);
    localStorage.setItem("studentData",JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");
    
    displayFun(studentDataArr)
}

function displayFun(studentDataArr) {
    let count = 1;
    studentDataArr.map(function(item) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = count++
        let td2 = document.createElement("td");
        td2.innerHTML = item.name;
        let td3 = document.createElement("td");
        td3.innerHTML = item.number;
        let td4 = document.createElement("td");
        td4.innerHTML = item.city;
        let td5 = document.createElement("td");
        td5.innerHTML = item.rollNo;
        let td6 = document.createElement("td");
        let btn1 = document.createElement("button");
        btn1.innerHTML = "p";
        btn1.addEventListener("click", function () {
            td6.innerHTML = "<button>Present</button>";
        });
        let btn2 = document.createElement("button");
        btn2.innerHTML = "A";
        btn2.addEventListener("click", function () {
            td6.innerHTML = "<button id='absent'>Absent</button>";

        });
        td6.classList.add("td6");
        td6.append(btn1,btn2);
        
        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("#tbody").append(tr);

    });

}
displayFun(studentDataArr);