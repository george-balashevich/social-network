import { validateInput } from "./utils/input.js";
import { checkBothPasswords } from './utils/checkPassword.js';
function submitForm(formSelector, buttonSelector) {
    const form = document.getElementById(formSelector);
    const button = document.getElementById(buttonSelector);
    if (!form || !button) {
        console.log(form);
        console.error("Форма или кнопка не найдены!");
        return;
    }
    button.addEventListener('click', e => {
        e.preventDefault();
        const isLoginValid = validateInput('.input-login', '.error');
        const isEmailValid = validateInput('.input-email', '.email-error');
        const isPasswordValid = validateInput('.input-password', '.password-error');
        const isPasswordsMatch = checkBothPasswords('.input-password', '.input-repeated-password', '.repeated-error');
        if (isLoginValid && isEmailValid && isPasswordValid && isPasswordsMatch) {
            console.log("Форма успешно отправлена!");
            form.submit();
        }
        else {
            console.log("Форма содержит ошибки!");
        }
    });
}
export { submitForm };
