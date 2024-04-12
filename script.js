function simpleInterestCalc(){
    var Principal = Number(document.getElementById("simpleInterstPrincipal").value)
    var rate = Number(document.getElementById("simpleInterstRate").value)/100
    var time = Number(document.getElementById("simpleInterstTime").value)
    document.getElementById("simpleInterstAnswer").innerText= ("The interest is $")+comma((Principal*rate*time));
    document.getElementById("simpleInterstAnswer2").innerText= ("The total amount is $")+comma((Principal*rate*time+Principal));
};
function compoundInterestCalc(){
    var Principal = Number(document.getElementById("compoundInterestPrincipal").value)
    var rate = Number(document.getElementById("compoundInterestRate").value)/100
    var time = Number(document.getElementById("compoundInterestTime").value)
    var cinterest = Number(((Principal*((1+rate)**time)) - Principal).toFixed(2))
    document.getElementById("compoundInterestAnswer").innerText= ("The interest (2 d.p.) is $")+comma((cinterest));
    document.getElementById("compoundInterestAnswer2").innerText= ("The total (2 d.p.) amount is $")+comma((cinterest+Principal));
};
//loan calculator
function calculateloan() {
    var amount = Number(document.getElementById("loanamount").value)
    var rate = Number(document.getElementById("interestrate").value)
    var months = Number(document.getElementById("numberofmonths").value)
    var interest = (amount * (rate * 0.01)) / months;
    var totalamount = ((amount / months) + interest).toFixed(2);
    var totalamountwithoutinterest = ((amount / months)).toFixed(2);
    document.getElementById("interest").innerText = ("Interest (2 d.p.) is $") + interest.toFixed(2);
    document.getElementById("monthlypayment").innerText = ("Monthly payment (2 d.p. and with interest) is $") + totalamount;
    document.getElementById("monthlypaymentwithoutinterest").innerText = ("Monthly payment (2 d.p. and without interest) is $") + totalamountwithoutinterest;
};

//comma
function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
}