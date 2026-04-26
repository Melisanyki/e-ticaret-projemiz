console.log('Admin JS yüklendi!');

(function() {
    const role = localStorage.getItem('userRole');
    if (role !== 'admin') {
        alert('Bu sayfaya erişim yetkiniz yok!');
        window.location.href = '../login/login.html';
    }
})();

let products = [
    {id:1,name:'Pembe Güller',category:'gul',stock:25,price:450},
    {id:2,name:'Beyaz Asalet',category:'orkide',stock:12,price:650},
    {id:3,name:'Pembiş Güller',category:'gul',stock:38,price:280}
];

// Güvenli showSection
function showSection(section, element) {
    console.log('Menü:', section);
    
    try {
        // Sidebar aktif (güvenli)
        const sidebarItems = document.querySelectorAll('.sidebar li');
        sidebarItems.forEach(li => li.classList.remove('active'));
        if (element && element.classList) element.classList.add('active');
        
        // İçerik değiştir (güvenli)
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(sec => sec.classList.remove('active'));
        
        const targetSection = document.getElementById(section + '-section');
        if (targetSection) {
            targetSection.classList.add('active');
            if (section === 'products') renderProducts();
        }
    } catch (error) {
        console.error('Menü hatası:', error);
    }
}

// Ürün tablosu
function renderProducts() {
    const tbody = document.getElementById('products-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    products.forEach(product => {
        tbody.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td style="background:${product.category==='gul'?'#d63384':product.category==='orkide'?'#6f42c1':'#fd7e14'};color:white;padding:8px;border-radius:20px;">${product.category}</td>
                <td style="color:${product.stock>5?'green':'red'};font-weight:bold;">${product.stock}</td>
                <td>${product.price} TL</td>
                <td>
                    <button class="btn-add" onclick="addStock(${product.id})">+10</button>
                    <button class="btn-delete" onclick="removeStock(${product.id})">-5</button>
                </td>
            </tr>`;
    });
}

// Form fonksiyonları
function toggleAddProductForm() {
    const form = document.getElementById('add-product-form');
    if (form) {
        form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
    }
}

function addNewProduct(event) {
    event.preventDefault();
    const name = document.getElementById('new-product-name')?.value || '';
    const stock = parseInt(document.getElementById('new-product-stock')?.value) || 0;
    const price = parseInt(document.getElementById('new-product-price')?.value) || 0;
    const category = document.getElementById('new-product-category')?.value || 'gul';
    
    products.push({id:Date.now(),name,category,stock,price});
    renderProducts();
    toggleAddProductForm();
    event.target.reset();
    alert('✅ Eklendi!');
}

function addStock(id) {
    const product = products.find(p => p.id === id);
    if (product) product.stock += 10;
    renderProducts();
    alert('✅ +10');
}

function removeStock(id) {
    const product = products.find(p => p.id === id);
    if (product && product.stock >= 5) {
        product.stock -= 5;
        renderProducts();
        alert('✅ -5');
    }
}

function updateOrderStatus(button) {
    const statusCell = button.closest('tr').querySelector('.status-badge');
    const statuses = ['Hazırlanıyor', 'Kargoda', 'Teslim Edildi'];
    const currentIndex = statuses.indexOf(statusCell.textContent);
    const nextIndex = (currentIndex + 1) % 3;
    statusCell.textContent = statuses[nextIndex];
    alert('✅ ' + statuses[nextIndex]);
}

// Siteye git
function goToSite() {
    window.location.href = '../index.html';
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Admin hazır');
    renderProducts();
});