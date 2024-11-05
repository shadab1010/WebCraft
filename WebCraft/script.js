function showAlert() {
    alert("Thank you for your interest in StyloSite! We'll get back to you soon.");
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (you can expand this)
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Reset form
        document.querySelector('form').reset();
    } else {
        alert('Please fill in all fields.');
    }

    return false; // Prevents form submission for demonstration
}
