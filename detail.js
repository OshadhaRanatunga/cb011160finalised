document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const summaryTable = document.getElementById('summaryTable');

    // Load and display stored contact information if available
    const storedContactInfo = JSON.parse(localStorage.getItem('contactInfo'));
    if (storedContactInfo) {
        updateSummaryTable(storedContactInfo);
    }

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementsByName('phone')[0].value;
        const email = document.getElementById('email').value.toLowerCase(); // Convert to lowercase
        const confirmEmail = document.getElementById('confirmEmail').value.toLowerCase(); // Convert to lowercase

        if (email !== confirmEmail) {
            alert("Emails do not match. Please make sure the email addresses match.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Invalid email format. Please enter a valid email address.");
            return;
        }

        const contactInfo = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        };

        localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
        updateSummaryTable(contactInfo);

        // Redirect to another page after submission (replace 'details.html' with your desired page)
        window.location.href = 'details.html';
    });
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function updateSummaryTable(contactInfo) {
    const summaryTable = document.getElementById('summaryTable');
    summaryTable.innerHTML = `
        <tr>
            <th>First Name</th>
            <td>${contactInfo.firstName}</td>
        </tr>
        <tr>
            <th>Last Name</th>
            <td>${contactInfo.lastName}</td>
        </tr>
        <tr>
            <th>Phone Number</th>
            <td>${contactInfo.phone}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>${contactInfo.email}</td>
        </tr>
    `;
}
