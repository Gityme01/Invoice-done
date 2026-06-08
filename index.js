//1st method of doing this

function cal() {
    var disGiven = document.querySelector(".dis-given").value;
    var subTotal = document.querySelector(".dis-subTotal").value
    console.log(disGiven + " and " + subTotal)

    var disPercent = disGiven * 100 / subTotal + "%";
    var disDecimal = disGiven / subTotal;
    
    console.log(disPercent + "%")
    // var perDiscount =  discount * 100 / total
    // console.log(perDiscount);
    document.getElementById('dis-result').innerHTML = 'Results<br>' + 'Discount = '+ disGiven + '<br> % discount = ' + disPercent + '<br>Decimal unit = ' + disDecimal;
    
    return subTotal;         
}

//2nd method of doing this

function cal2(){
    var total = document.querySelectorAll("input")[0].value;
    var grandTotal = document.querySelectorAll("input")[1].value;
    console.log(total + " and " + grandTotal);

    if (total === "" || grandTotal ==="") {
        document.getElementById('result').innerHTML = "fill both information above"
    }else {
        var subTotal = grandTotal / 1.075;
        var VAT = 0.075 * subTotal;
        var discount = total - subTotal;
        var perDiscount =  discount * 100 / total
        // console.log(perDiscount);
        document.getElementById('result').innerHTML = 'Results<br>' + 
        'subTotal = '+ subTotal + '<br> discount = ' + perDiscount + '<br>discount in decimal = ' + perDiscount / 100;
    }
    
    
    return subTotal;         
}

//create codes should in case the the user did fill at least one form field