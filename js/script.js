
// Implementation Toggle Functionality

// Toggle to History Section
document.getElementById('toggle-history-btn').addEventListener('click', function () {
    const toggleDonationButton = getElementValueById('toggle-donation-btn');
    toggleDonationButton.classList.remove('bg-[#B4F461]');
    toggleDonationButton.classList.add('border-2');

    const toggleHistoryButton = getElementValueById('toggle-history-btn');
    toggleHistoryButton.classList.add('bg-[#B4F461]');
    toggleHistoryButton.classList.remove('border-2');

    const allDonationCard = getElementValueById('all-donation-card');
    allDonationCard.classList.add('hidden');

    getElementValueById('donation-history').classList.remove('hidden')

})

// Toggle to Donation Section
document.getElementById('toggle-donation-btn').addEventListener('click', function () {
    const toggleDonationButton = getElementValueById('toggle-donation-btn');
    toggleDonationButton.classList.add('bg-[#B4F461]');
    toggleDonationButton.classList.remove('border-2');

    const toggleHistoryButton = getElementValueById('toggle-history-btn');
    toggleHistoryButton.classList.remove('bg-[#B4F461]');
    toggleHistoryButton.classList.add('border-2');

    const allDonationCard = getElementValueById('all-donation-card');
    allDonationCard.classList.remove('hidden');

    getElementValueById('donation-history').classList.add('hidden')

})



// Implement Donation Functionality For Noakhali Flood
document.getElementById('donation-btn').addEventListener('click', function () {

    const donationNoakhaliFlood = parseFloat(document.getElementById('donation-noakhali-flood').value);

    let MyCurrentBalance = parseFloat(document.getElementById('my-available-balance').innerText);
    console.log(typeof MyCurrentBalance);
    let currentBalance = parseFloat(getElementValueById('current-balance').innerText);

    if (MyCurrentBalance < donationNoakhaliFlood || donationNoakhaliFlood < 0 || isNaN(donationNoakhaliFlood)) {
        return alert('Invalid Donation Amount')
    }

    getElementValueById('current-balance').innerText = currentBalance + donationNoakhaliFlood;

    document.getElementById('my-available-balance').innerText = parseFloat(MyCurrentBalance) - parseFloat(donationNoakhaliFlood);

    const modal = document.getElementById('my_modal_5');
    modal.showModal()
})




