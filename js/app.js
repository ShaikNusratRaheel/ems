// Event data storage
let events = [
    {
        id: 1,
        title: 'Tech Conference 2024',
        description: 'Join us for the biggest tech conference of the year',
        date: '2024-04-15',
        time: '09:00',
        location: 'Convention Center',
        capacity: 200,
        registered: 150,
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80'
    },
    {
        id: 2,
        title: 'Music Festival 2024',
        description: 'Experience the best music festival of the summer',
        date: '2024-07-20',
        time: '14:00',
        location: 'Central Park',
        capacity: 500,
        registered: 350,
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80'
    }
];

// DOM Elements
const eventsContainer = document.getElementById('eventsContainer');
const modal = document.getElementById('eventModal');
const closeBtn = document.querySelector('.close');
const eventForm = document.getElementById('eventForm');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Event Listeners
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});
eventForm.addEventListener('submit', handleFormSubmit);
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Initialize
renderEvents();

// Functions
function renderEvents() {
    eventsContainer.innerHTML = events.map(event => `
        <div class="event-card">
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-details">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-info">📅 ${formatDate(event.date)} at ${event.time}</p>
                <p class="event-info">📍 ${event.location}</p>
                <p class="event-description">${event.description}</p>
                <div class="capacity-info">
                    <span>Capacity: ${event.registered}/${event.capacity}</span>
                    <span>${Math.round((event.registered/event.capacity) * 100)}% Full</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="width: ${(event.registered/event.capacity) * 100}%"></div>
                </div>
                ${event.registered < event.capacity 
                    ? `<button class="btn-primary" onclick="registerForEvent(${event.id})">Register Now</button>`
                    : '<button class="btn-primary" disabled style="background-color: #9ca3af;">Fully Booked</button>'
                }
            </div>
        </div>
    `).join('');
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const newEvent = {
        id: Date.now(),
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        location: document.getElementById('location').value,
        capacity: parseInt(document.getElementById('capacity').value),
        registered: 0,
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80'
    };

    events.push(newEvent);
    renderEvents();
    modal.style.display = 'none';
    eventForm.reset();
}

function registerForEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event && event.registered < event.capacity) {
        event.registered++;
        renderEvents();
    }
}

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}