let map;
let marker;

function initMap ()
  {
  map = new ymaps.Map("yandexmap", {
    center: [56.726805, 37.146316],
    zoom: 16
    });
  marker = new ymaps.Placemark([56.726805, 37.146316], {
    hintContent: 'Расположение',
    balloonContent: 'Место проживания'
    });
  map.geoObjects.add(marker);
  document.querySelector('.preloader').classList.add("preloader-remove");
  }
ymaps.ready(initMap);
