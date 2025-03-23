document.addEventListener('DOMContentLoaded', function() {
    // Handle reminder button clicks
    const reminderButtons = document.querySelectorAll('.btn-reminder');
    reminderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const eventCard = e.target.closest('.event-card');
            const eventName = eventCard.querySelector('h4').textContent;
            const eventDate = eventCard.querySelector('.event-date').textContent;
            
            // Here you would typically integrate with a notification API
            alert(`Reminder set for ${eventName} on ${eventDate}`);
        });
    });

    // Handle details button clicks
    const detailsButtons = document.querySelectorAll('.btn-details');
    detailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const eventCard = e.target.closest('.event-card');
            const eventName = eventCard.querySelector('h4').textContent;
            
            // Here you would typically navigate to the event details page
            alert(`Viewing details for ${eventName}`);
        });
    });

    // Handle logout
    // const logoutBtn = document.getElementById('logoutBtn');
    // logoutBtn.addEventListener('click', function(e) {
    //     e.preventDefault();
        
    //     // Here you would typically handle the logout logic
    //     const confirmLogout = confirm('Are you sure you want to logout?');
    //     if (confirmLogout) {
    //         window.location.href = '../index.html';
    //     }
    // });

    // Simulate real-time notifications (for demo purposes)
    function addNotification(message, time) {
        const notificationList = document.querySelector('.notification-list');
        const notification = document.createElement('div');
        notification.className = 'notification-item';
        notification.innerHTML = `
            <div class="notification-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            </div>
            <div class="notification-content">
                <p>${message}</p>
                <span class="notification-time">${time}</span>
            </div>
        `;
        notificationList.prepend(notification);
    }

    // Simulate a new notification every 30 seconds (for demo purposes)
    setInterval(() => {
        const messages = [
            'New event added in your area!',
            'Reminder: Update your profile information',
            'Event registration closing soon!'
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        addNotification(randomMessage, 'Just now');
    }, 30000);
});