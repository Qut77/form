document.addEventListener('DOMContentLoaded', () =>{
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subscribeButton = document.getElementById('subscibeButton');
    const successMessage = document.getElementById('succesMessage');

    const nameHint = document.getElementById('nameHint');
    const emailHint = document.getElementById('emailHint');
    const phoneHint = document.getElementById('phoneHint');

    function validateName() {
        const name = nameInput.value.trim();
        return /^[a-zA-Zа-яА-ЯёЁ]+$/.test(name);
    }
    function validateEmail() {
        const email = emailInput.value.trim();
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    function validatePhone() {
        const phone = phoneInput.value.trim();
        return /^\d{11}$/.test(phone);
    }

    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        subscribeButton.disabled = !(isNameValid && isEmailValid && isPhoneValid);
    }

    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    phoneInput.addEventListener('input', validateForm);

    nameInput.addEventListener('focus', () => nameHint.style.display = 'block');
    nameInput.addEventListener('blur', () => nameHint.style.display = 'none');
    emailInput.addEventListener('focus', () => emailHint.style.display = 'block');
    emailInput.addEventListener('blur', () => emailHint.style.display = 'none');
    phoneInput.addEventListener('focus', () => phoneHint.style.display = 'block');
    phoneInput.addEventListener('blur', () => phoneHint.style.display = 'none');

    document.getElementById('subsciptionForm').addEventListener('submit', (e) => {
        e.preventDefault();
        if (!subscribeButton.disabled) {
            successMessage.style.display = 'block';
            successMessage.textContent = 'Вы успешно подписались!';
            e.target.removeEventListener();
            validateForm();
        }
    });
});