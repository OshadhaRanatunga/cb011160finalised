document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('paymentForm');

    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvc = document.getElementById('cvc').value;
        const cardholderName = document.getElementById('cardholderName').value;

        if (!validateCardNumber(cardNumber)) {
            alert("Invalid credit card number. Please enter a valid 16-digit card number.");
            return;
        }

        if (!validateCVC(cvc)) {
            alert("Invalid CVC number. Please enter a valid 3-digit CVC.");
            return;
        }

        const paymentDetails = {
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvc: cvc,
            cardholderName: cardholderName
        };

        localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));
        alert("Payment details successfully stored.");

        // You can redirect to another page or perform further actions here
        updatePaymentSummaryTable(paymentDetails);
    });
    function updatePaymentSummaryTable() {
    const paymentDetails = JSON.parse(localStorage.getItem('paymentDetails'));
    if (paymentDetails) {
        const paymentTable = document.getElementById('paymentTable');
        paymentTable.innerHTML = `
            <tr>
                <th>Payment Type</th>
                <th>Details</th>
            </tr>
            <tr>
                <td>Credit Card Number</td>
                <td>${paymentDetails.cardNumber}</td>
            </tr>
            <tr>
                <td>Expiry Date</td>
                <td>${paymentDetails.expiryDate}</td>
            </tr>
            <tr>
                <td>CVC Number</td>
                <td>${paymentDetails.cvc}</td>
            </tr>
            <tr>
                <td>Cardholder's Name</td>
                <td>${paymentDetails.cardholderName}</td>
            </tr>
        `;
    }
}

updatePaymentSummaryTable();
});

function validateCardNumber(cardNumber) {
    const cardNumberRegex = /^\d{16}$/;
    return cardNumberRegex.test(cardNumber);
}

function validateCVC(cvc) {
    const cvcRegex = /^\d{3}$/;
    return cvcRegex.test(cvc);
}

