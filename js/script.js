const mainLink = document.querySelector('.main__link')

function copyText() {
    const text = document.querySelector('.main__link a').innerText;

    navigator.clipboard.writeText(text)
    .then(() => {
        // Показываем плашку об успешном копировании
        const notification = document.getElementById("notification");
        notification.classList.add("active");
        // Скрываем плашку через 2 секунды
        setTimeout(() => {
            notification.classList.remove("active");
        }, 2000);
    })
    .catch(err => {
    console.error("Не удалось скопировать текст: ", err);
    });
}

mainLink.addEventListener('click', (e) => {
    e.preventDefault();
    copyText();
});