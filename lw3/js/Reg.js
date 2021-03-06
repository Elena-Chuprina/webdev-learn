function CheckEmail(email) {
  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  return pattern.test(email);
}

class RegistrationForm {
  constructor(formElement) {
    this.form = formElement;
    this.formEmail = formElement.getElementsByClassName("form_email")[0].value;
    this.formPassword = formElement.getElementsByClassName("form_password")[0].value;
    this.formPasswordRepeat = formElement.getElementsByClassName("form_password_repeat")[0].value;
    this.formCheckbox = formElement.getElementsByClassName("form_checkbox")[0].checked;
  }


Mail(){
  if (!CheckEmail(this.formEmail)) {
    alert("E-mail введен не корректно!");
    return false;
  }
  return true;
}

Password() {
  if (this.formPassword < 6) {
    alert("В пароле должно быть не менее 6 символов");
    return false;
  }
  if (this.formPassword !== this.formPasswordRepeat) {
    alert("Поля 'Пароль' и 'Пароль еще раз' не совпадают!");
    return false;
  }
  return true;
}

Agree(){
  if (!this.formCheckbox) {
    alert("Вы должны быть согласны с правилами сайта!");
    return false;
  }
  return true;
  }
}

document.querySelector(".registration_form").onsubmit = function () {
  var form = new RegistrationForm(document.getElementsByClassName("registration_form")[0]);
  if (form.Mail() && form.Password() && form.Agree())
    alert("Вы зарегистрированы!=)")
};
