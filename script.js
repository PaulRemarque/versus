// Tailwind script уже подключён
    function smoothScrollTo(sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    // Мобильное меню
    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }
    
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Простой слайдер акций
    let currentSlide = 0;
    const slidesContainer = document.getElementById('promo-slides');
    const totalSlides = 2;

    function showSlide(n) {
      currentSlide = (n + totalSlides) % totalSlides;
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    // Авто-прокрутка каждые 6 секунд
    setInterval(() => {
      nextSlide();
    }, 6000);

    // Функция покупки в WA
    function buyInWA(productName) {
      const text = `Здравствуйте! Хочу заказать: ${productName}. Есть в наличии?`;
      window.open(`https://wa.me/79890020295?text=${encodeURIComponent(text)}`, '_blank');
    }

    // Отправка формы (имитация)
    function sendForm() {
      const name = document.getElementById('name').value;
      if (!name) {
        alert('Пожалуйста, введите имя');
        return;
      }
      alert('✅ Сообщение отправлено! Менеджер свяжется с вами в ближайшее время.');
      document.getElementById('contact-form').reset();
    }

    // Закрытие мобильного меню при клике вне
    document.addEventListener('click', function(e) {
      const menu = document.getElementById('mobile-menu');
      const btn = document.getElementById('mobile-menu-btn');
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });