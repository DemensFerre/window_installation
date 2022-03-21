export const sendData = ({ nameForm }) => {
  const form = document.querySelector(`form[name=${nameForm}]`);
  const loading = document.querySelector(".loading-wrap");
  const statusBlock = document.createElement("div");

  const successText = "Данные отправлены успешно";
  const errorText = "Ошибка отправки данных";
  const successBorder = "green";
  const errorBorder = "red";

  const validateForm = (list) => {
    let success = true;

    list.forEach((elem) => {
      if (elem.value === "") {
        elem.style.borderColor = errorBorder;
        success = false;
      } else {
        elem.style.borderColor = successBorder;
      }
    });

    return success;
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

  const submitForm = () => {
    const formInputs = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    loading.style.display = "block";
    form.append(statusBlock);

    const clearInput = () => {
      formInputs.forEach((elem) => {
        elem.value = "";
      });
    };

    const delStatusBlock = () => {
      setTimeout(() => {
        statusBlock.remove();
      }, 5000);
    };

    if (validateForm(formInputs)) {
      sendData(formBody)
        .then((data) => {
          loading.style.display = "none";
          statusBlock.textContent = successText;
          delStatusBlock();
          clearInput();
        })
        .catch((error) => {
          loading.style.display = "none";
          statusBlock.textContent = errorText;
        });
    } else {
      clearInput();
      loading.style.display = "none";
      statusBlock.textContent = errorText;
      delStatusBlock();
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму, нелюди!!");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
