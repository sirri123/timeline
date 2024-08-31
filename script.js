document.addEventListener("DOMContentLoaded", function () {
    // Select all timeline items
    const timelineItems = document.querySelectorAll('.timeline ol li');

    // Get modal elements
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const modalTime = document.getElementById('modal-time');
    const modalDetails = document.getElementById('modal-details');
    const closeModal = document.querySelector('.close');

    timelineItems.forEach(item => {
        const timeElement = item.querySelector('time');
        
        // Add click event listener to each time element
        timeElement.addEventListener('click', function () {
            const paragraphText = item.querySelector('p').textContent;
            const timeText = timeElement.textContent;
            
            // Populate modal content
            modalTime.textContent = timeText;
            modalDetails.textContent = paragraphText;
            
            // Show the modal
            modal.classList.remove('hidden');
        });
    });

    // Close modal on close button click
    closeModal.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
