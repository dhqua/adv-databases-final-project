const url = "http://localhost:3000/data/getSideEffect";
const drugname = sessionStorage.drugname;

const json = {
    "drugname": drugname
};
document.getElementById("heading1").innerHTML = "Data for " + drugname;
$(document).ready(function () {
    $.ajax({
        url: url,
        dataType: "json",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(json),
        cache: false,
        success: function (data) {
            var sideEffectData = "";
            $.each(data.result, function (i, res) {
                console.log(res);
                sideEffectData += "<tr>";
                sideEffectData += "<td>" + res.effect + "</td>";
                sideEffectData += "<td>" + res.ptCount + "</td>";
                sideEffectData += "<td>" + res.percentage + "</td>";
            });
            $("#table").append(sideEffectData);
        },
        error: function (d) {
            alert("WAIT");
        }
    });
    $("#home").click(function () {
        window.location.replace("/index.html");
    });
});

