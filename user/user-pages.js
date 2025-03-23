document.addEventListener('DOMContentLoaded', function() {
    // Register Events Page
    const registerButtons = document.querySelectorAll('.btn-register');
    if (registerButtons) {
        registerButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const eventCard = e.target.closest('.event-card');
                const eventName = eventCard.querySelector('h3').textContent;
                
                // Here you would typically handle the registration process
                const confirmRegistration = confirm(`Do you want to register for ${eventName}?`);
                if (confirmRegistration) {
                    alert('Registration successful!');
                }
            });
        });
    }

    // Registered Events Page
    const downloadButtons = document.querySelectorAll('.btn-download');
    if (downloadButtons) {
        downloadButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const eventCard = e.target.closest('.registered-event');
                const eventName = eventCard.querySelector('h3').textContent;
                const registrationId = eventCard.querySelector('.registration-id').textContent;
                
                // Here you would typically handle the ticket download
                alert(`Downloading ticket for ${eventName} (${registrationId})`);
            });
        });
    }

    const cancelButtons = document.querySelectorAll('.btn-cancel');
    if (cancelButtons) {
        cancelButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const eventCard = e.target.closest('.registered-event');
                const eventName = eventCard.querySelector('h3').textContent;
                
                const confirmCancel = confirm(`Are you sure you want to cancel your registration for ${eventName}?`);
                if (confirmCancel) {
                    eventCard.style.opacity = '0.5';
                    setTimeout(() => {
                        eventCard.remove();
                    }, 500);
                }
            });
        });
    }

    // Reminders Page
    const reminderToggles = document.querySelectorAll('.toggle-switch input');
    if (reminderToggles) {
        reminderToggles.forEach(toggle => {
            toggle.addEventListener('change', function(e) {
                const settingCard = e.target.closest('.setting-card');
                const settingName = settingCard.querySelector('h4').textContent;
                
                if (this.checked) {
                    alert(`${settingName} enabled`);
                } else {
                    alert(`${settingName} disabled`);
                }
            });
        });
    }

    const editButtons = document.querySelectorAll('.btn-edit');
    if (editButtons) {
        editButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const reminderItem = e.target.closest('.reminder-item');
                const eventName = reminderItem.querySelector('h4').textContent;
                
                // Here you would typically open a modal or form to edit the reminder
                alert(`Editing reminder for ${eventName}`);
            });
        });
    }

    const deleteButtons = document.querySelectorAll('.btn-delete');
    if (deleteButtons) {
        deleteButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const reminderItem = e.target.closest('.reminder-item');
                const eventName = reminderItem.querySelector('h4').textContent;
                
                const confirmDelete = confirm(`Are you sure you want to delete the reminder for ${eventName}?`);
                if (confirmDelete) {
                    reminderItem.style.opacity = '0.5';
                    setTimeout(() => {
                        reminderItem.remove();
                    }, 500);
                }
            });
        });
    }

    // Handle logout
    // const logoutBtn = document.getElementById('logoutBtn');
    // if (logoutBtn) {
    //     logoutBtn.addEventListener('click', function(e) {
    //         e.preventDefault();
            
    //         const confirmLogout = confirm('Are you sure you want to logout?');
    //         if (confirmLogout) {
    //             window.location.href = '../index.html';
    //         }
    //     });
    // }
});



