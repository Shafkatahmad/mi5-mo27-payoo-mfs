// console.log('button clicking file added')
// search: form submit reloading the page
document.getElementById('button-login').addEventListener('click', function(event) {
  // prevent default behavior (prevent reloading browser)
  event.preventDefault;
  console.log('console button clicked');

  const phoneNumber = document.getElementById('phone-number').value;
  console.log(phoneNumber);
  console.log(phoneNumber); // delete the line
})