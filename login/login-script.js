let isLogin = true;

function toggleForm() {
    isLogin = !isLogin;
    const title = document.getElementById('formTitle');
    const btn = document.getElementById('mainBtn');
    const toggleText = document.getElementById('toggleText');
    const dynamicFields = document.getElementById('dynamicFields');
    const forgotLink = document.getElementById('forgotLink');

    if (!isLogin) {
        title.innerText = "Hesap Oluştur";
        btn.innerText = "Kayıt Ol";
        forgotLink.style.display = "none";
        toggleText.innerHTML = 'Zaten üye misin? <span onclick="toggleForm()">Giriş Yap</span>';
        dynamicFields.innerHTML = '<div class="input-group"><input type="text" placeholder="Adınız Soyadınız" id="name" required></div>';
    } else {
        title.innerText = "Hoş Geldiniz";
        btn.innerText = "Giriş Yap";
        forgotLink.style.display = "block";
        toggleText.innerHTML = 'Henüz hesabın yok mu? <span onclick="toggleForm()">Kayıt Ol</span>';
        dynamicFields.innerHTML = '';
    }
}

function handleAuth(event) {
    event.preventDefault();
    window.location.href = "../index/index.html";
}