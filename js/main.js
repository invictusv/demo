// Имитация валидации и отправки данных без использования дополнительный плагинов и ибиблиотек

// Примитивная валидация поля e-mail 
function validateEmail(form_id, email) {
   let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   let address = document.forms[form_id].elements[email].value;
   if(reg.test(address) == false) {
      document.getElementById("message").innerHTML = "*Ошибка идентификационных данных,<br>введите корректный E-mail "; 
      return false;
   } else {
         document.getElementById("message").innerHTML = "E-mail введен корректно";      
      }  
   return reg.test(address);
}

// Примитивная валидация поля password и имитация проверки пароля (любой пароль от 8 до 15 символов)
function validatePassword() {
   let pw = document.getElementById("pswd").value;  
   if(pw == "") {  
     document.getElementById("message_1").innerHTML = "*Введите пароль";  
     return false;  
   }       
   if(pw.length < 8) {  
     document.getElementById("message_1").innerHTML = "*Не верный пароль";  
     return false;  
   }     
   if(pw.length > 15) {  
     document.getElementById("message_1").innerHTML = "*Не верный пароль, повторите попытку позже";  
     return false;  
   }  else {
      document.getElementById("message_1").innerHTML = "";
      alert('Данные верны! Добро пожаловать в систему Альфа-Клик!');  
      } 
}  


// JSON
document.getElementById('form_id').addEventListener('submit', submitForm);

// Сборка данных формы в объект, сборка запроса и отправка
function submitForm(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    let request = new Request(event.target.action, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    // Отпрвка
    fetch(request).then(
        function(response) {
            // Запрос успешно выполнен
            console.log(response);
            //return response.json()
        },
        function(error) {
            // Не удалось отправить запрос
            console.error(error);
        }
    );
    console.log('Запрос отправляется');
}