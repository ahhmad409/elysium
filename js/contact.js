const sendMessageButton = document.getElementById("sendMessageButton");
const personName = document.getElementById("personName");
const personEmail = document.getElementById("personEmail");
const personMessage = document.getElementById("personMessage");

sendMessageButton.addEventListener("click", (e) => {
  checkInputs();
});

function checkInputs() {
  if (!personName.value || !personEmail.value || !personMessage.value) {
    Swal.fire({
      title: "Please Enter All Fields",
      confirmButtonText: "OK",
    });
    return;
  }

  if (!isEmail(personEmail.value)) {
    Swal.fire({
      title: "Please check your email again",
      confirmButtonText: "OK",
    });
    return;
  }

  Swal.fire({
    title: "Your Query Has Been Recieved!",
    confirmButtonText: "OK",
  });

  const body = {
    name: personName.value,
    email: personEmail.value,
    message: personMessage.value,
  };

  axios.post("http://localhost:5501", body).then((response) => {
    console.log(response.data.data);
  });

  personName.value = "";
  personEmail.value = "";
  personMessage.value = "";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
