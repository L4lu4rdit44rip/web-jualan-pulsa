
function clikP(){
    if(document.getElementById("pulsa").checked){
        document.getElementById("pulsaH").classList.remove('p-none');
    }else{
        document.getElementById("pulsaH").classList.add('p-none');
    }

}
function clikD(){
    if(document.getElementById("data").checked){
        document.getElementById("dataH").classList.remove('d-none');
    }else{
        document.getElementById("dataH").classList.add('d-none');
    }

}
function clikL(){
    if(document.getElementById("listrik").checked){
        document.getElementById("listrikH").classList.remove('l-none');
    }else{
        document.getElementById("listrikH").classList.add('l-none');
    }

}
function clikA(){
    if(document.getElementById("air").checked){
        document.getElementById("airH").classList.remove('a-none');
    }else{
        document.getElementById("airH").classList.add('a-none');
    }

}
function jumlah(){
    var pulsaP = parseInt(document.getElementById("pulsaH").value);
    var dataP = parseInt(document.getElementById("dataH").value);
    var listrikP = parseInt(document.getElementById("listrikH").value);
    var airP = parseInt(document.getElementById("airH").value);
    var outputnya = document.getElementById("totalnya");

    var total = pulsaP + dataP + listrikP + airP;
    outputnya.innerHTML = "<td>" + pulsaP + "</td>" + "<td>" + dataP + "</td>" +  "<td>" + listrikP + "</td>"+ "<td>" + airP + "</td>"+ "<td>" + total + "</td>";
}
