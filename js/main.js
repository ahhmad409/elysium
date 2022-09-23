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

      downloadButton.setAttribute("href", "./downloads/dummy.mkv");

      // FOR PRODUCTION, uncomment below code
      if (link.textContent == "Brochure")
        downloadButton.setAttribute("href", "./downloads/booking-form.pdf");
      else if (link.textContent == "3D Walkthrough")
        downloadButton.setAttribute(
          "href",
          "./downloads/7-Canal-walkthrough.mp4"
        );
      else if (link.textContent == "Price Lists") {
        downloadButton.setAttribute("download", "Price List");
        downloadButton.setAttribute("href", "./downloads/booking-form.pdf");
      } else if (link.textContent == "Construction Update")
        downloadButton.setAttribute("href", "booking-form.pdf");
      else if (link.textContent == "Layouts")
        downloadButton.setAttribute("href", "booking-form.pdf");
      else if (link.textContent == "Floor Plans")
        downloadButton.setAttribute("href", "./downloads/booking-form.pdf");
      else if (link.textContent == "Booking Form")
        downloadButton.setAttribute("href", "./downloads/booking-form.pdf");
      else if (link.textContent == "Certifications | NOC's")
        downloadButton.setAttribute("href", "./downloads/booking-form.pdf");
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

document
  .getElementsByClassName("book_now_bottom_section")[0]
  .addEventListener("mouseenter", () => {
    document.getElementsByClassName("booking_form")[0].style.transform =
      "scaleX(1)";
  });

document
  .getElementsByClassName("book_now_widget book_now_wrapper")[0]
  .addEventListener("mouseleave", () => {
    document.getElementsByClassName("booking_form")[0].style.transform =
      "scaleX(0)";
  });

let arrowBtn = document.getElementById("book_now_arrow");

arrowBtn.addEventListener("mouseenter", () => {
  document.getElementsByClassName("booking_form")[0].style.transform =
    "scaleX(0)";
});

arrowBtn.addEventListener("click", () => {
  let widget = document.getElementsByClassName("book_now_bottom_section")[0];
  if (widget.classList.contains("book_now_widget_hidden")) {
    widget.style.left = "0px";
    arrowBtn.innerText = "←";
    arrowBtn.style.borderBottomRightRadius = "0px";
  } else {
    widget.style.left = "-50px";
    arrowBtn.innerText = "→";
    arrowBtn.style.borderRadius = "0 6px 6px 0";
  }
  widget.classList.toggle("book_now_widget_hidden");
});

function onFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("book-now-name");
  const phone = document.getElementById("book-now-phone");
  const email = document.getElementById("book-now-email");
  const option = document.getElementById("book-now-dropdown");
  const message = document.getElementById("book-now-message");

  console.log("name", name.value);
  console.log("phone", phone.value);
  console.log("email", email.value);
  console.log("option", option.value);
  console.log("message", message.value);

  name.value = "";
  phone.value = "";
  email.value = "";
  option.value = "";
  message.value = "";

  Swal.fire({
    title: "Your Query has been recieved",
    confirmButtonText: "OK",
  });

  document.getElementsByClassName("booking_form")[0].style.transform =
    "scaleX(0)";
}

let downloadArrowButton = document.getElementById("download_widgets_arrow");

downloadArrowButton.addEventListener("click", () => {
  // alert('arrow button clicked')

  let widget = document.getElementsByClassName(
    "downloads_widget_bottom_section"
  )[0];
  if (widget.classList.contains("book_now_widget_hidden")) {
    widget.style.right = "0px";
    downloadArrowButton.innerText = "→";
    downloadArrowButton.style.borderBottomLeftRadius = "0px";
  } else {
    widget.style.right = "-160px";
    downloadArrowButton.innerText = "←";
    downloadArrowButton.style.borderBottomLeftRadius = "10px";
  }
  widget.classList.toggle("book_now_widget_hidden");

  let downloadList = document.getElementById("downloads_list");
  if (downloadList.classList.contains("opened")) {
    downloadList.classList.remove("opened");
    downloadList.style.left = "7rem";
  }
});

document
  .getElementById("widget_downloads")
  .addEventListener("mouseenter", () => {
    let downloadList = document.getElementById("downloads_list");
    if (!downloadList.classList.contains("opened")) {
      downloadList.style.left = "-10.3rem";
    } else {
      downloadList.style.left = "7rem";
    }
    downloadList.classList.toggle("opened");
  });

document.getElementById("downloads_list").addEventListener("mouseleave", () => {
  let downloadList = document.getElementById("downloads_list");
  if (downloadList.classList.contains("opened")) {
    downloadList.style.left = "7rem";
    downloadList.classList.remove("opened");
  }
});

document
  .getElementById("book_now_bottom_section")
  .addEventListener("click", () => {
    let downloadList = document.getElementById("downloads_list");
    if (downloadList.classList.contains("opened")) {
      downloadList.style.left = "7rem";
      downloadList.classList.remove("opened");
    }
  });

document.getElementById("sidebarButton").addEventListener("click", (event) => {
  let sidebar = document.getElementById("right-sidebar");
  sidebar.style.right = "0px";
});

document
  .getElementById("sidebar_closeButton")
  .addEventListener("click", (event) => {
    let sidebar = document.getElementById("right-sidebar");
    sidebar.style.right = "-400px";
  });

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
