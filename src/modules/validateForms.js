export const validate = () => {
  const userName = document.querySelectorAll(".form-control[name='fio']");
  const userPhone = document.querySelectorAll(".form-control[name='phone']");

  userName.forEach((elem) => {
    elem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яa-z]/gi, "");
    });
  });
  userPhone.forEach((elem) => {
    elem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d\+]/gi, "");
    });
  });
};
