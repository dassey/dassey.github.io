function calculatePerDiem() {
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);
    var amount = parseFloat(document.getElementById('amount').value);

    if (!startDate || !endDate || isNaN(amount)) {
        alert('Please fill in all fields with valid data.');
        return;
    }

    var numberOfDays = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)) - 2;
    var mainCal = numberOfDays * amount;

    var bonusCal = 0.75 * amount * 2;
    var totalCal = mainCal + bonusCal;

    document.getElementById('result').value = "Main Calculation: $" + mainCal.toFixed(2) +
        "\nBonus Calculation: $" + bonusCal.toFixed(2) +
        "\nTotal Per Diem: $" + totalCal.toFixed(2);
}
