const password = document.querySelector(`#password`);
const passwordConfirm = document.querySelector(`#passwordConfirm`);
const pwstyle = document.querySelectorAll(`.pw`);
const submitBtn = document.querySelector(`.submit`);

password.addEventListener(`input`, function (e) {
  if (passwordConfirm.value === "") {
    return;
  }
  if (password.value !== passwordConfirm.value) {
    password.classList.add(`error`);
    passwordConfirm.classList.add(`error`);
    pwstyle.forEach((p) => p.classList.remove(`hidden`));
    submitBtn.setAttribute(`disabled`, true);
  }
  if (password.value === passwordConfirm.value) {
    password.classList.remove(`error`);
    passwordConfirm.classList.remove(`error`);
    pwstyle.forEach((p) => p.classList.add(`hidden`));
    submitBtn.removeAttribute(`disabled`);
  }
});

passwordConfirm.addEventListener(`input`, function (e) {
  if (password.value === "") {
    return;
  }
  if (password.value !== passwordConfirm.value) {
    password.classList.add(`error`);
    passwordConfirm.classList.add(`error`);
    pwstyle.forEach((p) => p.classList.remove(`hidden`));
    submitBtn.setAttribute(`disabled`, true);
  }
  if (password.value === passwordConfirm.value) {
    password.classList.remove(`error`);
    passwordConfirm.classList.remove(`error`);
    pwstyle.forEach((p) => p.classList.add(`hidden`));
    submitBtn.removeAttribute(`disabled`);
  }
});
