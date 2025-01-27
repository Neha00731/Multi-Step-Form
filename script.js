// Show the next step and hide the current step
function nextStep(currentStep) {
    let currentFormStep = document.getElementById('step-' + currentStep);
    let nextFormStep = document.getElementById('step-' + (currentStep + 1));

    // Validate the current step form before proceeding
    if (!validateStep(currentStep)) {
        return;
    }

    currentFormStep.style.display = 'none';
    nextFormStep.style.display = 'block';

    if (currentStep === 1) {
        document.getElementById('review-name').innerText = document.getElementById('name').value;
        document.getElementById('review-email').innerText = document.getElementById('email').value;
    }
    if (currentStep === 2) {
        document.getElementById('review-address').innerText = document.getElementById('address').value;
        document.getElementById('review-city').innerText = document.getElementById('city').value;
    }
}

// Show the previous step and hide the current step
function prevStep(currentStep) {
    let currentFormStep = document.getElementById('step-' + currentStep);
    let prevFormStep = document.getElementById('step-' + (currentStep - 1));

    currentFormStep.style.display = 'none';
    prevFormStep.style.display = 'block';
}

// Validate inputs for each step
function validateStep(step) {
    let isValid = true;

    if (step === 1) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name.trim() === '') {
            alert('Please enter your name.');
            isValid = false;
        } else if (email.trim() === '') {
            alert('Please enter your email.');
            isValid = false;
        }
    }

    if (step === 2) {
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;

        if (address.trim() === '') {
            alert('Please enter your address.');
            isValid = false;
        } else if (city.trim() === '') {
            alert('Please enter your city.');
            isValid = false;
        }
    }

    return isValid;
}
