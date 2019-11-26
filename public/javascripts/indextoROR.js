const table1 = document.getElementById("form1-table");
const table2 = document.getElementById("form2-table");
const buttonToSearchROR = document.getElementById("submit-ror");
var countofAllReactions = 0;
var countofDrugsWithSideEffects = 0;
var countofDrugsWithNoSideEffects = 0;
var countofNoDrugsWithSideEffects = 0;
getAllCounts();
buttonToSearchROR.onclick = function () {
    const drugname = document.getElementById("drug-name-form1").value;
    const side_effect = document.getElementById("side-effect").value;
    if (drugname.length !== 0 && side_effect.length !== 0) {
        callCountforDrugWithSideEffect(drugname, side_effect);
        callCountforDrugwithNoSideEffect(drugname, side_effect);
        callCountforNoDrugWithSideEffects(drugname, side_effect);
        document.getElementById("ndnsp").innerHTML = countofAllReactions;

        if (table2) {
            table2.style.display = "none";
        }
        table1.style.display = "block";
    }
};

function getAllCounts() {
    var xhrRor = new XMLHttpRequest();
    var urlRor = "http://localhost:3000/data/getNDNSP";
    xhrRor.open('GET', urlRor, true);
    xhrRor.send('');
    xhrRor.onload = function () {
        let jsonResponse = JSON.parse(xhrRor.response);
        if (jsonResponse.response)
            countofAllReactions = jsonResponse.result[0].count;
        else
            console.log(jsonResponse.response);
    };
}

function callCountforDrugWithSideEffect(drugname, side_effect) {
    var xhrRor = new XMLHttpRequest();
    var urlRor = "http://localhost:3000/data/getDSP";
    var body = JSON.stringify({"drugname": drugname, "pt": side_effect});
    console.log(body);
    xhrRor.open('POST', urlRor, true);
    xhrRor.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


    xhrRor.onload = function (e) {
        let jsonRepsonse = JSON.parse(xhrRor.response);
        if (jsonRepsonse.response) {
            console.log(jsonRepsonse.result[0].count);
            countofDrugsWithSideEffects = jsonRepsonse.result[0].count;
            document.getElementById("dsp").innerHTML = jsonRepsonse.result[0].count;
        }
    };
    xhrRor.send(body);
}

function callCountforDrugwithNoSideEffect(drugname, side_effect) {
    var xhrRor = new XMLHttpRequest();
    var urlRor = "http://localhost:3000/data/getDNSP";
    var body = JSON.stringify({"drugname": drugname, "pt": side_effect});
    console.log(body);
    xhrRor.open('POST', urlRor, true);
    xhrRor.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


    xhrRor.onload = function (e) {
        let jsonRepsonse = JSON.parse(xhrRor.response);
        if (jsonRepsonse.response) {
            console.log(jsonRepsonse.result[0].count);
            countofDrugsWithNoSideEffects = jsonRepsonse.result[0].count;
            document.getElementById("dnsp").innerHTML = jsonRepsonse.result[0].count;
        }
    };
    xhrRor.send(body);
}

function callCountforNoDrugWithSideEffects(drugname, side_effect) {
    var xhrRor = new XMLHttpRequest();
    var urlRor = "http://localhost:3000/data/getNDSP";
    var body = JSON.stringify({"drugname": drugname, "pt": side_effect});
    console.log(body);
    xhrRor.open('POST', urlRor, true);
    xhrRor.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrRor.onload = function (e) {
        let jsonRepsonse = JSON.parse(xhrRor.response);
        if (jsonRepsonse.response) {
            console.log(jsonRepsonse.result[0].count);
            countofNoDrugsWithSideEffects = jsonRepsonse.result[0].count;
            document.getElementById("ndsp").innerHTML = jsonRepsonse.result[0].count;
        }
    };
    xhrRor.send(body);
    console.log(calculateRor());

}

function calculateRor() {
    return (countofAllReactions * countofDrugsWithSideEffects) / (countofNoDrugsWithSideEffects * countofDrugsWithNoSideEffects);
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