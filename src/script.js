function submitform() {
    var form = document.getElementById("form");
    let checkbox = document.getElementById("checkbox");
    if(checkbox.checked){
        alert("Details submitted successfully");
    }
    else{
        alert("Please tick the checkbox, then submit");
    }
}