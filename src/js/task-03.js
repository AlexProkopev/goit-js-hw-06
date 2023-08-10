const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const addImages = (arr) => {
 
  const textTag = arr.map(
    ({ url, alt }) =>
      `<li><img alt="${alt}" src="${url}" width="400" height="300" ></li>`
  );
  gallery.insertAdjacentHTML("beforeend", textTag.join(" "));

  gallery.style.display = "flex";
  gallery.style.justifyContent = "space-between";
  gallery.style.listStyle = "none";
};

addImages(images);

