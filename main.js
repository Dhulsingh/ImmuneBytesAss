const loginForm = document.getElementById("login-form");
const createAccountBtn = document.getElementById("create-account-btn");

// Add event listener for login form submission
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    // Send GET request to backend to validate login credentials and generate OTP
    const response = await fetch(`/login?email=${email}&password=${password}`);
    const data = await response.json();

    if (data.validated) {
      // Redirect to Thank You page with account information
      window.location.href = `/thankyou?name=${data.name}&email=${email}&company=${data.company}&age=${data.age}&dob=${data.dob}`;
    } else {
      // Redirect to Sorry page for incorrect credentials
      window.location.href = "/sorry";
    }
  } catch (error) {
    console.error(error);
  }
});

// Add event listener for create account button click
createAccountBtn.addEventListener("click", () => {
  // Redirect to Create Account page
  window.location.href = "/create";
});
