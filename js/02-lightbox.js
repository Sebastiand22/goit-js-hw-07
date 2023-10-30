import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");

// Itereaza prin fiecare obiect din array-ul galleryItems
galleryItems.forEach((item) => {
  const galleryListItem = document.createElement("li"); //creaza un element
  galleryListItem.classList.add("gallery__item"); //adauga clasa
  // Adaugam continutul HTML
  galleryListItem.innerHTML = `
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;
  galleryContainer.append(galleryListItem); //Adaugam elementul <li> la sfarsitul listei <ul>
});

galleryContainer.addEventListener("click", preventDefaultClick);

function preventDefaultClick(e) {
  e.preventDefault();
}

// initializeaza libraria SimpleLightbox pentru toate linkurile
const galleryLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt", // utilizeaza textul din atributul alt al img
  captionDelay: 250, // seteaza intarziere afisarii subtitlului
});

console.log(galleryLightbox);