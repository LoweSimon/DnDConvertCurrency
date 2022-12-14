// Function which obtains each value from the cards and works out how much
// of each currency is left.

function convert()  {
    
    let c = document.getElementById("copper").value;
    let s = document.getElementById("silver").value;
    let e = document.getElementById("electrum").value;
    let g = document.getElementById("gold").value;
    let p = document.getElementById("platinum").value;
    let party = document.getElementById("partyNum").value;

    let cpnumber = Math.floor(c / 100);
    let spnumber = Math.floor(s / 10);
    let epnumber = Math.floor(e / 2);
    let gpnumber = Math.floor(g / 1);

    let cpremainder = Math.floor(c % 100);
    let spremainder = Math.floor(s % 10);
    let epremainder = Math.floor(e % 2);

    const goldOutcome = cpnumber + spnumber + epnumber + gpnumber;

    document.getElementById("goldNumber").innerHTML = goldOutcome;
    document.getElementById("silverNumber").innerHTML = spremainder;
    document.getElementById("copperNumber").innerHTML = cpremainder;

    let partydivide = goldOutcome / document.getElementById("partyNum").value;

    if (party == "")    {
        document.getElementById("partyGoldNumber").innerHTML = "";
    } else  {
        document.getElementById("partyGoldNumber").innerHTML = partydivide;
    }

    
}


// Function to reset all inputs and results back to zero
function clearAll() {

    // Resetting each input back to zero
    document.getElementById("copper").value = "";
    document.getElementById("silver").value = "";
    document.getElementById("electrum").value = "";
    document.getElementById("gold").value = "";
    document.getElementById("platinum").value = "";
    document.getElementById("partyNum").value = "";

    // Resetting results back to zero
    document.getElementById("goldNumber").innerHTML = "";
    document.getElementById("silverNumber").innerHTML = "";
    document.getElementById("copperNumber").innerHTML = "";
}