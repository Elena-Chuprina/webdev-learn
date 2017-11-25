function validEmail(email) {
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
  validate() {

    //Проверка на совпадение
    if (this.formPassword !== this.formPasswordRepeat) {
      this.errorMsg = "Поля 'Пароль' и 'Пароль еще раз' не совпадают!";
      return false;
    }
    
    //Проверка пароля
    if (this.formPassword.length < 6) {
      this.errorMsg = "В пароле должно быть не менее 6 символов";
      return false;
    }

    //Проверка E-mail на корректность
    if (!validEmail(this.formEmail)) {
      this.errorMsg = "E-mail введен не корректно!";
      return false;
    }
    
    //Проверка маркера на Checkbox
    if (!this.formCheckbox) {
      this.errorMsg = "Вы должны быть согласны с правилами сайта!";
      return false;
    }
    
    return true;
  }
  success() {
    alert("Вы зарегистрированы.");
  }
  error() {
    alert(this.errorMsg);
  }
}

document.querySelector(".registration_form").onsubmit = function () {
  var form = new RegistrationForm(document.getElementsByClassName("registration_form")[0]);
  if (form.validate()) {
    form.success();
  }
  else {
    form.error();
  }
  return false;
};
