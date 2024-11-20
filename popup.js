// Select buttons and popup wrappers
const buttons = document.querySelectorAll("button");
const popups = document.querySelectorAll(".Wrapper");
const links = document.querySelectorAll(".popupContent a");

// Show the popup
function showPopup(popup) {
  popup.style.display = "flex";
}

// Hide the popup
function hidePopup(popup) {
  popup.style.display = "none";
  popup.querySelector(".popupContent").innerHTML = ""; // Clear content
}

// Add click events to buttons and close icons
buttons.forEach((button, index) => {
  button.addEventListener("click", () => showPopup(popups[index]));
});

popups.forEach((popup) => {
  const closeButton = popup.querySelector(".popupClose");
  closeButton.addEventListener("click", () => hidePopup(popup));
});

// Embed YouTube video when clicking the link
links.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const videoUrl = link.href.replace("watch?v=", "embed/");

    // Insert iframe without overwriting close button
    const popupContent = popups[index].querySelector(".popupContent");
    popupContent.innerHTML = `
      <iframe src="${videoUrl}" allowfullscreen></iframe>
    `;

    showPopup(popups[index]);
  });
});

// Close popup when clicking outside of it
popups.forEach((popup) => {
  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("Wrapper")) {
      hidePopup(popup);
    }
  });
});
