
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .GetThreeDaysForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal Aujourd'hui
      const main0 = data.list[0].weather[0].main;
      const description0 = data.list[0].weather[0].description;
      const temp0 = data.list[0].temp.day;
      const icon0 = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // Modifier le DOM Aujourd'hui
      document.getElementById('today-forecast-main0').innerHTML = main0;
      document.getElementById('today-forecast-more-info0').innerHTML = description0;
      document.getElementById('icon-weather-container0').innerHTML = icon0;
      document.getElementById('today-forecast-temp0').innerHTML = `${temp0}°C`;

      // On récupère l'information principal Demain
      const main1 = data.list[1].weather[0].main;
      const description1 = data.list[1].weather[0].description;
      const temp1 = data.list[1].temp.day;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // Modifier le DOM Demain
      document.getElementById('today-forecast-main1').innerHTML = main1;
      document.getElementById('today-forecast-more-info1').innerHTML = description1;
      document.getElementById('icon-weather-container1').innerHTML = icon1;
      document.getElementById('today-forecast-temp1').innerHTML = `${temp1}°C`;

      // On récupère l'information principal Après demain
      const main2 = data.list[2].weather[0].main;
      const description2 = data.list[2].weather[0].description;
      const temp2 = data.list[2].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      // Modifier le DOM Après demain
      document.getElementById('today-forecast-main2').innerHTML = main2;
      document.getElementById('today-forecast-more-info2').innerHTML = description2;
      document.getElementById('icon-weather-container2').innerHTML = icon2;
      document.getElementById('today-forecast-temp2').innerHTML = `${temp2}°C`;

      // On récupère l'information principal Encore après demain
      const main3 = data.list[3].weather[0].main;
      const description3 = data.list[3].weather[0].description;
      const temp3 = data.list[3].temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);

      // Modifier le DOM Encore après demain
      document.getElementById('today-forecast-main3').innerHTML = main3;
      document.getElementById('today-forecast-more-info3').innerHTML = description3;
      document.getElementById('icon-weather-container3').innerHTML = icon3;
      document.getElementById('today-forecast-temp3').innerHTML = `${temp3}°C`;



    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });
}
