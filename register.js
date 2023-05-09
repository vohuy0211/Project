const form = document.querySelector('#form-register')

const inputElement = document.querySelector("#form-register");
console.log(inputElement);

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const emailValue = document.querySelector('#email-input').value.trim().toLowerCase();
  const usersNameValue = document.querySelector('#userName-input').value;
  const passwordValue = document.querySelector('#password-input').value;
  const repeaptPasswordValue = document.querySelector('#repeapt-password-input').value;

  // function getValueInput() {
  //   const inputElement = document.querySelector("#form-register");
  //   const info = {};

  //   inputElement.forEach((element) => {
  //     info[element.name] = element.value;

  //     console.log(element.email);
  //   })
  //   info.status = "active";
  //   if (info.email == "huyvo02112003@gmail.com") {
  //     info.isadmin = "Yes"
  //   }else {
  //     info.isadmin = "No"
  //   }
  //   return info;
  // }

  // getValueInput();


  const rexgEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const error = {
    isError: false,
    emailMsg: "",
    passwordMsg: "",
    repeaptPasswordMsg: "",
  };


  if (!emailValue.match(rexgEmail)) {
    error.isError = true;
    error.emailMsg = "Email không đúng định dạng , vui lòng nhập lại"
  };

  if (emailValue.length > 30) {
    error.isError = true;
    error.emailMsg = "Email quá dài vui lòng nhập lại";
  };

  if (!passwordValue || passwordValue.length < 8 || passwordValue.length > 20) {
    error.isError = true;
    error.passwordMsg = "Mật khẩu ngắn hơn 8 ký tự hoặc dài hơn 20 ký tự , vui lòng nhập lại";
  };

  if (passwordValue !== repeaptPasswordValue) {
    error.isError = true;
    error.repeaptPasswordMsg = "Mật khẩu không trùng, vui lòng nhập lại ";
  };

  renderError(error)

  if (!error.isError) {
    const accounts = JSON.parse(localStorage.getItem("accounts")) ?? [];
    let isDulicate = false;
    accounts.forEach((user) => {
      if (user.email === emailValue) {
        error.emailMsg =
          "Email đã tồn tại, vui lòng chọn email khác hoặc login";
        isDulicate = true;
        renderError(error);
      }
    });

    if (!isDulicate) {
      accounts.push({
        email: emailValue,
        password: passwordValue,
        userName: usersNameValue,
        status: true,
      });
      localStorage.setItem("accounts", JSON.stringify(accounts));

      window.location = "login.html";
    }
  }
})



function renderError(error) {
  const errorEmailElement = document.querySelector('#error-email');
  const errorPasswordElement = document.querySelector('#error-password');
  const errorRepeatPasswordElement = document.querySelector('#error-repeapt-password');

  errorEmailElement.innerHTML = error.emailMsg;
  errorPasswordElement.innerHTML = error.passwordMsg;
  errorRepeatPasswordElement.innerHTML = error.repeaptPasswordMsg;
}

