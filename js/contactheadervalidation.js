function sendEmail() {
  const name = document.getElementById("bname").value;
  const email = document.getElementById("Email").value;
  const website = document.getElementById("weburl").value;
  const contact = document.getElementById("brandPhone").value;
  const message = document.getElementById("message").value;
  const recaptchaResponse = grecaptcha.getResponse();

  if (!name || !email || !website || !contact || !recaptchaResponse) {
    alert("Please fill all the fields and complete the reCAPTCHA.");
    return;
  }

  var form = document.getElementsByName('contact-form')[0];
  document.getElementById("mail-btn").disabled = true;
  document.getElementById("btn-spinner").style.display = "inline-block";

  const endpoint = 'https://www.mywalll.com/v1/user/sendEmail';
  const request = {
    name,
    email,
    website,
    contact,
    message,
    recaptchaResponse
  };

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  }).then((res) => {
    form.reset();
    document.getElementById("mail-btn").disabled = false;
    document.getElementById("btn-spinner").style.display = "none";
    if (res.status == 200) {
      window.location.href = "../thank-you.html";
      return;
    }
    alert("Something went wrong, please try again later");
    console.log("res ", res);
  }).catch((error) => {
    document.getElementById("mail-btn").disabled = false;
    document.getElementById("btn-spinner").style.display = "none";
    alert("Something went wrong, please try again later");
    console.error("error ", error);
  });
}