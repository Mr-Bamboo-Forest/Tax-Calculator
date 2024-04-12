function simpleInterestCalc(){
    var principle = Number(document.getElementById("simpleInterstPrinciple").value)
    var rate = Number(document.getElementById("simpleInterstRate").value)/100
    var time = Number(document.getElementById("simpleInterstTime").value)
    document.getElementById("simpleInterstAnswer").innerText= ("The interest is $")+comma((principle*rate*time));
    document.getElementById("simpleInterstAnswer2").innerText= ("The total amount is $")+comma((principle*rate*time+principle));
}
//loan calculator
function calculateloan() {
    var amount = Number(document.getElementById("loanamount").value)
    var rate = Number(document.getElementById("interestrate").value)
    var months = Number(document.getElementById("numberofmonths").value)
    var interest = (amount * (rate * 0.01)) / months;
    var totalamount = ((amount / months) + interest).toFixed(2);
    var totalamountwithoutinterest = ((amount / months)).toFixed(2);
    document.getElementById("interest").innerText = ("Interest is $") + interest;
    document.getElementById("monthlypayment").innerText = ("Monthly payment (2 d.p., and with interest) is $") + totalamount;
    document.getElementById("monthlypaymentwithoutinterest").innerText = ("Monthly payment (2 d.p. and without interest) is $") + totalamountwithoutinterest;
};

//comma
function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
}