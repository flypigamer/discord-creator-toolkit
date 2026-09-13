const buttons = document.querySelectorAll(".tool-card button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const toolName = button.parentElement.querySelector("h3").textContent;

    alert(toolName + " is coming soon! 🚀");
  });
});
