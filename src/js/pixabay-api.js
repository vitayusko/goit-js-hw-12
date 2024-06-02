const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44095628-d0027d9df3d6429662d87f006';

export function getPhotos(query) {
    const params = new URLSearchParams({
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: 1,
        per_page: 15,
        key: API_KEY
    });

    return fetch(`${BASE_URL}?${params.toString()}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        });
}