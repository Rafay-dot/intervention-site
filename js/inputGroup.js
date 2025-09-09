// Tooltip
const createTooltip = (parentId, message) => {
  // Create the tooltip container
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip-container-error";

  const para = document.createElement("p");
  para.className = "tooltip-text";
  para.textContent = message;

  tooltip.appendChild(para);

  setTimeout(() => {
    tooltip.remove();
  }, 2000);

  return tooltip;
};
const removeTooltip = (parentId) => {
  const parent = document.getElementById(parentId);
  if (parent) parent.remove();
};
// Create a fieldset with a legend
const createFieldset = (id, labelText) => {
  const fieldset = document.createElement("fieldset");
  fieldset.classList.add("default-container");

  const legend = document.createElement("legend");
  legend.htmlFor = `${id}-input`;
  legend.textContent = labelText;
  legend.classList.add("default-label-state");

  fieldset.appendChild(legend);
  return { fieldset, legend };
};
// Create a form group container
const createFormGroupContainer = (formGroupId) => {
  let formGroup;
  if (formGroupId) {
    formGroup = document.getElementById(formGroupId);
  } else {
    formGroup = document.createElement("div");
  }
  formGroup.classList.add("form-group");
  return formGroup;
};
// Create an input element
const createInputElement = (id, type, required) => {
  const input = document.createElement("input");
  input.type = type;
  input.id = `${id}-input`;
  input.autocomplete = "off";
  if (required) input.required = true;
  return input;
};
// Main function to create the input form group
const createInputFormGroup = (
  id,
  labelText,
  formGroupId = null,
  type = "text",
  required = true
) => {
  const formGroup = createFormGroupContainer(formGroupId);

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");

  const input = createInputElement(id, type, required);
  const { fieldset, legend } = createFieldset(id, labelText);

  input.addEventListener("focus", () => {
    // fieldset classes
    fieldset.classList.remove("default-container", "error-container");
    fieldset.classList.add("interacted-container");
    // legend classes
    legend.classList.remove("default-label-state", "error-label-state");
    legend.classList.add("interactive-label-state");
  });

  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      const tooltip = createTooltip(
        formGroupId,
        "This field can't be empty. Please fill it in."
      );
      const formGroupWidth = formGroup.offsetWidth;
      tooltip.style.width = `${formGroupWidth}px`;
      formGroup.appendChild(tooltip);
      // fieldset classes
      fieldset.classList.remove("interacted-container");
      fieldset.classList.add("error-container");
      // legend classes
      legend.classList.remove("interactive-label-state");
      legend.classList.add("error-label-state");
    } else {
      removeTooltip(formGroupId);
      // fieldset classes
      fieldset.classList.add("interacted-container");
      fieldset.classList.remove("error-container");
      // legend classes
      legend.classList.add("interactive-label-state");
      legend.classList.remove("error-label-state");
    }
  });

  inputContainer.appendChild(input);

  formGroup.appendChild(inputContainer);
  formGroup.appendChild(fieldset);

  return formGroup;
};
// Create a select element
const createSelectElement = (id, options, required = true) => {
  // Create the select element
  const select = document.createElement("select");
  select.id = `${id}-select`;
  select.setAttribute("autocomplete", "off");
  if (required) select.required = true;
  // Create and append the placeholder option
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.disabled = true; // Make this option unselectable
  placeholder.selected = true; // Make this option selected by default
  select.appendChild(placeholder);
  // Add the provided options to the select element
  options.forEach((optionText) => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    select.appendChild(option);
  });
  return select;
};
const createSelectFormGroup = (
  id,
  labelText,
  formGroupId = "",
  options = [],
  required = true
) => {
  const formGroup = createFormGroupContainer(formGroupId);

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");

  // Create the select element
  const select = createSelectElement("select-container", options, required, "");

  select.addEventListener("focus", () => {
    // fieldset classes
    fieldset.classList.remove("default-container", "error-container");
    fieldset.classList.add("interacted-container");
    // legend classes
    legend.classList.remove("default-label-state", "error-label-state");
    legend.classList.add("interactive-label-state");
  });

  select.addEventListener("blur", () => {
    if (select.value.trim() === "") {
      const tooltip = createTooltip(
        formGroupId,
        "This field can't be empty. Please fill it in."
      );
      const formGroupWidth = formGroup.offsetWidth;
      tooltip.style.width = `${formGroupWidth}px`;
      formGroup.appendChild(tooltip);
      // fieldset classes
      fieldset.classList.remove("interacted-container");
      fieldset.classList.add("error-container");
      // legend classes
      legend.classList.remove("interactive-label-state");
      legend.classList.add("error-label-state");
    } else {
      // fieldset classes
      fieldset.classList.add("interacted-container");
      fieldset.classList.remove("error-container");
      // legend classes
      legend.classList.add("interactive-label-state");
      legend.classList.remove("error-label-state");
    }
  });

  inputContainer.appendChild(select);

  const { fieldset, legend } = createFieldset(id, labelText);

  formGroup.appendChild(inputContainer);
  formGroup.appendChild(fieldset);

  return formGroup;
};

const createFormRow = (id, ...formGroups) => {
  let formRow;

  if (id) formRow = document.getElementById(id);
  else formRow = document.createElement("div");

  formRow.classList.add("form-row");

  formGroups.forEach((group) => {
    formRow.appendChild(group);
  });

  return formRow;
};

createFormRow(
  "name-input-form-row",
  createInputFormGroup("firstname", "First Name"),
  createInputFormGroup("lastname", "Last Name")
);

createFormRow(
  "work-input-form-row",
  createInputFormGroup("email", "Business Email", null, "email"),
  createInputFormGroup("company", "Company")
);

createSelectFormGroup("country", "Country", "country-select-form-group", [
  "United States",
  "Canada",
  "Germany",
  "Australia",
  "Pakistan",
]);
