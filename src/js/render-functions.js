// Функції для відображення елементів інтерфейсу

export function createMarkup(arr) {
  return arr
    .map(
      item =>
        `<li class="gallery__item">
        <a class="gallery-link" href="${item.largeImageURL}">
        <img src="${item.webformatURL}" data-source="${item.largeImageURL}" alt="${item.tags}">
        </a>
       </li>`
    )
    .join('');
}
