
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


// Implement Donate for Flood Relief in Feni


document.getElementById('relief-donation-btn').addEventListener('click', function () {

    const donationReliefFlood = parseFloat(document.getElementById('donation-relief-field').value);

    let MyCurrentBalance = parseFloat(document.getElementById('my-available-balance').innerText);

    let currentBalance = parseFloat(getElementValueById('relief-current-balance').innerText);

    if (MyCurrentBalance < donationReliefFlood || donationReliefFlood < 0 || isNaN(donationReliefFlood)) {
        return alert('Invalid Donation Amount')
    }

    getElementValueById('relief-current-balance').innerText = currentBalance + donationReliefFlood;

    document.getElementById('my-available-balance').innerText = parseFloat(MyCurrentBalance) - parseFloat(donationReliefFlood);

    const modal = document.getElementById('my_modal_5');
    modal.showModal()

})


// Implement Aid for Injured in the Quota Movement

document.getElementById('injured-donation-btn').addEventListener('click', function () {

    const donationInjuredFlood = parseFloat(document.getElementById('donation-injured-field').value);

    let currentBalance = parseFloat(getElementValueById('injured-donated-balance').innerText);

    let MyCurrentBalance = parseFloat(document.getElementById('my-available-balance').innerText);

    if (MyCurrentBalance < donationInjuredFlood || donationInjuredFlood < 0 || isNaN(donationInjuredFlood)) {
        return alert('Invalid Donation Amount');
    }

    getElementValueById('injured-donated-balance').innerText = currentBalance + donationInjuredFlood;


    document.getElementById('my-available-balance').innerText = parseFloat(MyCurrentBalance) - parseFloat(donationInjuredFlood);

    const modal = document.getElementById('my_modal_5');
    modal.showModal()

})