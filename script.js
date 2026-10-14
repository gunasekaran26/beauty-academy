/* ================================================================= /
/ NITHYA BEAUTY ACADEMY - INTERACTIVITY & BOOKING SYSTEM /
/ ================================================================= */

document.addEventListener('DOMContentLoaded', () => {
const modal = document.getElementById('bookingModal');
const bookTriggers = document.querySelectorAll('.book-trigger');
const closeBtn = document.querySelector('.close-btn');
const bookingForm = document.getElementById('courseBookingForm');

// Open Booking Modal
bookTriggers.forEach(btn => {
btn.addEventListener('click', (e) => {
e.preventDefault();
if(modal) modal.style.display = 'flex';
});
});

// Close Modal
if(closeBtn) {
closeBtn.addEventListener('click', () => {
modal.style.display = 'none';
});
}

window.addEventListener('click', (e) => {
if (e.target === modal) {
modal.style.display = 'none';
}
});

// Handle Form Submission & Generate Reference Code
if(bookingForm) {
bookingForm.addEventListener('submit', (e) => {
e.preventDefault();

const fullName = document.getElementById('fullName').value;
const selectedCourse = document.getElementById('selectedCourse').value;
const refCode = 'NBA-' + Math.floor(100000 + Math.random() * 900000);

alert(Thank you, ${fullName}! Your enrollment inquiry for ${selectedCourse} has been received.\n\nYour Booking Reference Code is: ${refCode}\n\nOur admissions team at West Tambaram will contact you shortly.);

bookingForm.reset();
modal.style.display = 'none';
});
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
const target = document.querySelector(this.getAttribute('href'));
if(target) {
e.preventDefault();
target.scrollIntoView({
behavior: 'smooth'
});
}
});
});
});