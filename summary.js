// Load ticket counts from local storage and update the summary table
function updateSummaryTable() {
    const ticketTypes = ['localChild', 'localAdult', 'foreignChild', 'foreignAdult', 'infant'];
    for (const ticketType of ticketTypes) {
        const ticketCount = parseInt(localStorage.getItem(ticketType)) || 0;
        document.getElementById(ticketType).textContent = ticketCount;
    }
}

// Call the updateSummaryTable function to update the summary when the page loads
updateSummaryTable();
