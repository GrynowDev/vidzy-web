function sendEmail() {
  const name = document.getElementById("bname").value;
  const email = document.getElementById("Email").value;
  const website = document.getElementById("weburl").value;
  const recaptchaResponse = grecaptcha.getResponse();
  // Get the selected country code and country name
  const countryCodeData = document.getElementById("countryCode").value;
  const [countryCode, countryName] = countryCodeData.split('|');

  const contact = document.getElementById("brandPhone").value;
  const fullContact = `${countryName}${countryCode}${contact}`; // Combine country code and phone number
  const message = document.getElementById("message").value;

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailError = document.getElementById("emailError");

  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    return;
  } else {
    emailError.textContent = "";
  }

  if (!name || !email || !website || !contact || !recaptchaResponse) {
    alert("Please fill all the fields and complete the reCAPTCHA.");
    return;
  }

  const form = document.getElementsByName("contact-form")[0];
  document.getElementById("mail-btn").disabled = true;
  document.getElementById("btn-spinner").style.display = "inline-block";

  // Fetch the API key from the meta tag
  const apiKey = document
    .querySelector('meta[name="x-api-key"]')
    .getAttribute("content");

  const endpoint = "https://www.mywalll.com/v1/users/sendEmails";

  const request = {
    name,
    email,
    website,
    contact: fullContact, // Send the full contact number
    message,
    recaptchaResponse
  };

  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify(request),
  })
    .then((data) => {
      console.log(data, "data found");
      form.reset();
      document.getElementById("mail-btn").disabled = false;
      document.getElementById("btn-spinner").style.display = "none";
      if (data.status == 200) {
        window.location.href = "../thank-you.html";
        return;
      }

      alert("Something went wrong, please try again later");
      console.log("res ", data);
    })
    .catch((error) => {
      document.getElementById("mail-btn").disabled = false;
      document.getElementById("btn-spinner").style.display = "none";
      alert("Something went wrong, please try again later");
      console.log("error ", error);
    });
}