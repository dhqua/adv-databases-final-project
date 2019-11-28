var buttontogetList = document.getElementById("submit-list");

buttontogetList.onclick = function () {
    sessionStorage.drugname = document.getElementById("drug-name-form2").value;
    window.location.replace("/tableList.html");
};