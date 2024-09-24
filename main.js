const history = document.getElementById('historyBtn');
const donate = document.getElementById('donateBtn');
const donateSec = document.getElementById('donateSection')
const historySec = document.getElementById('historySection')

history.addEventListener('click',function(){

   if(!history.classList.contains('bg-[#B4F461]')){ 

    history.classList.remove('bg-white')

    history.classList.add('bg-green-500')

    donate.classList.remove('bg-green-500')

    donate.classList.add('bg-white')

    donateSec.classList.remove('block')

    donateSec.classList.add('hidden')

    historySec.classList.remove('hidden')

}
})

donate.addEventListener('click',function(){

    if(!donate.classList.contains('bg-[#B4F461]')){ 
     donate.classList.remove('bg-white')
     donate.classList.add('bg-green-500')
     history.classList.remove('bg-green-500')
     history.classList.add('bg-white')
     donateSec.classList.remove('hidden')
     historySec.classList.add('hidden')
 }
 })

document.addEventListener('DOMContentLoaded', () => {

    const historySection = document.getElementById('historySection'); 

    function processDonation(sectionId, sectionName) {const moneyDisplay = document.getElementById('money');const donationInput = document.getElementById(`donationAmount${sectionId}`);const alreadyDonatedDisplay = document.getElementById(`alreadyDonated${sectionId}`);const modal = document.getElementById(`modal${sectionId}`);const closeModalBtn = document.getElementById(`closeModal${sectionId}`);
    const donationAmount = parseFloat(donationInput.value); 

        if (isNaN(donationAmount) || donationAmount <= 0) {

            alert('Invalid input. Please enter a valid number.');
            modal.classList.add('hidden')
            return;

        }
        const currentMoney = parseFloat(moneyDisplay.textContent) || 0;
        if (donationAmount > currentMoney) {
            alert('Donation cannot exceed available balance.');
            return; 
        }
        moneyDisplay.textContent = currentMoney - donationAmount;
        const alreadyDonated = parseFloat(alreadyDonatedDisplay.textContent) || 0;
        alreadyDonatedDisplay.textContent = alreadyDonated + donationAmount;
        donationInput.value = ''; 
        modal.classList.remove('hidden');
        closeModalBtn.addEventListener('click', function() {
            modal.classList.add('hidden');
        });
        logDonation(sectionName, donationAmount);
    }
    function logDonation(sectionName, donationAmount) {
        const now = new Date();
        const timeString = now.toLocaleString('en-US', { timeZoneName: 'short' });
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('donationMessage', 'mt-4', 'p-4', 'border', 'rounded-lg', 'bg-gray-100', 'flex' ,'max-w-[1300px]','flex-col' ,'lg:w-[900px]', 'mx-auto');
        const donationText = document.createElement('p');
        donationText.innerHTML = `<strong>${donationAmount} Taka</strong> is Donated for <strong>${sectionName}</strong>, Bangladesh.`;
        const timeText = document.createElement('p');
        timeText.innerHTML = `Donated on ${timeString}`;
        timeText.style.fontSize = '12px';
        timeText.style.opacity = '0.8';
        messageDiv.appendChild(donationText);
        messageDiv.appendChild(timeText);
        historySection.appendChild(messageDiv);
    }
    document.querySelector('.modalBtn1').addEventListener('click', function() {
        processDonation(1, 'Flood Relief in Noakhali');
    });
    document.querySelector('.modalBtn2').addEventListener('click', function() {
        processDonation(2, 'Flood Relief in Feni');
    });
    document.querySelector('.modalBtn3').addEventListener('click', function() {
        processDonation(3, 'Aid for Injured in the Quota Movement');
    });
});


  

  