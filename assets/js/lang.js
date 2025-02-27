import getLang from '../data/home.json' with { type: 'json' };

function loadText() {
    [...document.getElementsByClassName('lang')].forEach((element) => {
        const keys = element.dataset.lang.split('.');
        let innerText = getLang
        keys.forEach((key) => innerText = innerText[key]);
        element.innerHTML = innerText;
    });
};

function loadPrice() {
    [...document.getElementsByClassName('price')].forEach((element) => {
        const key = element.dataset.price;
        let priceValue = getLang.price[key].toFixed(2).split('.');
        element.innerHTML = `${priceValue[0]}€<span>${+priceValue[1] || ''}</span>`;
    });
}


addEventListener('load', () => {
    loadText();
    loadPrice();
});