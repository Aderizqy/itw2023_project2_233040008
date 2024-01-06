// slide product
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        768:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1400:{
            items: 4,
            loop: false,
        }
    }
});

// contact form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyat5GbxtUF4R0RMnNHocvR6Zh7OReeEEM7-zm4d4DzuzqCBkMfk-r1bSzJptfBhAgD/exec'
  const form = document.forms['elzio-contact-form']
  const btnKirim = document.querySelector('.btn-kirim');
  const btnLoading = document.querySelector('.btn-loading');
  const myAlert = document.querySelector('.my-alert');
  form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika tombol di klik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // tampilkan tombol kirim, hilangkan tombol loading
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        // tampilkan Alert
        myAlert.classList.toggle('d-none');
        // reset form
        form.reset();
        console.log('Success!', response);
    })
      .catch(error => console.error('Error!', error.message))
  });

  
