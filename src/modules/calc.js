export const calc = () => {
  const calcBlock = document.getElementById("calc__form");
  const calcType = document.getElementById("calc-type");
  const calcTypeMaterial = document.getElementById("calc-type-material");
  const calcInput = document.getElementById("calc-input");
  const calcTotal = document.getElementById("calc-total");

  const formBody = {};

  let calcTimeout;

  if (!calcBlock) {
    return;
  }

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcTypeMaterialValue =
      +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
    const calcInputValue = +calcInput.value;
    const formData = new FormData(calcBlock);

    let totalPtice = 0;

    if (calcTypeValue !== 0 && calcTypeMaterialValue !== 0) {
      totalPtice = Math.floor(
        calcTypeValue * calcTypeMaterialValue * calcInputValue
      );

      formData.forEach((key, val) => {
        formBody[val] = +key;
      });

      formBody["calc-total"] = totalPtice;
    } else {
      totalPtice = 0;
    }

    calcTotal.value = totalPtice;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
  };

  calcBlock.addEventListener("input", async () => {
    countCalc();
    clearTimeout(calcTimeout);
    calcTimeout = setTimeout(() => {
      sendData(formBody);
    }, 5000);
  });
};
