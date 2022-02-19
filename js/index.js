'use strict';

// const [firstNameInput] = document.querySelectorAll('input');

// firstNameInput.oninput = e => {
//   const FIRST_NAME_REG_EXP = /^[A-Z][a-z]{1,35}(-[A-Z][a-z]{1,35})?$/;
//   if (FIRST_NAME_REG_EXP.test(e.target.value)) {
//     e.target.classList.add('valid');
//     e.target.classList.remove('invalid');
//   } else {
//     e.target.classList.remove('valid');
//     e.target.classList.add('invalid');
//   }
// };

const regForm = document.querySelector('form');

regForm.onsubmit = e => {
  e.preventDefault();

  // const [firstNameInput] = document.querySelectorAll('input');
  // const FIRST_NAME_REG_EXP = /^[A-Z][a-z]{1,35}(-[A-Z][a-z]{1,35})?$/;
  // if (FIRST_NAME_REG_EXP.test(firstNameInput.value)) {
  //   firstNameInput.classList.add('valid');
  //   firstNameInput.classList.remove('invalid');
  // } else {
  //   firstNameInput.classList.remove('valid');
  //   firstNameInput.classList.add('invalid');
  // }

  const inputs = document.querySelectorAll('input');
  const INPUT_REGS = [
    /^[A-Z][a-z]{1,35}(-[A-Z][a-z]{1,35})?$/,
    /^[A-Z][a-z]{1,35}(-[A-Z][a-z]{1,35})?$/,
    /^\w{1,64}@\w{1,64}$/,
    /^\+380\d{9}$/,
    /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[0-9].*)(?=.*[!@#$%^&*()_].*).{8,24}$/,
    /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[0-9].*)(?=.*[!@#$%^&*()_].*).{8,24}$/,
  ];

  inputs.forEach((input, index) => {
    if (INPUT_REGS[index].test(input.value)) {
      input.classList.add('valid');
      input.classList.remove('invalid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  });
};
