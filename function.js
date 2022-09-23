let c = document.getElementById("copper").value;
let s = document.getElementById("silver").value;
let e = document.getElementById("electrum").value;
let g = document.getElementById("gold").value;
let p = document.getElementById("platinum").value;

console.log(c);

function convert()  {

    let cpnumber = Math.floor(c / 100);
    let spnumber = Math.floor(s / 10);
    let epnumber = Math.floor(e / 2);

    const outcome = cpnumber + spnumber + epnumber;

    document.getElementById("goldNumber").value = outcome;
    console.log(cpnumber);
}


// Function to reset all inputs and results back to zero
function clearAll() {

    // Resetting each input back to zero
    document.getElementById("copper").value = "";
    document.getElementById("silver").value = "";
    document.getElementById("electrum").value = "";
    document.getElementById("gold").value = "";
    document.getElementById("platinum").value = "";

    // Resetting results back to zero
    document.getElementById("goldNumber").innerHTML = "";
    document.getElementById("silverNumber").innerHTML = "";
    document.getElementById("copperNumber").innerHTML = "";
}