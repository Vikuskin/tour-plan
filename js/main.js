$(document).ready(function () {
const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});

var menuButton = $(".menu-button");
var body = $("body");
menuButton.on("click", function () {
  $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  body.toggleClass("modal-open");
});

$('.parallax-window').parallax({imageSrc: '../img/newsletter-bg.jpg'});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
var closeModalOverlay = $(".modal__overlay");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);
closeModalOverlay.on("click", closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  var body = $("body");
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
  body.addClass('modal-open');
}
function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  var body = $("body");
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
  body.removeClass('modal-open');
}
  
  $(document).on('keydown',function(event) {
   if (event.keyCode == 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }

$("#myModal").on("click", function () {
  $("body").addClass("modal-open");
}).on("hidden", function () {
  $("body").removeClass("modal-open")
});
});

//обработка форм 
$(".form").each(function () {
  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Please specify your name",
      minlength: "The name must be at least 2 characters long"
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
      required: "Phone is required",
    },
  },
});
  $(".subscribe").validate({
    errorClass: "form-subscribe",
    messages: {
      subscribe: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
    },

})


$('.telephone').mask("+7(000)000-00-00", {
      translation: {
        placeholder: "(000)000-00-00"
      }
    });
});

AOS.init();
});