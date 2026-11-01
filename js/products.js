// Данные о товарах.
const products = {
  1: {
    title: 'Шкаф-купе «Верона»',
    description: 'Двухдверный шкаф-купе с зеркальной вставкой и двумя выдвижными ящиками.',
    price: '24 900 руб.',
    badge: 'Новинка',
    image: 'images/wardobe-verona.jpg',
    specs: [
      ['Материал корпуса', 'ЛДСП 16 мм'],
      ['Материал фасада', 'Зеркало + ЛДСП'],
      ['Габариты (В×Ш×Г)', '240 × 160 × 60 см'],
      ['Количество дверей', '2'],
      ['Гарантия', '24 месяца']
    ]
  },
  2: {
    title: 'Шкаф распашной «Классик»',
    description: 'Трёхдверный распашной шкаф с антресолью и штангой для одежды.',
    price: '18 500 руб.',
    badge: '',
    image: 'images/wardrobe-classic.jpg',
    specs: [
      ['Материал корпуса', 'ЛДСП 16 мм'],
      ['Материал фасада', 'ЛДСП'],
      ['Габариты (В×Ш×Г)', '220 × 140 × 55 см'],
      ['Количество дверей', '3'],
      ['Гарантия', '12 месяцев']
    ]
  },
  3: {
    title: 'Шкаф-купе «Модерн»',
    description: 'Трёхдверный шкаф-купе с LED-подсветкой и зеркальной фасадной панелью.',
    price: '32 000 руб.',
    badge: '',
    image: 'images/wardrobe-modern.jpg',
    specs: [
      ['Материал корпуса', 'МДФ 18 мм'],
      ['Материал фасада', 'Зеркало + МДФ'],
      ['Габариты (В×Ш×Г)', '250 × 180 × 65 см'],
      ['Количество дверей', '3'],
      ['Гарантия', '36 месяцев']
    ]
  },
  4: {
    title: 'Шкаф-пенал «Компакт»',
    description: 'Узкий шкаф-пенал для прихожей или небольшой комнаты.',
    price: '15 900 руб.',
    badge: 'Новинка',
    image: 'images/wardrobe-compact.jpg',
    specs: [
      ['Материал корпуса', 'ЛДСП 16 мм'],
      ['Материал фасада', 'ЛДСП'],
      ['Габариты (В×Ш×Г)', '210 × 60 × 40 см'],
      ['Количество дверей', '1'],
      ['Гарантия', '12 месяцев']
    ]
  },
  5: {
    title: 'Гардеробная система «Люкс»',
    description: 'Модульная гардеробная система с открытыми секциями, штангой и LED-подсветкой.',
    price: '45 000 руб.',
    badge: '',
    image: 'images/wardobe-lux.jpg',
    specs: [
      ['Материал корпуса', 'МДФ 18 мм'],
      ['Материал фасада', 'Открытые секции'],
      ['Габариты (В×Ш×Г)', '250 × 250 × 65 см'],
      ['Количество секций', '5'],
      ['Гарантия', '36 месяцев']
    ]
  }
};

// Читаем параметры из адресной строки.
const params = new URLSearchParams(window.location.search);

// Достаём id товара. Если его нет — берём "1" по умолчанию.
const id = params.get('id') || '1';

// Берём товар из объекта. Если такого id нет — берём первый.
const current = products[id] || products['1'];

// Меняем заголовок вкладки браузера.
document.title = current.title + ' — Учебный интернет-магазин';

// Обновляем хлебную крошку текущего товара.
const breadcrumbEl = document.querySelector('.breadcrumbs__current');
if (breadcrumbEl) {
  breadcrumbEl.textContent = current.title;
}

// Находим элементы на странице.
const titleEl = document.querySelector('.product__title');
const descriptionEl = document.querySelector('.product__description');
const priceEl = document.querySelector('.product__price');
const badgeEl = document.querySelector('.product__badge');
const imageEl = document.querySelector('.product__image');
const specsBodyEl = document.querySelector('.product__specs-body');

// Заполняем их данными текущего товара.
if (titleEl) {
  titleEl.textContent = current.title;
}

if (descriptionEl) {
  descriptionEl.textContent = current.description;
}

if (priceEl) {
  priceEl.textContent = 'Цена: ' + current.price;
}

if (imageEl) {
  imageEl.src = current.image;
  imageEl.alt = current.title;
}

if (badgeEl) {
  if (current.badge) {
    badgeEl.textContent = current.badge;
  } else {
    badgeEl.hidden = true;
  }
}

// Заполняем таблицу характеристик.
if (specsBodyEl && current.specs) {
  current.specs.forEach((row) => {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = row[0];

    const tdValue = document.createElement('td');
    tdValue.textContent = row[1];

    tr.appendChild(tdName);
    tr.appendChild(tdValue);
    specsBodyEl.appendChild(tr);
  });
}