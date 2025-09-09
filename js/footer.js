// Define the feature list data
const featureData = [
  {
    id: "feature-list-1",
    title: "Needs Assessment",
    description:
      "The Advocacy Evaluation Toolkit contains the instruments used to collect data for evaluating the Consumer Voices for Coverage program.",
  },
  {
    id: "feature-list-2",
    title: "Insurance Advocacy",
    description:
      "We are committed to advocating for appropriate coverage and payment policies.",
  },
  {
    id: "feature-list-3",
    title: "Treatment Planning & Placement",
    description:
      "Patients can better understand medical procedures, discharge instructions, etc.",
  },
];
// Function to create a single feature item
const createFeatureItem = ({ id, title, description }) => {
  const featureDiv = document.createElement("div");
  featureDiv.id = id;
  featureDiv.className = "feature-list";
  const img = document.createElement("img");
  img.className = "checkmark";
  img.src = "assets/images/svg/checkmark.svg";
  img.alt = "Checkmark";

  const textDiv = document.createElement("div");
  const strong = document.createElement("strong");
  strong.textContent = title;
  const paragraph = document.createElement("p");
  paragraph.textContent = description;

  // Append elements to their parents
  textDiv.appendChild(strong);
  textDiv.appendChild(paragraph);
  featureDiv.appendChild(img);
  featureDiv.appendChild(textDiv);

  return featureDiv;
};
// Add features to the DOM
const renderFeatureList = (containerSelector, features) => {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error(`Container with selector "${containerSelector}" not found.`);
    return;
  }
  features.forEach((feature) => {
    const featureItem = createFeatureItem(feature);
    container.appendChild(featureItem);
  });
};
// Render the feature lists
renderFeatureList(".feature-lists-section", featureData);

// Right - Video Section
const videoBorderDesktop = document.createElement("img");
videoBorderDesktop.src = "assets/images/svg/videoBorderDesktop.svg";
videoBorderDesktop.className = "video-border";

const videoBorderMobile = document.createElement("img");
videoBorderMobile.src = "assets/images/svg/videoBorderMobile.svg";
videoBorderMobile.className = "video-border-mobile";

// Right Section
const footerVideo = document.createElement("div");
footerVideo.className = "footer-video";

const videoWrapper = document.createElement("div");
videoWrapper.className = "video-wrapper";

const videoThumbnail = document.createElement("img");
videoThumbnail.src = "assets/images/png/footerBg.png";
videoThumbnail.alt = "Video Thumbnail";
videoThumbnail.className = "video-thumbnail";

const playButtonOuterCircle = document.createElement("div");
playButtonOuterCircle.className = "play-button-outer-circle";

const playButton = document.createElement("div");
playButton.className = "play-button";

const playIcon = document.createElement("img");
playIcon.className = "playIcon";
playIcon.src = "assets/images/svg/playIcon.svg";

playButton.appendChild(playIcon);
// add logo
const logo = document.createElement("img");
logo.src = "assets/images/png/logo.png";
logo.className = "logo-img";
videoWrapper.appendChild(logo);

videoWrapper.appendChild(videoBorderDesktop);
videoWrapper.appendChild(videoBorderMobile);

videoWrapper.appendChild(videoThumbnail);
playButtonOuterCircle.appendChild(playButton);
videoWrapper.appendChild(playButtonOuterCircle);
footerVideo.appendChild(videoWrapper);

footerContainer.appendChild(footerText);
footerContainer.appendChild(footerVideo);

footer.appendChild(footerContainer);

footer.appendChild(footerCopyrights);
