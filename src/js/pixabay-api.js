// Функція для HTTP-запитів
const API_KEY = "43048239-bd17c0d5033bfd52479da7a86";
const BASE_URL = "https://pixabay.com/api";

export function getPhotos(q) {
    const params = {
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        key: API_KEY,
    // per_page: 12,
    // page,    
  };
  const options = new URLSearchParams(params);
  return fetch(`${BASE_URL}${options}`).then(res => res.json());
}