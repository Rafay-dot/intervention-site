const createTooltip = (parentId, message) => {
  // Create the tooltip container
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip-container-info";
  tooltip.textContent = message;
  return tooltip;
};

const removeTooltip = (parentId) => {
  const parent = document.getElementById(parentId);
  if (parent) parent.remove();
};

module.exports = { createTooltip, removeTooltip };
