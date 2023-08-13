// Calculate the total based on selected ticket types and time
function calculateTotal() {
    const selectedTime = new Date(document.getElementById('datetime').value);
    const hour = selectedTime.getHours();

    const ticketTypes = ['foreignAdult', 'foreignChild', 'localAdult', 'localChild'];
    let total = 0;

    for (const ticketType of ticketTypes) {
        const checkbox = document.querySelector(`input[value="${ticketType}"]`);
        if (checkbox.checked) {
            const chargePerHour = getChargePerHour(ticketType, hour);
            total += chargePerHour;
        }
    }

    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Get the charge per hour based on ticket type and hour
function getChargePerHour(ticketType, hour) {
    const peakHours = [10, 11, 12, 15, 16, 17]; // Peak hours: 10-11, 11-12, 12-1, 3-4, 4-5, 5-6

    if (peakHours.includes(hour)) {
        if (ticketType === 'foreignAdult') return 13;
        if (ticketType === 'foreignChild') return 8;
        if (ticketType === 'localAdult') return 6;
        if (ticketType === 'localChild') return 3;
    } else {
        if (ticketType === 'foreignAdult') return 10;
        if (ticketType === 'foreignChild') return 5;
        if (ticketType === 'localAdult') return 4;
        if (ticketType === 'localChild') return 2;
    }

    return 0;
}
