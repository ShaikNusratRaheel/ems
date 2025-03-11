// // DOM Elements
// const navLinks = document.querySelectorAll('.nav-link');
// const pages = document.querySelectorAll('.page');

// // Event Listeners
// navLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
        
//         // Remove active class from all links and pages
//         navLinks.forEach(l => l.classList.remove('active'));
//         pages.forEach(p => p.classList.remove('active'));
        
//         // Add active class to clicked link and corresponding page
//         link.classList.add('active');
//         const pageId = link.dataset.page;
//         document.getElementById(pageId).classList.add('active');
//     });
// });

// // Event Form Handler
// const eventForm = document.querySelector('.event-form');
// if (eventForm) {
//     eventForm.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         // Get form data
//         const formData = {
//             title: document.getElementById('eventTitle').value,
//             description: document.getElementById('eventDescription').value,
//             date: document.getElementById('eventDate').value,
//             time: document.getElementById('eventTime').value,
//             location: document.getElementById('eventLocation').value,
//             capacity: document.getElementById('eventCapacity').value
//         };
        
//         // Here you would typically send this data to your backend
//         console.log('New Event:', formData);
        
//         // Reset form
//         eventForm.reset();
//         alert('Event created successfully!');
//     });
// }

// // Search Functionality
// const searchInputs = document.querySelectorAll('.search-input');
// searchInputs.forEach(input => {
//     input.addEventListener('input', (e) => {
//         const searchTerm = e.target.value.toLowerCase();
//         const table = input.closest('.page').querySelector('table tbody');
//         const rows = table.getElementsByTagName('tr');

//         Array.from(rows).forEach(row => {
//             const text = row.textContent.toLowerCase();
//             row.style.display = text.includes(searchTerm) ? '' : 'none';
//         });
//     });
// });

// // Event Status Filter
// const filterSelect = document.querySelector('.filter-select');
// if (filterSelect) {
//     filterSelect.addEventListener('change', (e) => {
//         const filterValue = e.target.value;
//         const rows = document.querySelectorAll('.events-table tbody tr');

//         rows.forEach(row => {
//             const status = row.querySelector('.status').textContent.toLowerCase();
//             if (filterValue === 'all' || status === filterValue) {
//                 row.style.display = '';
//             } else {
//                 row.style.display = 'none';
//             }
//         });
//     });
// }

// // Delete Event Handler
// const deleteButtons = document.querySelectorAll('.btn-icon.delete');
// deleteButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         if (confirm('Are you sure you want to delete this event?')) {
//             // Here you would typically send a delete request to your backend
//             const row = button.closest('tr');
//             row.remove();
//         }
//     });
// });

// // Initialize dashboard with some mock data
// function initializeDashboard() {
//     // Add any initialization logic here
//     console.log('Dashboard initialized');
// }

// // Run initialization
// initializeDashboard();

// // Check authentication
// function checkAuth() {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     if (!isLoggedIn) {
//         window.location.href = '../login.html';
//     }
// }

// // Logout functionality
// document.getElementById('logoutBtn').addEventListener('click', (e) => {
//     e.preventDefault();
//     localStorage.removeItem('isLoggedIn');
//     window.location.href = '../index.html';
// });

// // Initialize dashboard
// function initializeDashboard() {
//     checkAuth();
//     console.log('Dashboard initialized');
// }

// // Run initialization
// initializeDashboard();