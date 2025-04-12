// Set current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  
  if (navLinks.classList.contains('mobile-links')) {
    navLinks.classList.remove('mobile-links');
  } else {
    navLinks.classList.add('mobile-links');
  }
}

// Smooth scrolling for navigation
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
  const donationForm = document.getElementById('donationForm');
  const formContainer = document.getElementById('donationFormContainer');
  const thankYouMessage = document.getElementById('thankYouMessage');
  const submitBtn = document.getElementById('submitBtn');
  
  // Function to validate email format
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  // Function to validate phone number (simple validation)
  function validatePhone(phone) {
    return phone.length >= 7;
  }
  
  // Form submission handler
  donationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.style.display = 'none');
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const foodType = document.getElementById('foodType').value;
    const quantity = document.getElementById('quantity').value.trim();
    const pickupDate = document.getElementById('pickupDate').value;
    const address = document.getElementById('address').value.trim();
    
    // Validate form inputs
    let isValid = true;
    
    if (name.length < 2) {
      document.getElementById('nameError').textContent = 'Please enter your name';
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    }
    
    if (!validateEmail(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    }
    
    if (!validatePhone(phone)) {
      document.getElementById('phoneError').textContent = 'Please enter a valid phone number';
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
    }
    
    if (!foodType) {
      document.getElementById('foodTypeError').textContent = 'Please select a food type';
      document.getElementById('foodTypeError').style.display = 'block';
      isValid = false;
    }
    
    if (!quantity) {
      document.getElementById('quantityError').textContent = 'Please specify the quantity';
      document.getElementById('quantityError').style.display = 'block';
      isValid = false;
    }
    
    if (!pickupDate) {
      document.getElementById('pickupDateError').textContent = 'Please select a pickup date';
      document.getElementById('pickupDateError').style.display = 'block';
      isValid = false;
    }
    
    if (address.length < 5) {
      document.getElementById('addressError').textContent = 'Please enter your address';
      document.getElementById('addressError').style.display = 'block';
      isValid = false;
    }
    
    // If form is valid, submit it
    if (isValid) {
      // Show loading state
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;
      
      // Simulate form submission (in a real app, this would be an API call)
      setTimeout(function() {
        // Show thank you message
        formContainer.style.display = 'none';
        thankYouMessage.style.display = 'block';
        
        // Log form data to console (for demo purposes)
        console.log('Donation submitted:', {
          name,
          email,
          phone,
          foodType,
          quantity,
          pickupDate,
          address,
          notes: document.getElementById('notes').value.trim()
        });
      }, 1500);
    }
  });
});

// Reset form to submit another donation
function resetForm() {
  document.getElementById('donationForm').reset();
  document.getElementById('donationFormContainer').style.display = 'block';
  document.getElementById('thankYouMessage').style.display = 'none';
  document.getElementById('submitBtn').textContent = 'Submit Donation';
  document.getElementById('submitBtn').disabled = false;
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('mobile-links')) {
      navLinks.classList.remove('mobile-links');
    }
  });
});
