// import axios from "axios";
// axios.defaults.baseURL = 'https://pixabay.com';

// // const BASE_URL = 'https://pixabay.com/api/';
// const END_POINT = '/api/';
// const API_KEY = '44095628-d0027d9df3d6429662d87f006';

// export const getPhotos = query => {
// return axios.get(`${END_POINT}`, {
//     params: {
//         q: query,
//         image_type: "photo",
//         orientation: "horizontal",
//         safesearch: true,
//         page: 1,
//         per_page: 15,
//         key: API_KEY
//     }
//   })    
// }



import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44095628-d0027d9df3d6429662d87f006';

export const getPhotos = (query, page) => {
  return axios.get(BASE_URL, {
    params: {
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: page,
      per_page: 15,
      key: API_KEY
    }
  });
};



















// FETCH
// export function getPhotos(query) {
//     const params = new URLSearchParams({
//         q: query,
//         image_type: "photo",
//         orientation: "horizontal",
//         safesearch: true,
//         page: 1,
//         per_page: 15,
//         key: API_KEY
//     });

//     return fetch(`${BASE_URL}?${params.toString()}`)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error(res.status);
//             }
//             return res.json();
//         });
// }