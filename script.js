
let numero = document.getElementById('num');
let sumar = document.getElementById('mas');
let restar = document.getElementById('menos');

if (numero.textContent.trim() === "") {
    numero.textContent = "0";
}

sumar.addEventListener("click", () => {
    let valor = parseInt(numero.textContent, 10);
    valor++;
    numero.textContent = valor;
});

restar.addEventListener("click", () => {
    let valor = parseInt(numero.textContent, 10);
    if (valor > 0) {
        valor--;
        numero.textContent = valor;
    }
});
document.addEventListener('DOMContentLoaded', () => 
    const picturesSection = document.querySelector('.pictures');
    const images = picturesSection.querySelectorAll('img');
    const mainImage = picturesSection.querySelector('.img1');
    images.forEach(img => {
        img.addEventListener('click', function() {
            if (img === mainImage) return;
            const tempSrc = mainImage.src;
            const tempAlt = mainImage.alt;

            mainImage.src = img.src;
            mainImage.alt = img.alt;

            img.src = tempSrc;
            img.alt = tempAlt;
        });
    });
});
