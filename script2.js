document.querySelector('.form-container').addEventListener('submit', function(event) {

    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value; // Updated to match the correct ID
    const phone = document.getElementById('phone').value;
    const Message = document.getElementById('message').value;

    const contactInfo = {
        name: name,
        email: email,
        phone: phone,
        Message:message,
    };

    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));

    document.querySelector('.form-container').reset();

    alert('Contact information submitted successfully!');
});