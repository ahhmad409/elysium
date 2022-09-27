(function ($) {
  "use strict";
  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
})(jQuery);

// show toaster
function ShowToastr() {
  toastr.success("Your message has been sent successfully!");
  $("#toast-container").css("background", "aquamarine");
  $(".toast-message").css("color", "black");
}

const allLinks = document.querySelectorAll(".downloadLink").forEach((link) => {
  link.addEventListener("click", () => {
    const downloadButton = document.getElementById("downloadBtn");

    downloadButton.addEventListener("click", () => {
      const name = document.getElementById("inputName");
      const email = document.getElementById("inputEmail");
      const contact = document.getElementById("inputContact");

      if (!name.value || !email.value || !contact.value) {
        downloadButton.setAttribute("href", "#");
        Swal.fire({
          title: "Please Enter All Fields",
          confirmButtonText: "OK",
        });
        return;
      }

      const validEmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.value.match(validEmail)) {
      } else {
        downloadButton.setAttribute("href", "#");

        Swal.fire({
          title: "Please check your email again!",
          confirmButtonText: "OK",
        });
        return;
      }

      const validPhone = "^([0-9()/+ -]*)$";
      if (contact.value.match(validPhone)) {
      } else {
        downloadButton.setAttribute("href", "#");

        Swal.fire({
          title: "Please check your phone number!",
          confirmButtonText: "OK",
        });
        return;
      }

      if (link.textContent == "Brochure")
        downloadButton.setAttribute("href", "./downloads/flyer.pdf");
      else if (link.textContent == "3D Walkthrough")
        downloadButton.setAttribute("href", "#");
      else if (link.textContent == "Price Lists") {
        downloadButton.setAttribute("href", "#");
      } else if (link.textContent == "Construction Update")
        downloadButton.setAttribute("href", "#");
      else if (link.textContent == "Layouts")
        downloadButton.setAttribute("href", "#");
      else if (link.textContent == "Floor Plans")
        downloadButton.setAttribute("href", "./downloads/floor-plans.pdf");
      else if (link.textContent == "Booking Form")
        downloadButton.setAttribute("href", "./downloads/booking-form.pdf");
      else if (link.textContent == "Certifications | NOC's")
        downloadButton.setAttribute("href", "./downloads/nocs.pdf");

      var Obj = {
        subject: "Booking Inquiry",
        message:
          "<html><b>This person wants to get in touch with you!</p><h3>Name:</b><strong>" +
          $("#inputName").val() +
          "</strong><h3> Email:</h3><strong>" +
          $("#inputEmail").val() +
          "</strong><h3> Phone:</h3><strong>" +
          $("#inputContact").val() +
          "</strong><br></br></html>",
      };
      $.ajax({
        url: "https://einvoicing.000webhostapp.com/index.php",
        type: "POST",
        data: Obj,
        success: function (data) {
          console.log(data);
          ShowToastr();
        },
      });
    });
  });
});

// to handle dropdown of bootstrap and make it open when hovering instead of clicking on it, for reference check below link
// https://www.tutorialrepublic.com/faq/how-to-open-bootstrap-dropdown-menu-on-hover-rather-than-click.php#:~:text=Answer%3A%20Use%20the%20jQuery%20hover,using%20the%20CSS%20and%20jQuery.
$(document).ready(function () {
  $(".dropdown").hover(function () {
    var dropdownMenu = $(this).children(".dropdown-menu");
    if (dropdownMenu.is(":visible")) {
      dropdownMenu.parent().toggleClass("open");
    }
  });
});
