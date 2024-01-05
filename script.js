function calculatePerDiem() {
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);
    var amount = parseFloat(document.getElementById('amount').value);

    if (!startDate || !endDate || isNaN(amount)) {
        alert('Please fill in all fields with valid data.');
        return;
    }

    // Calculate the number of days between startDate and endDate
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var daysBetween = Math.round(Math.abs((startDate - endDate) / oneDay)) + 1; // Including the first day

    var mainCal = (daysBetween - 2) * amount; // Subtract 2 days as per your requirement

    var bonusCal = 0.75 * amount * 2;
    var totalCal = mainCal + bonusCal;

    document.getElementById('result').value = "Total # of Days: " + daysBetween +
        "\n100% Per Diem Calculation: $" + mainCal.toFixed(2) +
        "\n75% Per Diem Calculation: $" + bonusCal.toFixed(2) +
        "\nTotal Per Diem: $" + totalCal.toFixed(2);
}
