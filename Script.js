"use strict";

{
  const dateInput = document.querySelector(".dateInput");
  const numberInput = document.querySelector(".numberInput");
  const btnCheck = document.querySelector(".btn-check");
  const formConatiner = document.querySelector(".form");

  const resultContainer = document.querySelector(".result-container");
  const result = document.querySelector(".result");
  const closeResult = document.querySelector(".close-result");

  const privacyNote = setTimeout(() => {
    document.querySelector(".privacy-note-container").classList.add("show");
  }, 5000);

  function clickHandler(e) {
    e.preventDefault();

    if (!dateInput.value || !numberInput.value) {
      !dateInput.value
        ? alert("Please enter your Birth date ")
        : alert("Please enter your lucky number");
    } else if (numberInput.value < 0) {
      alert("Please enter postive lucky number");
    } else {
      let numberInputValue = parseInt(numberInput.value);
      const date = dateInput.value.split("-");
      const dateInputValue = date.reduce(
        (curr, accum) => parseInt(curr) + parseInt(accum),
        0
      );

      clearTimeout(privacyNote);
      formConatiner.style.display = "none";

      if (dateInputValue % numberInputValue === 0) {
        resultContainer.style.display = "block";
        result.innerText = `Congralutions, your Birth date is a lucky date. 🤩🍾`;
        resultContainer.style.borderColor = "green";
      } else {
        resultContainer.style.display = "block";
        result.innerText = "Oops!!, your Birth date is not a lucky date. 😱😱";
        resultContainer.style.borderColor = "red";
      }
    }
  }

  function closeResultHandler(e) {
    formConatiner.style.display = "flex";
    resultContainer.style.display = "none";
    dateInput.value = "";
    numberInput.value = "";
  }

  btnCheck.addEventListener("click", clickHandler);
  closeResult.addEventListener("click", closeResultHandler);
}
