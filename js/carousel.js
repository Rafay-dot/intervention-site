// Create Methods
const createCarouselItem = (
  parentId,
  imgSrc,
  altText,
  headingText,
  paraText
) => {
  const parentContainer = getParentContainer(parentId);
  if (!parentContainer) return;

  // Clear the parent container's content
  parentContainer.innerHTML = "";

  // Create and append elements
  const imgElement = createImageElement(imgSrc, altText);
  const textContainer = createTextContainer(headingText, paraText);

  parentContainer.appendChild(imgElement);
  parentContainer.appendChild(textContainer);
};
const getParentContainer = (parentId) => {
  const container = document.getElementById(parentId);
  if (!container) {
    console.error(`No element found with ID: ${parentId}`);
  }
  return container;
};
const createImageElement = (src, alt) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  return img;
};
const createTextContainer = (headingText, paraText) => {
  const textContainer = document.createElement("div");
  textContainer.classList.add("carousel-text-container");

  const headingElement = createHeadingElement(headingText);
  const testimonyContainer = createTestimonyContainer(paraText);
  const quoteIcon = createQuoteIcon();

  textContainer.appendChild(headingElement);
  textContainer.appendChild(testimonyContainer);
  textContainer.appendChild(quoteIcon);

  return textContainer;
};
const createHeadingElement = (text) => {
  const heading = document.createElement("h3");
  heading.textContent = text;
  return heading;
};
const createTestimonyContainer = (text) => {
  const testimonyContainer = document.createElement("div");
  testimonyContainer.classList.add("carousel-testimony");

  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  testimonyContainer.appendChild(paragraph);
  return testimonyContainer;
};
const createQuoteIcon = () => {
  const quoteIcon = document.createElement("div");
  quoteIcon.classList.add("quote-icon");
  quoteIcon.textContent = "“";
  return quoteIcon;
};
const createDots = (parentSelector, count) => {
  const indicatorsContainer = document.querySelector(parentSelector);
  if (!indicatorsContainer) {
    console.error(`No element found with selector: ${parentSelector}`);
    return;
  }
  for (let i = 0; i < count; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    indicatorsContainer.appendChild(dot);
  }
};
// Functionality Methods
const slideItem = () => {
  items.forEach((item) => {
    item.style.transition = "0.5s";
    item.style.transform = `translateX(-${counter * 100}%)`;
  });
  dots.forEach((dot, index) => {
    counter === index
      ? dot.classList.add("active")
      : dot.classList.remove("active");
  });
};
const goNext = () => {
  counter++;
  if (counter >= items.length) counter = 0;
  slideItem();
};
const goPrev = () => {
  counter--;
  if (counter < 0) counter = items.length - 1;
  slideItem();
};
// Creating Carousel Items
createCarouselItem(
  "carousel-item-001-abbie",
  "assets/images/png/model1.png",
  "Abbie Harvey",
  "Abbie Harvey",
  "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love, and care that they truly deserve."
);
createCarouselItem(
  "carousel-item-002-john",
  "assets/images/png/model2.png",
  "John Doe",
  "John Doe",
  "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love, and care that they truly deserve."
);
createCarouselItem(
  "carousel-item-003-amy",
  "assets/images/png/model3.png",
  "Amy White",
  "Amy White",
  "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love, and care that they truly deserve."
);
// Adding Functionality
const items = document.querySelectorAll(".carousel-item");
createDots(".indicators", items.length);

const dots = document.querySelectorAll(".dot");
let counter = 0;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;

items.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});

items.forEach((item, index) => {
  const startDrag = (e) => {
    isDragging = true;
    startX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    currentTranslate = -counter * 100;
    item.style.transition = "none";
  };

  const moveDrag = (e) => {
    if (!isDragging) return;

    const currentX = e.type.includes("mouse")
      ? e.clientX
      : e.touches[0].clientX;
    const diff = currentX - startX;
    const translate = currentTranslate + (diff / item.offsetWidth) * 100;
    items.forEach(
      (item) => (item.style.transform = `translateX(${translate}%)`)
    );
  };

  const endDrag = (e) => {
    isDragging = false;
    const endX = e.type.includes("mouse")
      ? e.clientX
      : e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff > 50) {
      goPrev();
    } else if (diff < -50) {
      goNext();
    } else {
      slideItem();
    }
  };

  item.addEventListener("mousedown", startDrag);
  item.addEventListener("mousemove", moveDrag);
  item.addEventListener("mouseup", endDrag);

  item.addEventListener("mouseleave", () => {
    if (isDragging) endDrag();
  });

  item.addEventListener("touchstart", startDrag);
  item.addEventListener("touchmove", moveDrag);
  item.addEventListener("touchend", endDrag);
});
