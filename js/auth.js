// DOM Elements
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Toggle mobile navigation
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tab switching functionality
authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and forms
        authTabs.forEach(t => t.classList.remove('active'));
        authForms.forEach(f => f.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding form
        tab.classList.add('active');
        const formId = `${tab.dataset.tab}Form`;
        document.getElementById(formId).classList.add('active');
    });
});

// Form submission handling
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Here you would typically make an API call to authenticate
    console.log('Login attempt:', { email, password });
    
    // For demo purposes, simulate successful login
    alert('Login successful!');
    
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Basic validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Here you would typically make an API call to register the user
    console.log('Signup attempt:', { name, email, password });
    
    // For demo purposes, simulate successful registration
    alert('Registration successful! Please login.');
    
    // Switch to login tab
    authTabs[0].click();
    signupForm.reset();
});