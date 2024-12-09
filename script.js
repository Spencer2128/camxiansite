document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contactModal');
    const openModal = document.getElementById('open-contact-modal');
    const closeModal = document.getElementById('close-modal');
  
    openModal.addEventListener('click', function() {
      modal.style.display = 'flex';
    });
  
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });