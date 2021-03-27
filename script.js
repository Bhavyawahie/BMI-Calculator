function bmiCalculator(weight, height) {
    var h2 = height ** 2;
    let bmi = weight / h2;
    return Math.round(bmi);

}
var weight = prompt("Enter your weight in Kg");
var height = prompt("Enter you height in m");
var bmi = bmiCalculator(weight, height);

function printIt() {
    document.getElementById("demo").innerHTML = bmi;
}