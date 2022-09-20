const bookBtn = document.getElementById("book-btn");

bookBtn.addEventListener("click", () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const apartments = document.getElementById("apartments");
  const message = document.getElementById("message");

  if (
    !name.value ||
    !email.value ||
    phone.value ||
    apartments.value ||
    !message.value
  ) {
    Swal.fire({
      title: "Please Enter All Fields",
      confirmButtonText: "OK",
    });
    return;
  }

  console.log(name.value);
  console.log(email.value);
  console.log(phone.value);
  console.log(apartments.value);
  console.log(message.value);

  Swal.fire({
    title: "Your query has been received",
    confirmButtonText: "OK",
  });

  name.value = "";
  email.value = "";
  phone.value = "";
  apartments.value = "";
  message.value = "";
});
