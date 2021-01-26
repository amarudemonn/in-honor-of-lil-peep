$(document).ready(() => {
  // Vars
  const scrollTiming = 500;
  const backTiming = 2000;
  const opacityTiming = 2500;
  const showCaseBtn = $("#showcase .btn");
  const whoBtn = $('#who .btn');
  const birthCareerBtn = $('#birth-career .btn');
  const deathBtn = $('#death .btn');

  // Smooth link scroll
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, scrollTiming);
  });

  // Animations
  $("#showcase").animate({ backgroundColor: '#af1a07' }, backTiming, () => {
    $("#showcase img").animate({ opacity: '1' }, opacityTiming, () => {
      $("#showcase h1, #showcase h2").animate({ opacity: 1 }, opacityTiming, () => {
        showCaseBtn.show();
        showCaseBtn.animate({ opacity: '1' }, opacityTiming);
      });
    });
  });

  showCaseBtn.on('click', () => {
    setTimeout(() => {
      $('#who').animate({ backgroundColor: '#e64681' }, backTiming, () => {
        $('#who h2').animate({ opacity: 1 }, opacityTiming, () => {
          $('#who p').animate({ opacity: 1 }, opacityTiming, () => {
            $('#who img').animate({ opacity: 1 }, opacityTiming, () => {
              whoBtn.show();
              $('#who .btn').animate({ opacity: 1 }, opacityTiming);
            });
          });
        });
      });
    }, scrollTiming);
  });

  whoBtn.on('click', () => {
    setTimeout(() => {
      $('#birth-career').animate({ backgroundColor: '#af1a07' }, backTiming, () => {
        $('#birth-career h2').animate({ opacity: 1 }, opacityTiming, () => {
          $('#birth-career p').animate({ opacity: 1 }, opacityTiming, () => {
            $('#birth-career img').animate({ opacity: 1 }, opacityTiming, () => {
              birthCareerBtn.show();
              $('#birth-career .btn').animate({ opacity: 1 }, opacityTiming);
            });
          });
        });
      });
    }, scrollTiming);
  });

  birthCareerBtn.on('click', () => {
    setTimeout(() => {
      $('#death').animate({ backgroundColor: '#e64681' }, backTiming, () => {
        $('#death h2').animate({ opacity: 1 }, opacityTiming, () => {
          $('#death p').animate({ opacity: 1 }, opacityTiming, () => {
            $('#death img').animate({ opacity: 1 }, opacityTiming, () => {
              deathBtn.show();
              $('#death .btn').animate({ opacity: 1 }, opacityTiming);
            });
          });
        });
      });
    }, scrollTiming);
  });

  deathBtn.on('click', () => {
    setTimeout(() => {
      $('#the-end').animate({ backgroundColor: '#af1a07' }, backTiming, () => {
        $('#the-end h2').animate({ opacity: 1 }, opacityTiming, () => {
          $('#the-end h3').animate({ opacity: 1 }, opacityTiming, () => {
            $('#the-end .social').show();
            $('#the-end .social').animate({ opacity: 1 }, opacityTiming, () => {
              $('#the-end p').animate({ opacity: 1 }, opacityTiming, () => {
                $('#the-end .btn').show();
                $('#the-end .btn').animate({ opacity: 1 }, opacityTiming);
              });
            });
          });
        });
      });
    }, scrollTiming);
  })
});