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

const burger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');

function openNav(){
    if (headerNav.classList.contains('active__burger')){
        headerNav.classList.remove('active__burger');
    }else{
        headerNav.classList.add('active__burger');
    }
}
burger.addEventListener('click', openNav);

const headerItem = document.querySelectorAll('.header__item');
headerItem.forEach(i => {
    i.parentElement.addEventListener('click', (e) => {
        headerNav.classList.remove('active__burger');
    })
})
headerItem

//Jupiter Terminal
window.Jupiter.init({
    displayMode: "integrated",
    integratedTargetId: "integrated-terminal",
    endpoint: "https://api.devnet.solana.com", //https://api.mainnet-beta.solana.com
    formProps: {
        fixedOutputMint: true,
        swapMode: "ExactIn",
        initialOutputMint: "AgnHzGspNu7F3nFM4izuPt5g7m1URjVaTaFNgvqSXcjC",
    },
});
