document.addEventListener('DOMContentLoaded', function() {
  
  const fullname = document.getElementById('fullname');
  const mail = document.getElementById('mail');
  const phone = document.getElementById('phone');
  const selectOption = document.getElementById('selectOption');
  const message = document.getElementById('message');
  const submit = document.getElementById('submit');

  submit.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Clicked');

      let ebody = `
      <br>Name: <br>${fullname.value}
      <br>
      <br>Email: <br>${mail.value}
      <br>
      <br>phone: <br>${phone.value}
      <br>
      <br>Short Course: <br>${selectOption.value}
      <br>
      <br>${message.value}
      <br>
      `;

      Email.send({
          Host : "smtp.elasticemail.com",
          Username : "primeskilltraining@outlook.com",
          Password : "C4C36F8657C0BE5881366034554FAC6DF0CA",
          To : 'primeskilltraining@outlook.com',
          From : "primeskilltraining@outlook.com",
          Subject : "New Application notification",
          Body : ebody
      }).then(
        message => {
          if (message == "OK"){
            Swal.fire({
              title: "Submitted",
              text: "Prime Skill has recieved your application",
              icon: "success"
            });
            // reset to default after i submit my quote
            message.value ="";
            fullname.value = "";
            mail.value = "";
            phone.value = "";
            
          }
        }
      );
  });
});




// C4C36F8657C0BE5881366034554FAC6DF0CA

