import { submitForm } from './submitForm.js';
import { linkHandler } from "./state.js";
document.addEventListener("DOMContentLoaded", () => {
    submitForm('registrationForm', 'registrationBtn');
    linkHandler(".header-link");
});
