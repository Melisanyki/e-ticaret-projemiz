function showSection(section) {
    const title = document.getElementById('page-title');
    if(section === 'products') {
        title.innerText = "Ürün Listesi";
        // Burada ürünler tablosunu gösterebiliriz (simülasyon)
    } else {
        title.innerText = "Sipariş Yönetimi";
    }
}