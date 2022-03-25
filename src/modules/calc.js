export const calc = () => {
  const calcBlock = document.getElementById("calc__form");
  const calcType = document.getElementById("calc-type");
  const calcTypeMaterial = document.getElementById("calc-type-material");
  const calcInput = document.getElementById("calc-input");
  const calcTotal = document.getElementById("calc-total");

  if (!calcBlock) {
    return;
  }

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcTypeMaterialValue =
      +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
    const calcInputValue = +calcInput.value;

    let totalPtice = 0;

    if (calcTypeValue !== 0 && calcTypeMaterialValue !== 0) {
      totalPtice = Math.floor(
        calcTypeValue * calcTypeMaterialValue * calcInputValue
      );
    } else {
      totalPtice = 0;
    }
    calcTotal.value = totalPtice;
  };

  calcBlock.addEventListener("input", () => {
    countCalc();
  });
};
