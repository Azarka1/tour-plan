//Валидация формы
$('.form').each(function() {
$(this).validate({
    errorClass: "invalid",
    rules: {
'email': {
  required: true,
  email: true,
pattern: true,
}},
    messages: {
    name: {
       required: "Enter your name",
       minlength: "Name is more 2 symbols"
    },
    email: {
      required: "Enter your e-mail",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
        required: "Enter your phone nomber"
    },
  },
});
});


jQuery(function($){
   $("input[type='tel']").mask("+7(999) 999-9999");
});


AOS.init();