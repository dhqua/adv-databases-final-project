const table1 = document.getElementById("form1-table");
const table2 = document.getElementById("form2-table");
const buttonToSearchROR = document.getElementById("submit-ror");

buttonToSearchROR.onclick = function () {
    console.log("Called");
    const drugname = document.getElementById("drug-name-form1").value;
    const side_effect = document.getElementById("side-effect").value;
    if (drugname.length !== 0 && side_effect.length !== 0) {
        callCountforDrugWithSideEffect(drugname, side_effect);
        if (table2) {
            table2.style.display = "none";
        }
        table1.style.display = "block";
    }
};

function callCountforDrugWithSideEffect(drugname, side_effect) {
    var xhrror = new XMLHttpRequest();
    var urlror = "http://localhost:3000/data/getDSP";
    var body = JSON.stringify({"drugname": drugname, "pt": side_effect});
    console.log(body);
    tb = table1.parentNode;
    xhrror.open('POST', urlror, true);
    xhrror.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


    xhrror.onload = function (e) {
        var jsonrepsonse = JSON.parse(xhrror.response);
        console.log(jsonrepsonse.result[0].count);
        tb.cells[0].innerHTML = jsonrepsonse.result[0].count;

    };
    xhrror.send(body);
}

// const submitForm1 = () => {
//     const text1 = document.getElementById("drug-name-form1").value;
//     const text2 = document.getElementById("side-effect").value;
//     if (text1.length !== 0 && text2.length !== 0) {
//         if (table2) {
//             table2.style.display = "none";
//         }
//         table1.style.display = "block";
//     }
//     /**
//      * Perform action on submitting form 1
//      */
// };