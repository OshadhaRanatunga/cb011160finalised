function increaseTicket(ticketType) {
    let ticketCount = parseInt(localStorage.getItem(ticketType)) || 0;
    ticketCount++;
    localStorage.setItem(ticketType, ticketCount.toString());
    document.getElementById(ticketType).value = ticketCount; // Update the count on the page
  }
  
  function decreaseTicket(ticketType) {
    let ticketCount = parseInt(localStorage.getItem(ticketType)) || 0;
    if (ticketCount > 0) {
      ticketCount--;
      localStorage.setItem(ticketType, ticketCount.toString());
      document.getElementById(ticketType).value = ticketCount; // Update the count on the page
    }
  }
  
  function saveTicketCount(ticketType) {
    let ticketCount = parseInt(document.getElementById(ticketType).value);
    if (!isNaN(ticketCount) && ticketCount >= 0) {
      localStorage.setItem(ticketType, ticketCount.toString());
      alert(`Ticket count for ${ticketType} saved to local storage!`);
    } else {
      alert("Invalid ticket count. Please enter a non-negative number.");
    }
  }

  function saveSelectedSlot() {
    const selectedSlot = document.getElementById('timeSlot').value;
    localStorage.setItem('selectedSlot', selectedSlot);
    alert(`Selected slot "${selectedSlot}" has been saved.`);
}

// Load the saved slot when the page loads
function loadSavedSlot() {
    const savedSlot = localStorage.getItem('selectedSlot');
    if (savedSlot) {
        document.getElementById('timeSlot').value = savedSlot;
    }
}







function calculateTotal() {
    const selectedSlot = document.getElementById('timeSlot').value;
    const ticketType = 'localChild'; // Change this to match the appropriate ticket type
    const isPeakSlot = isPeakHourSlot(selectedSlot);

    let chargePerHour = 0;

    if (ticketType === 'foreignAdult') {
        chargePerHour = isPeakSlot ? 13 : 10;
    } else if (ticketType === 'foreignChild') {
        chargePerHour = isPeakSlot ? 8 : 5;
    } else if (ticketType === 'localAdult') {
        chargePerHour = isPeakSlot ? 6 : 4;
    } else if (ticketType === 'localChild') {
        chargePerHour = isPeakSlot ? 3 : 2;
    }

    const ticketCount = parseInt(document.getElementById(ticketType).value);
    const total = ticketCount * chargePerHour;
    localStorage.setItem('localChildtotal', total);
  

    alert(`Total for ${selectedSlot} (${ticketType}): $${total}`);
}

function isPeakHourSlot(slot) {
    const peakSlots = ["10am-11am", "11am-12pm", "12pm-1pm", "3pm-4pm", "5pm-6pm"];
    return peakSlots.includes(slot);
}

function calculateTotalfa() {
    const selectedSlot = document.getElementById('timeSlot').value;
    const ticketType = 'foreignAdult'; // Change this to match the appropriate ticket type
    const isPeakSlot = isPeakHourSlot(selectedSlot);

    let chargePerHour = 0;

    if (ticketType === 'foreignAdult') {
        chargePerHour = isPeakSlot ? 13 : 10;
    } else if (ticketType === 'foreignChild') {
        chargePerHour = isPeakSlot ? 8 : 5;
    } else if (ticketType === 'localAdult') {
        chargePerHour = isPeakSlot ? 6 : 4;
    } else if (ticketType === 'localChild') {
        chargePerHour = isPeakSlot ? 3 : 2;
    }

    const ticketCount = parseInt(document.getElementById(ticketType).value);
    const total = ticketCount * chargePerHour;
    localStorage.setItem('foreignAdulttotal', total);

    alert(`Total for ${selectedSlot} (${ticketType}): $${total}`);
    
}

function calculateTotalfc() {
    const selectedSlot = document.getElementById('timeSlot').value;
    const ticketType = 'foreignChild'; // Change this to match the appropriate ticket type
    const isPeakSlot = isPeakHourSlot(selectedSlot);

    let chargePerHour = 0;

    if (ticketType === 'foreignAdult') {
        chargePerHour = isPeakSlot ? 13 : 10;
    } else if (ticketType === 'foreignChild') {
        chargePerHour = isPeakSlot ? 8 : 5;
    } else if (ticketType === 'localAdult') {
        chargePerHour = isPeakSlot ? 6 : 4;
    } else if (ticketType === 'localChild') {
        chargePerHour = isPeakSlot ? 3 : 2;
    }

    const ticketCount = parseInt(document.getElementById(ticketType).value);
    const total = ticketCount * chargePerHour;
    localStorage.setItem('foreignChildtotal', total);

    alert(`Total for ${selectedSlot} (${ticketType}): $${total}`);
}

