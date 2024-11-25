document.querySelectorAll('.tab-link').forEach(button => {
    button.addEventListener('click', () => {
      const tabs = button.parentElement.parentElement;
      const target = button.dataset.tab;
  
      // Убираем класс active у всех кнопок
      tabs.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
      // Убираем класс active у всех табов
      tabs.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
      // Активируем текущую кнопку и контент
      button.classList.add('active');
      tabs.querySelector(`#${target}`).classList.add('active');
    });
  });

  document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');

    // Переключаем класс active
    item.classList.toggle('active');

    // Закрываем другие аккордеоны
    document.querySelectorAll('.accordion-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
  });
});
