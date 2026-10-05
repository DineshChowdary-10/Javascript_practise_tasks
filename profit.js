function profitcal()
{
    let sp = parseInt(document.getElementById("sp").value);
    let cp = parseInt(document.getElementById("cp").value);
    let pa = document.getElementById("pa");
    let ppe =document.getElementById("ppe");

    pa.value = sp-cp;

    ppe.value = (p/cp)*100;
}