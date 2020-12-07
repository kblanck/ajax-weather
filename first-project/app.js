$(() => {

  const $modalDiv = $('#modal').css('display', 'none');
  const $modalContentDiv = $('#modal-content');

  const openModal = () => {
    $modalDiv.css('display', 'flex');
    $modalDiv.css('background-color', 'rgba(0,0,0,0.6)');
  }

  const closeModal = $('#modal-close').on('click', () => {
    $('#modal').css('display', 'none');
    location.reload(true);
  })

  $('.button').on('click', (e) => {

    e.preventDefault();

    openModal();

    const $zip = $('#zip').val();

  $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?zip=${$zip},us&appid=7fa87af9efde6d7183d84d7ce869e1b2&units=imperial`,
    type: "GET",
  }).then(
    (data) => {
      const temp = Math.round(data.main.feels_like);
      const rain = data.weather[0].main
      console.log(rain);
      if (temp <= 10) {
        $modalContentDiv.append(`Oh my God, it feels like ${temp}° outside. Stay inside!`);
      } else if (temp > 10 && temp <= 25) {
          $modalContentDiv.append(`Yikes, it feels like ${temp}° outside. Grab that sleeping bag coat.`);
        } else if (temp > 25 && temp <= 39) {
          $modalContentDiv.append(`Yeah, we wouldn't say it's warm (because it feels like ${temp}° out there). Get that down coat on.`);
        } else if (temp > 39 && temp <= 49) {
          $modalContentDiv.append(`Not so bad! It feels like ${temp}° out there, so grab that wool coat.`);
        } else if (temp > 49 && temp <= 59) {
          $modalContentDiv.append(`Oooh. In our opinion, ${temp}° is the PERFECT walking temp. Break out that bomber today!`).append('<img id="bomber" src="./imgs/bomber.png">');
        } else if (temp > 59 && temp <= 68) {
          $modalContentDiv.append(`We love a balmy ${temp}°. All you need is a denim jacket today, honey!`);
        } else if (temp > 68 && temp <= 74) {
          $modalContentDiv.append(`It's ${temp}° where you are?? Girl, all you need is a hoodie! Go enjoy your day!`);
        } else if (temp > 74 && temp <= 95) {
          $modalContentDiv.append(`Wow, at ${temp}°, winter is not known where you are. Throw on a T-shirt and enjoy your year-round summer!`);
        }
      },
    (error) => {
      alert('This zip code is not recognized!');
    })
    }
  )
})
