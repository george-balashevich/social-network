function checkBothPasswords(passwordSelector, repeatedPasswordSelector, errorSelector) {
    const password = document.querySelector(passwordSelector).value.trim();
    const repeatedPassword = document.querySelector(repeatedPasswordSelector).value.trim();
    const errorText = document.querySelector(errorSelector);
    if (!errorText)
        return false;
    if (password === repeatedPassword) {
        errorText.innerText = '';
        return true;
    }
    else {
        errorText.innerText = 'Пароли не совпадают';
        return false;
    }
}
export { checkBothPasswords };
