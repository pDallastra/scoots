const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=e488b641e56e59b24e07ad11f68b56b7";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      document.getElementById('todayTemp').textContent = jsObject.list[0].main.temp + '°F';
      document.getElementById('todayHum').textContent = jsObject.list[0].main.humidity + '%';
      todayImg = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';
      document.getElementById('todayCond').setAttribute('src', todayImg)

      document.getElementById('tomorrowTemp').textContent = jsObject.list[7].main.temp + '°F';
      document.getElementById('tomorrowHum').textContent = jsObject.list[7].main.humidity + '%';
      tomorrowImg = 'https://openweathermap.org/img/w/' + jsObject.list[7].weather[0].icon + '.png';
      document.getElementById('tomorrowCond').setAttribute('src', tomorrowImg)

      document.getElementById('nextTemp').textContent = jsObject.list[15].main.temp + '°F';
      document.getElementById('nextHum').textContent = jsObject.list[15].main.humidity + '%';
      nextImg = 'https://openweathermap.org/img/w/' + jsObject.list[15].weather[0].icon + '.png';
      document.getElementById('nextCond').setAttribute('src', nextImg);
  });