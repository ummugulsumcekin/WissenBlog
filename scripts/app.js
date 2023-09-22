const blogCards = document.querySelectorAll(".blog-card");

blogCards.forEach((card) => {
    card.addEventListener("click", () => {
        // Örnek olarak her blog kartı farklı bir detay sayfasına yönlendiriyor.
        // Gerçek bağlantıları kendi projenize uygun şekilde güncelleyin.
        window.location.href = "blog1.html"; // Örneğin, tıklanan blogun bağlantısı
    });
});