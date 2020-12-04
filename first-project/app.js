$(() => {
  $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?zip=94025,us&appid=7fa87af9efde6d7183d84d7ce869e1b2&units=imperial`
  }).then(
    (data) => {
      console.log(data);
    }
  )
})
