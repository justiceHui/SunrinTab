function setNum(value){
    localStorage.setItem("num", value);
}

function setAddress(value){
    localStorage.setItem("address", value);
}

function f(){
    setNum(document.getElementById("number").value);
    setAddress(document.getElementById("address").value);
    alert("등록 완료!");
    window.location.href = "index.html";
}