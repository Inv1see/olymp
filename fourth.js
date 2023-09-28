function generatePasswords() {
    const letters = ['Я', 'Н', 'А', 'Т', 'Ш', 'А'];
    const passwords = [];

    function generateCombinations(currentPassword, remainingLetters) {
        if (currentPassword.length === 6) { // Длина пароля равна 6 в нашем случае
            passwords.push(currentPassword);
            return;
        }

        for (let i = 0; i < remainingLetters.length; i++) {
            const updatedPassword = currentPassword + remainingLetters[i];
            const updatedRemainingLetters = remainingLetters.slice(0, i).concat(remainingLetters.slice(i + 1));
            generateCombinations(updatedPassword, updatedRemainingLetters);
        }
    }

    generateCombinations('', letters);
    return passwords;
}

const passwordsList = generatePasswords();
console.log(passwordsList.length); // 720