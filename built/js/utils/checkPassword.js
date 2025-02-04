function checkBothPasswords(passwordSelector, repeatedPasswordSelector, errorSelector) {
    const password = document.querySelector(passwordSelector);
    const repeatedPassword = document.querySelector(repeatedPasswordSelector);
    const errorText = document.querySelector(errorSelector);
    if (!errorText || !password || !repeatedPassword)
        return false;
    if (password.value.trim() === repeatedPassword.value.trim()) {
        errorText.innerText = '';
        return true;
    }
    else {
        errorText.innerText = 'Пароли не совпадают';
        return false;
    }
}
export { checkBothPasswords };
