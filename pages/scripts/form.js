const btn = document.querySelector('.form-btn');
const name = document.querySelector('#full-name');
const email = document.querySelector('#email');
const phoneNum = document.querySelector('#phone-number');
const msg = document.querySelector('#msg-box');
const sentEle = document.querySelector('#sent-confirmation');

//resets form felids
const resetForm = () => {
  name.value = '';
  email.value = '';
  phoneNum.value = '';
  msg.value = '';
};

//Builds the inquiry object for API next steps
const buildInquiryObject = () => {
  let inquiryObject = {
    name: name.value,
    email: email.value,
    phoneNum: phoneNum.value,
    message: msg.value,
  };
  return inquiryObject;
};

// Visual Display that user msg has been sent for 5 seconds
const sentConfirmation = () => {
  sentEle.innerHTML = 'Message Sent';
  setTimeout(() => {
    sentEle.innerHTML = '';
  }, 5000);
};

//Form Submit btn
btn.addEventListener('click', () => {
  console.log(buildInquiryObject());
  resetForm();
  sentConfirmation();
});
