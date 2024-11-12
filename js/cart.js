document.addEventListener("DOMContentLoaded", function () {
    let params = new URLSearchParams(location.search);
    let myParam = params.get('fname');

    let cream = document.querySelector('.cream');
    let serum = document.querySelector('.serum');
    let night = document.querySelector('.night');

    let creamUpsell = document.querySelector('.upsell-cream');
    let serumUpsell = document.querySelector('.upsell-serum');
    let nightUpsell = document.querySelector('.upsell-night');

    let total = document.querySelector('.total');
    let closeButtons = document.querySelectorAll('.close');

    function updateVisibility() {
        if (myParam === "cream") {
            cream.style.display = "flex";
            creamUpsell.style.display = "none";
            closeButtons[0].style.display = "block";
        } else if (myParam === "serum") {
            serum.style.display = "flex";
            serumUpsell.style.display = "none";
            closeButtons[1].style.display = "block";
        } else if (myParam === "night") {
            night.style.display = "flex";
            nightUpsell.style.display = "none";
            closeButtons[2].style.display = "block";
        }
        totalSum();
    }

    function totalSum() {
        let sum = 0;
        if (serum.style.display == "flex") {
            sum += parseFloat(serum.querySelector('.price').textContent.replace(',', '.'));
        }
        if (cream.style.display == "flex") {
            sum += parseFloat(cream.querySelector('.price').textContent.replace(',', '.'));
        }
        if (night.style.display == "flex") {
            sum += parseFloat(night.querySelector('.price').textContent.replace(',', '.'));
        }
        total.textContent = "EUR " + sum.toFixed(2);
    }

    function updateQueryString(itemName) {
        let params = new URLSearchParams(location.search);
        params.set('fname', itemName);
        history.replaceState(null, null, "?" + params.toString());
    }

    function addItem(item, upsell, itemName) {
        item.style.display = "flex";
        upsell.style.display = "none";
        updateQueryString(itemName);
        totalSum();
    }

    function deleteItem(item, upsell, queryKey) {
        upsell.style.display = "flex";
        item.style.display = "none";
        let params = new URLSearchParams(location.search);
        params.delete(queryKey);
        history.replaceState(null, null, "?" + params.toString());
        totalSum();
    }

    document.querySelectorAll('.upsell-cream button').forEach(button => button.addEventListener('click',
        () => addItem(cream, creamUpsell, 'cream')));
    document.querySelectorAll('.upsell-serum button').forEach(button => button.addEventListener('click',
        () => addItem(serum, serumUpsell, 'serum')));
    document.querySelectorAll('.upsell-night button').forEach(button => button.addEventListener('click',
        () => addItem(night, nightUpsell, 'night')));

    closeButtons[0].addEventListener('click', () => deleteItem(cream, creamUpsell, 'cream'));
    closeButtons[1].addEventListener('click', () => deleteItem(serum, serumUpsell, 'serum'));
    closeButtons[2].addEventListener('click', () => deleteItem(night, nightUpsell, 'night'));

    updateVisibility();
});