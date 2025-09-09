// Select the elements
const videoWrapper = document.querySelector(".video-wrapper");
const videoPopupHTML = `
  <div id="video-popup" class="video-popup">
    <div class="video-popup-content">
      <span id="close-video" class="close-btn">&times;</span>
      <video id="video-player" class="video-player" controls>
        <source src="assets/video/footerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
`;

videoWrapper.addEventListener("click", () => {
  // Add the video popup to the DOM
  document.body.insertAdjacentHTML("beforeend", videoPopupHTML);

  const videoPopup = document.getElementById("video-popup");
  const videoPlayer = document.getElementById("video-player");
  const closeBtn = document.getElementById("close-video");

  // Show the popup
  videoPopup.style.display = "block";
  videoPlayer.play();

  closeBtn.addEventListener("click", () => {
    videoPopup.style.display = "none";
    videoPlayer.pause();
    videoPopup.remove();
  });

  window.addEventListener("click", (event) => {
    if (event.target === videoPopup) {
      videoPopup.style.display = "none";
      videoPlayer.pause();
      videoPopup.remove();
    }
  });
});
