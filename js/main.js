const API_KEY = '44348524-eb6f63621403a6d7117da6424';
const PER_PAGE = 12;
let currentPage = 1;

document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    loadMoreBtn.addEventListener('click', loadMoreImages);
    loadMoreImages(); // Load initial set of images
});

async function fetchImages(page) {
    const url = `https://pixabay.com/api/?key=${API_KEY}&editors_choice=true&per_page=${PER_PAGE}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.hits;
}

function renderImages(images) {
    const gallery = document.getElementById('gallery');
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;
        gallery.appendChild(imgElement);
    });
}

async function loadMoreImages() {
    const images = await fetchImages(currentPage);
    renderImages(images);
    currentPage++;
}
async function loadMoreImages() {
    const images = await fetchImages(currentPage);
    renderImages(images);
    currentPage++;
    sessionStorage.setItem('currentPage', currentPage);
}

document.addEventListener('DOMContentLoaded', () => {
    currentPage = parseInt(sessionStorage.getItem('currentPage')) || 1;
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    loadMoreBtn.addEventListener('click', loadMoreImages);
    loadMoreImages(); // Load initial set of images
});