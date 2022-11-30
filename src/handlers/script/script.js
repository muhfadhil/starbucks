const applyButton = document.getElementById("apply-button");
const chooseOption = document.querySelectorAll("#tables option")[0].value;
const select = document.getElementById("tables");

select.addEventListener("change", () => {
  const chooseOptionSelected = select.options[select.selectedIndex].value;
  if (chooseOptionSelected !== chooseOption) {
    applyButton.disabled = false;
  } else {
    applyButton.disabled = true;
  }
});
