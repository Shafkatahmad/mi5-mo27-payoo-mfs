// console.log('button clicking file added')
// search: form submit reloading the page
// document.getElementById('button-login').addEventListener('click', function(event) {
//   // prevent default behavior (prevent reloading browser)
//   event.preventDefault;

//   const phoneNumber = document.getElementById('phone-number').value;
//   const pinNumber = document.getElementById('pin-number').value;
//   console.log(phoneNumber, pinNumber);

//   // this is temporary
//   if(phoneNumber === '010101' && pinNumber === '1234') {
//     console.log('you are logged in');
//   }
//   else {
//     alert('Wrong phone number or pin');
//   }
// })

document.getElementById('button-login').addEventListener('click', function(event) {
  event.preventDefault();

  // get phone number and pin
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  // console.log(phoneNumber, pinNumber);

  // bad way to validate
  if(phoneNumber === '5' && pinNumber === '1234') {
    console.log('You are logged in');
    window.location.href = './home.html';
  }
  else{
    alert('Wrong phone number or pin');
  }
});