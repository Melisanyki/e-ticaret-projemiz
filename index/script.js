function filterData(cat, btn) {
    let currentActive = document.querySelector('.cat-btn.active');
    if(currentActive) currentActive.classList.remove('active');
    btn.classList.add('active');

    let items = document.querySelectorAll('.product-card');
    items.forEach(item => {
        if (cat === 'all') {
            item.classList.remove('hidden');
        } else {
            item.classList.contains(cat) ? item.classList.remove('hidden') : item.classList.add('hidden');
        }
    });
}

function searchProducts() {
    let input = document.getElementById('product-search').value.toLowerCase();
    let cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        let title = card.querySelector('h3').innerText.toLowerCase();
        
        if (title.includes(input)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

let sepet = [];
let toplamFiyat = 0;

function buy(ad, fiyat) {
    sepet.push({ad, fiyat});
    toplamFiyat += fiyat;
    updateCartUI();
    alert(ad + " sepete eklendi!");
}

function updateCartUI() {
    document.getElementById('cart-btn').innerText = "Sepetim (" + sepet.length + ")";
    
    let listHtml = "";
    sepet.forEach((item, index) => {
        listHtml += `<div style="display:flex; justify-content:space-between; margin-bottom:5px; border-bottom:1px solid #eee; padding-bottom:5px;">
                        <span>${item.ad}</span>
                        <span>${item.fiyat} TL</span>
                     </div>`;
    });
    
    if(sepet.length > 0) {
        document.getElementById('cartList').innerHTML = listHtml;
    }
    document.getElementById('total-price').innerText = "Toplam: " + toplamFiyat + " TL";
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    const overlay = document.getElementById('overlay');
    const isVisible = modal.style.display === 'block';
    
    modal.style.display = isVisible ? 'none' : 'block';
    overlay.style.display = isVisible ? 'none' : 'block';
}