function calculateTotalla() {
    const selectedSlot = document.getElementById('timeSlot').value;
    const ticketType = 'localAdult'; // Change this to match the appropriate ticket type
    const isPeakSlot = isPeakHourSlot(selectedSlot);

    let chargePerHour = 0;

    if (ticketType === 'foreignAdult') {
        chargePerHour = isPeakSlot ? 13 : 10;
    } else if (ticketType === 'foreignChild') {
        chargePerHour = isPeakSlot ? 8 : 5;
    } else if (ticketType === 'localAdult') {
        chargePerHour = isPeakSlot ? 6 : 4;
    } else if (ticketType === 'localChild') {
        chargePerHour = isPeakSlot ? 3 : 2;
    }

    const ticketCount = parseInt(document.getElementById(ticketType).value);
    const total = ticketCount * chargePerHour;
    localStorage.setItem('localAdulttotal', total);

    alert(`Total for ${selectedSlot} (${ticketType}): $${total}`);
}



function updateSummaryTable() {
    const localAdultTotal = parseInt(localStorage.getItem('localAdulttotal')) || 0;
    const localChildTotal = parseInt(localStorage.getItem('localChildtotal')) || 0;
    const foreignAdultTotal = parseInt(localStorage.getItem('foreignAdulttotal')) || 0;
    const foreignChildTotal = parseInt(localStorage.getItem('foreignChildtotal')) || 0;
    

    const summaryTable = document.getElementById('summaryTable');
    summaryTable.innerHTML = `
        <tr>
            <th>Ticket Type</th>
            <th>Total Tickets</th>
        </tr>
        <tr>
            <td>Local Adult</td>
            <td>${localAdultTotal}</td>
        </tr>
        <tr>
            <td>Local Child</td>
            <td>${localChildTotal}</td>
        </tr>
        <tr>
            <td>Foreign Adult</td>
            <td>${foreignAdultTotal}</td>
        </tr>
        <tr>
            <td>Foreign Child</td>
            <td>${foreignChildTotal}</td>
        </tr>
        <tr>
            <td><strong>Grand Total</strong></td>
            <td><strong>${calculateFinalTotal()}</strong></td>
        </tr>
        
    `;
}

// Call this function whenever you want to update the summary table
updateSummaryTable();



function calculateFinalTotal() {
    const localAdultTotal = parseInt(localStorage.getItem('localAdulttotal')) || 0;
    const localChildTotal = parseInt(localStorage.getItem('localChildtotal')) || 0;
    const foreignAdultTotal = parseInt(localStorage.getItem('foreignAdulttotal')) || 0;
    const foreignChildTotal = parseInt(localStorage.getItem('foreignChildtotal')) || 0;

    const finalTotal = localAdultTotal + localChildTotal + foreignAdultTotal + foreignChildTotal;

    return finalTotal;
}

document.addEventListener('DOMContentLoaded', function () {
    const dateForm = document.getElementById('dateForm');
    const summaryTable = document.getElementById('summaryTable');

    dateForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const selectedDate = document.getElementById('selectedDate').value;
        localStorage.setItem('selectedDate', selectedDate);

        updateSummaryTable(selectedDate);

        // Redirect to another page after submission (replace 'details.html' with your desired page)
        
    })

    function updateSummaryTable(selectedDate) {
        const newRow = summaryTable.insertRow();
        const dateCell = newRow.insertCell(0);
        const selectedDateCell = newRow.insertCell(1);
        
        dateCell.textContent = new Date().toLocaleDateString();
        selectedDateCell.textContent = selectedDate;
        const paymentDetails = JSON.parse(localStorage.getItem('paymentDetails'));
        if (paymentDetails) {
            const paymentRow = summaryTable.insertRow();
            const paymentTypeCell = paymentRow.insertCell(0);
            const paymentAmountCell = paymentRow.insertCell(1);

            paymentTypeCell.textContent = 'Payment';
            paymentAmountCell.textContent = '$' + calculateFinalTotal();
        }
     
    }
});



