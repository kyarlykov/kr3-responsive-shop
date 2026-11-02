// Получаем модальное окно по id.
const orderDialog = document.getElementById('order-dialog');

// Получаем все кнопки заказа в карточках товаров.
const orderButtons = document.querySelectorAll('.product-card__button');

// Получаем кнопку закрытия модального окна.
const closeDialogButton = document.getElementById('close-order-dialog');

// Получаем скрытое поле, в которое будет записан выбранный товар.
const selectedProductInput = document.getElementById('selected-product');

// Перебираем все кнопки «Заказать».
// Проверяем, что есть и кнопки, и модальное окно, и скрытое поле.
if (orderDialog && selectedProductInput) {
  orderButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Получаем название товара из data-атрибута.
      const productName = button.dataset.product;

      // Записываем название товара в скрытое поле формы.
      selectedProductInput.value = productName;

      // Открываем модальное окно.
      orderDialog.showModal();
    });
  });
}

// Закрываем модальное окно по кнопке «Закрыть».
// Проверяем, что и кнопка, и модальное окно существуют.
if (closeDialogButton && orderDialog) {
  closeDialogButton.addEventListener('click', () => {
    orderDialog.close();
  });
}

// Получаем форму заявки.
const orderForm = document.getElementById('order-form');

// Получаем сообщение об успешной отправке.
const successMessage = document.getElementById('success-message');

// Обрабатываем отправку формы.
// Проверяем, что форма существует (иначе обработчик не на что вешать).
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    // Отменяем стандартную отправку формы,
    // потому что backend пока не подключён.
    event.preventDefault();

    // Сбрасываем предыдущие признаки ошибок.
    const formElements = Array.from(orderForm.elements);

    formElements.forEach((element) => {
      if (element.willValidate) {
        element.removeAttribute('aria-invalid');
      }
    });

    // Проверяем встроенные HTML-ограничения формы.
    if (!orderForm.checkValidity()) {
      formElements.forEach((element) => {
        if (element.willValidate && !element.checkValidity()) {
          element.setAttribute('aria-invalid', 'true');
        }
      });

      // Показываем стандартные сообщения браузера.
      orderForm.reportValidity();
      return;
    }

    // Показываем сообщение об успешной отправке.
    if (successMessage) {
      successMessage.hidden = false;
    }

    // Очищаем форму.
    orderForm.reset();

    // Закрываем модальное окно.
    if (orderDialog) {
      orderDialog.close();
    }
  });

  // Автопрокрутка карусели в блоке .hero
const heroCarousel = document.querySelector('.hero__carousel');

if (heroCarousel) {
  let scrollInterval = setInterval(() => {
    // Получаем ширину одного слайда с учетом отступов (gap)
    const slide = heroCarousel.querySelector('.hero__slide');
    if (!slide) return;
    
    const slideWidth = slide.offsetWidth + 16; // 16px — это ваш gap из CSS
    
    // Проверяем, дошли ли мы до конца прокрутки
    if (heroCarousel.scrollLeft + heroCarousel.clientWidth >= heroCarousel.scrollWidth - 10) {
      // Если дошли до конца — возвращаемся в самое начало
      heroCarousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      // Иначе прокручиваем на один слайд вперед
      heroCarousel.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
  }, 3500); // 3500 мс = 3.5 секунды между переключениями

  // Опционально: останавливать автопрокрутку, когда пользователь наводит мышь на карусель
  heroCarousel.addEventListener('mouseenter', () => {
    clearInterval(scrollInterval);
  });

  // Возобновлять прокрутку, когда мышь убирается
  heroCarousel.addEventListener('mouseleave', () => {
    // Перезапуск интервала (можно оформить в отдельную функцию, но для простоты сработает заново при перезагрузке или можно оставить статичным)
  });
}
}