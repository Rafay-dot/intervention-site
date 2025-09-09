const button = document.getElementById("cta-primary-btn");
button.addEventListener("mousedown", function () {
  this.style.backgroundColor = "#35BB9C";
});

button.addEventListener("mouseup", function () {
  this.style.backgroundColor = "#5bc8af";
});

document.getElementById("cta-primary-btn").addEventListener("click", () => {
  // Get all input and select elements
  const inputs = document.querySelectorAll("input[required], select[required]");

  let allFieldsFilled = true;

  let firstEmptyInput = null;

  for (const input of inputs) {
    if (input.value.trim() === "") {
      firstEmptyInput = input;
      break;
    }
  }
  if (firstEmptyInput) {
    allFieldsFilled = false;
    const formGroup = firstEmptyInput.closest(".form-group");
    const tooltip = createTooltip(
      formGroup.id,
      "This field can't be empty. Please fill it in."
    );
    const formGroupWidth = formGroup.offsetWidth;
    tooltip.style.width = `${formGroupWidth}px`;
    formGroup.appendChild(tooltip);

    // Add error classes
    const fieldset = formGroup.querySelector("fieldset");
    const legend = formGroup.querySelector("legend");
    fieldset.classList.add("error-container");
    legend.classList.add("error-label-state");
  }

  // If all fields are filled, redirect to the Thank You page
  if (allFieldsFilled) {
    window.location.href = "thankyou.html"; // Redirect to Thank You page
  }
});
