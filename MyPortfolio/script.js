document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const caption = document.getElementById('caption');
    const closeModal = document.querySelector('.modal .close');

    // Function to set active link
    function setActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    // Function to open modal
    function openModal(imageSrc, imageAlt) {
        modalImage.src = imageSrc;
        caption.textContent = imageAlt;
        modal.style.display = 'block';
    }

    // Function to close modal
    function closeModalFunc() {
        modal.style.display = 'none';
    }

    // Event listener for scroll to set active link
    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Initialize active link on page load

    // Event listener for image clicks
    document.querySelectorAll('.home-img img').forEach(img => {
        img.addEventListener('click', function() {
            openModal(this.src, this.alt);
        });
    });

    // Event listener for closing the modal
    closeModal.addEventListener('click', closeModalFunc);

    // Close modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModalFunc();
        }
    });
});
