import { getPhotos } from "./js/pixabay-api";
// проверка работы апи
getPhotos('nature')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));